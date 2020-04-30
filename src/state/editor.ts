import * as vscode from 'vscode'

import { DocumentState }           from './document'
import { Mode, ModeConfiguration, SelectionBehavior } from './extension'
import { CommandState, InputKind } from '../commands'
import { extensionName }           from '../extension'
import { assert }                  from '../utils/assert'


/**
 * Editor-specific state.
 */
export class EditorState {
  /**
   * The internal identifir of the ID.
   *
   * Unlike documents, VS Code does not reuse `vscode.TextEditor` objects,
   * so comparing by reference using `===` may not always return `true`,
   * even for the same document. To keep editor-specific state anyway,
   * we're using its internal identifier, which seems to be unique and
   * to stay the same over time.
   */
  private _id: string

  /**
   * The last matching editor.
   */
  private _editor: vscode.TextEditor

  private _mode!: Mode

  private _typeCommandDisposable?: vscode.Disposable

  /**
   * The mode of the editor.
   */
  get mode() {
    return this._mode
  }

  /**
   * The extension for which state is being kept.
   */
  get extension() {
    return this.documentState.extension
  }

  /**
   * The editor for which state is being kept.
   */
  get editor() {
    return this._editor
  }

  /**
   * Whether the editor for which state is being kept is the active text editor.
   */
  get isActive() {
    return vscode.window.activeTextEditor === this._editor
  }

  /**
   * Preferred columns when navigating up and down.
   */
  readonly preferredColumns: number[] = []

  constructor(
    /** The state of the document for which this editor exists. */
    readonly documentState: DocumentState,

    /** The text editor for which state is being kept. */
    editor: vscode.TextEditor,
  ) {
    this._id = getEditorId(editor)
    this._editor = editor

    this.setMode(Mode.Normal)
  }

  /**
   * Disposes of the resources owned by and of the subscriptions of this instance.
   */
  dispose() {
    const lineNumbering = vscode.workspace.getConfiguration('editor').get('lineNumbers'),
          options = this._editor.options

    options.lineNumbers = lineNumbering === 'on'       ? vscode.TextEditorLineNumbersStyle.On
                        : lineNumbering === 'relative' ? vscode.TextEditorLineNumbersStyle.Relative
                        : lineNumbering === 'interval' ? vscode.TextEditorLineNumbersStyle.Relative + 1
                        :                                vscode.TextEditorLineNumbersStyle.Off

    this.clearDecorations(this.extension.normalMode.decorationType)
    this.clearDecorations(this.extension.insertMode.decorationType)

    this._typeCommandDisposable?.dispose()
  }

  /**
   * Updates the instance of `vscode.TextEditor` for this editor.
   */
  updateEditor(editor: vscode.TextEditor) {
    assert(this.isFor(editor))

    this._editor = editor

    return this
  }

  /**
   * Returns whether this state is for the given editor.
   */
  isFor(editor: vscode.TextEditor) {
    return this.documentState.document === editor.document
        && this._id === getEditorId(editor)
  }

  /**
   * Sets the mode of the editor.
   */
  setMode(mode: Mode): void
  /**
   * Sets the mode of the editor to `Awaiting`.
   */
  setMode(mode: Mode.Awaiting, typeCommandDisposable?: vscode.Disposable): void

  setMode(mode: Mode, typeCommandDisposable?: vscode.Disposable) {
    if (this._mode === Mode.Awaiting) {
      this._typeCommandDisposable?.dispose()
    }
    if (mode === Mode.Awaiting) {
      this._typeCommandDisposable = typeCommandDisposable
    }

    const { insertMode, normalMode } = this.extension,
          editor = this._editor

    this._mode = mode

    if (mode === Mode.Insert) {
      this.clearDecorations(normalMode.decorationType)
      this.setDecorations(insertMode.decorationType)

      editor.options.lineNumbers = insertMode.lineNumbers
      editor.options.cursorStyle = insertMode.cursorStyle
    } else {
      this.clearDecorations(insertMode.decorationType)
      this.setDecorations(normalMode.decorationType)

      editor.options.lineNumbers = normalMode.lineNumbers
      editor.options.cursorStyle = normalMode.cursorStyle

      this.normalizeSelections()
    }

    if (this.isActive) {
      this.onDidBecomeActive()
    }
  }

  /**
   * Called when `vscode.window.onDidChangeActiveTextEditor` is triggered with this editor.
   */
  onDidBecomeActive() {
    const mode = this._mode

    if (mode === Mode.Insert) {
      this.extension.statusBarItem.text = '$(pencil) INSERT'
    } else if (mode === Mode.Normal) {
      this.extension.statusBarItem.text = '$(beaker) NORMAL'
    }

    vscode.commands.executeCommand('setContext', extensionName + '.mode', mode)
  }

  /**
   * Called when `vscode.window.onDidChangeActiveTextEditor` is triggered with another editor.
   */
  onDidBecomeInactive() {
    if (this.mode === Mode.Awaiting)
      this.setMode(Mode.Normal)
  }

  /**
   * Called when `vscode.window.onDidChangeTextEditorSelection` is triggered.
   */
  onDidChangeTextEditorSelection(e: vscode.TextEditorSelectionChangeEvent) {
    const mode = this.mode

    if (mode === Mode.Awaiting)
      this.setMode(Mode.Normal)

    // Update decorations.
    if (mode === Mode.Insert)
      this.setDecorations(this.extension.insertMode.decorationType)
    else
      this.setDecorations(this.extension.normalMode.decorationType)

    // Debounce normalization.
    if (this.normalizeTimeoutToken !== undefined) {
      clearTimeout(this.normalizeTimeoutToken)
      this.normalizeTimeoutToken = undefined
    }

    if (e.kind === vscode.TextEditorSelectionChangeKind.Mouse) {
      this.normalizeTimeoutToken = setTimeout(() => {
        this.normalizeSelections()
        this.normalizeTimeoutToken = undefined
      }, 200)
    } else {
      this.normalizeSelections()
    }
  }


  // =============================================================================================
  // ==  DECORATIONS  ============================================================================
  // =============================================================================================

  private clearDecorations(decorationType: vscode.TextEditorDecorationType | undefined) {
    if (decorationType !== undefined)
      this._editor.setDecorations(decorationType, [])
  }

  setDecorations(decorationType: vscode.TextEditorDecorationType | undefined) {
    if (decorationType === undefined)
      return

    const editor = this._editor,
          selection = editor.selection,
          extension = this.extension

    if (selection.end.character === 0 && selection.end.line > 0 && extension.selectionBehavior === SelectionBehavior.Character) {
      editor.setDecorations(decorationType, [new vscode.Range(selection.start, selection.end.with(selection.end.line - 1, 0))])
      editor.options.cursorStyle = vscode.TextEditorCursorStyle.LineThin
    } else {
      editor.setDecorations(decorationType, [selection])
      editor.options.cursorStyle = this.mode === Mode.Insert ? extension.insertMode.cursorStyle : extension.normalMode.cursorStyle
    }
  }


  // =============================================================================================
  // ==  HISTORY  ================================================================================
  // =============================================================================================

  private readonly _commands = [] as CommandState<any>[]

  /**
   * The commands that were last used in this editor, from the earliest to the latest.
   */
  get recordedCommands() {
    return this._commands as readonly CommandState<any>[]
  }

  /**
   * Records invocation of a command.
   */
  recordCommand<I extends InputKind>(state: CommandState<I>) {
    this.documentState.recordCommand(state)
    this._commands.push(state)

    // For now, history is limited to 20 items.
    if (this._commands.length === 20)
      this._commands.shift()
  }


  // =============================================================================================
  // ==  SELECTION NORMALIZATION  ================================================================
  // =============================================================================================

  private normalizeTimeoutToken: NodeJS.Timeout | undefined = undefined

  /**
   * Whether selection changes should be ignored, therefore not automatically normalizing selections.
   */
  ignoreSelectionChanges = false

  /**
   * Make all selections in the editor non-empty by selecting at least one character.
   */
  normalizeSelections() {
    if (this._mode !== Mode.Normal || this.extension.selectionBehavior === SelectionBehavior.Caret || this.ignoreSelectionChanges)
      return

    const editor = this._editor

    // Since this is called every time when selection changes, avoid allocations
    // unless really needed and iterate manually without using helper functions.
    let normalizedSelections: vscode.Selection[] | undefined = undefined

    for (let i = 0; i < editor.selections.length; i++) {
      const selection = editor.selections[i]
      const isReversedOneCharacterSelection = selection.isSingleLine
        ? (selection.anchor.character === selection.active.character + 1)
        : (selection.anchor.character === 0 && selection.anchor.line === selection.active.line + 1 && editor.document.lineAt(selection.active).text.length === selection.active.character)

      if (isReversedOneCharacterSelection) {
        if (normalizedSelections === undefined) {
          // Change needed. Allocate the new array and copy what we have so far.
          normalizedSelections = editor.selections.slice(0, i)
        }

        normalizedSelections.push(new vscode.Selection(selection.active, selection.anchor))
      } else if (selection.isEmpty) {
        if (normalizedSelections === undefined) {
          // Change needed. Allocate the new array and copy what we have so far.
          normalizedSelections = editor.selections.slice(0, i)
        }

        const active = selection.active

        if (active.character >= editor.document.lineAt(active.line).range.end.character) {
          // Selection is at line end. Select line break.
          if (active.line === editor.document.lineCount - 1) {
            // Selection is at the very end of the document as well. Select the last character instead.
            if (active.character === 0) {
              if (active.line === 0) {
                // There is no character in this document, so we give up on normalizing.
                continue
              } else {
                normalizedSelections.push(new vscode.Selection(new vscode.Position(active.line - 1, Number.MAX_SAFE_INTEGER), active))
              }
            } else {
              normalizedSelections.push(new vscode.Selection(active.translate(0, -1), active))
            }
          } else {
            normalizedSelections.push(new vscode.Selection(active, new vscode.Position(active.line + 1, 0)))
          }
        } else {
          const offset = editor.document.offsetAt(selection.active)
          const nextPos = editor.document.positionAt(offset + 1)

          if (nextPos.isAfter(selection.active)) {
            // Move anchor to select 1 character after, but keep the cursor position.
            normalizedSelections.push(new vscode.Selection(active.translate(0, 1), active))
          } else {
            // Selection is at the very end of the document. Select the last character instead.
            normalizedSelections.push(new vscode.Selection(active.translate(0, -1), active))
          }
        }
      } else if (normalizedSelections !== undefined) {
        normalizedSelections.push(selection)
      }
    }

    if (normalizedSelections !== undefined)
      editor.selections = normalizedSelections
  }
}

function getEditorId(editor: vscode.TextEditor) {
  return (editor as unknown as { readonly id: string }).id
}
