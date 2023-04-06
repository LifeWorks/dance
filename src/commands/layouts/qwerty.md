# Commands: `qwerty`

<details>
<summary><b>Quick reference</b></summary>
<table>
<thead>
<tr>
<th>Category</th><th>Identifier</th><th>Title</th><th>Default keybindings</th>
</tr>
</thead>
<tbody>
<tr><td rowspan=2><a href="#dev"><code>dev</code></a></td><td><a href="#dev.copyLastErrorMessage"><code>dev.copyLastErrorMessage</code></a></td><td>Copies the last encountered error message</td><td></td></tr>
<tr><td><a href="#dev.setSelectionBehavior"><code>dev.setSelectionBehavior</code></a></td><td>Set the selection behavior of the specified mode</td><td></td></tr>
<tr><td rowspan=31><a href="#edit"><code>edit</code></a></td><td><a href="#edit.align"><code>edit.align</code></a></td><td>Align selections</td><td><code>Shift+7</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+7</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.case.swap"><code>edit.case.swap</code></a></td><td>Swap case</td><td><code>Shift+`</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+`</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.case.toLower"><code>edit.case.toLower</code></a></td><td>Transform to lower case</td><td><code>`</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>`</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.case.toUpper"><code>edit.case.toUpper</code></a></td><td>Transform to upper case</td><td><code>Alt+`</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+`</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.copyIndentation"><code>edit.copyIndentation</code></a></td><td>Copy indentation</td><td><code>Shift+Alt+7</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+Alt+7</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.deindent"><code>edit.deindent</code></a></td><td>Deindent selected lines</td><td><code>Shift+Alt+,</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+Alt+,</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.deindent.withIncomplete"><code>edit.deindent.withIncomplete</code></a></td><td>Deindent selected lines (including incomplete indent)</td><td><code>Shift+,</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+,</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L44"><code>edit.delete</code></a></td><td>Delete</td><td><code>Alt+D</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+D</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L45"><code>edit.delete-insert</code></a></td><td>Delete and switch to Insert</td><td><code>Alt+C</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+C</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L387"><code>edit.newLine.above.insert</code></a></td><td>Insert new line above and switch to insert</td><td><code>Shift+O</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+O</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L424"><code>edit.newLine.below.insert</code></a></td><td>Insert new line below and switch to insert</td><td><code>O</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>O</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L37"><code>edit.paste.after</code></a></td><td>Paste after</td><td></td></tr>
<tr><td><a href="../edit.ts#L39"><code>edit.paste.after.select</code></a></td><td>Paste after and select</td><td><code>P</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>P</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L36"><code>edit.paste.before</code></a></td><td>Paste before</td><td></td></tr>
<tr><td><a href="../edit.ts#L38"><code>edit.paste.before.select</code></a></td><td>Paste before and select</td><td><code>Shift+P</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+P</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L41"><code>edit.pasteAll.after</code></a></td><td>Paste all after</td><td></td></tr>
<tr><td><a href="../edit.ts#L43"><code>edit.pasteAll.after.select</code></a></td><td>Paste all after and select</td><td><code>Alt+P</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+P</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L40"><code>edit.pasteAll.before</code></a></td><td>Paste all before</td><td></td></tr>
<tr><td><a href="../edit.ts#L42"><code>edit.pasteAll.before.select</code></a></td><td>Paste all before and select</td><td><code>Shift+Alt+P</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+Alt+P</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L35"><code>edit.selectRegister-insert</code></a></td><td>Pick register and replace</td><td><code>Ctrl+R</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Ctrl+R</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L46"><code>edit.yank-delete</code></a></td><td>Copy and delete</td><td><code>D</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>D</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L47"><code>edit.yank-delete-insert</code></a></td><td>Copy, delete and switch to Insert</td><td><code>C</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>C</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../edit.ts#L48"><code>edit.yank-replace</code></a></td><td>Copy and replace</td><td><code>Shift+R</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+R</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.indent"><code>edit.indent</code></a></td><td>Indent selected lines</td><td><code>Shift+.</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+.</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.indent.withEmpty"><code>edit.indent.withEmpty</code></a></td><td>Indent selected lines (including empty lines)</td><td><code>Shift+Alt+.</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+Alt+.</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.insert"><code>edit.insert</code></a></td><td>Insert contents of register</td><td><code>Shift+Alt+R</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#edit.join"><code>edit.join</code></a></td><td>Join lines</td><td><code>Shift+J</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+J</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#edit.join.select"><code>edit.join.select</code></a></td><td>Join lines and select inserted separators</td><td><code>Alt+J</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#edit.newLine.above"><code>edit.newLine.above</code></a></td><td>Insert new line above each selection</td><td></td></tr>
<tr><td><a href="#edit.newLine.below"><code>edit.newLine.below</code></a></td><td>Insert new line below each selection</td><td></td></tr>
<tr><td><a href="#edit.replaceCharacters"><code>edit.replaceCharacters</code></a></td><td>Replace characters</td><td><code>R</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>R</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td rowspan=11><a href="#history"><code>history</code></a></td><td><a href="../history.ts#L59"><code>history.repeat.seek</code></a></td><td>Repeat last seek</td><td><code>Alt+.</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../history.ts#L58"><code>history.repeat.selection</code></a></td><td>Repeat last selection change</td><td></td></tr>
<tr><td><a href="#history.recording.play"><code>history.recording.play</code></a></td><td>Replay recording</td><td><code>Q</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Q</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#history.recording.start"><code>history.recording.start</code></a></td><td>Start recording</td><td><code>Shift+Q</code> (<code>editorTextFocus && dance.mode == 'normal' && !dance.isRecording</code>)<code>Shift+Q</code> (<code>editorTextFocus && dance.mode == 'visual' && !dance.isRecording</code>)</td></tr>
<tr><td><a href="#history.recording.stop"><code>history.recording.stop</code></a></td><td>Stop recording</td><td><code>Escape</code> (<code>editorTextFocus && dance.mode == 'normal' && dance.isRecording</code>)<code>Shift+Q</code> (<code>editorTextFocus && dance.mode == 'normal' && dance.isRecording</code>)<code>Escape</code> (<code>editorTextFocus && dance.mode == 'visual' && dance.isRecording</code>)<code>Shift+Q</code> (<code>editorTextFocus && dance.mode == 'visual' && dance.isRecording</code>)</td></tr>
<tr><td><a href="#history.redo"><code>history.redo</code></a></td><td>Redo</td><td><code>Shift+U</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+U</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#history.redo.selections"><code>history.redo.selections</code></a></td><td>Redo a change of selections</td><td><code>Shift+Alt+U</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#history.repeat"><code>history.repeat</code></a></td><td>Repeat last change</td><td></td></tr>
<tr><td><a href="#history.repeat.edit"><code>history.repeat.edit</code></a></td><td>Repeat last edit without a command</td><td><code>.</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>NumPad_Decimal</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>.</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>NumPad_Decimal</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#history.undo"><code>history.undo</code></a></td><td>Undo</td><td><code>U</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>U</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#history.undo.selections"><code>history.undo.selections</code></a></td><td>Undo a change of selections</td><td><code>Alt+U</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td rowspan=1><a href="#keybindings"><code>keybindings</code></a></td><td><a href="#keybindings.setup"><code>keybindings.setup</code></a></td><td>Set up Dance keybindings</td><td></td></tr>
<tr><td rowspan=3><a href="#match"><code>match</code></a></td><td><a href="#match.surround"><code>match.surround</code></a></td><td>Add stuff surround</td><td></td></tr>
<tr><td><a href="#match.surrounddelete"><code>match.surrounddelete</code></a></td><td>Delete stuff surround</td><td></td></tr>
<tr><td><a href="#match.surroundreplace"><code>match.surroundreplace</code></a></td><td>Replace stuff surround</td><td></td></tr>
<tr><td rowspan=9><a href="#misc"><code>misc</code></a></td><td><a href="#cancel"><code>cancel</code></a></td><td>Cancel Dance operation</td><td><code>Escape</code> (<code>editorTextFocus && dance.mode == 'normal' && !dance.isRecording && !markersNavigationVisible</code>)<code>Escape</code> (<code>editorTextFocus && dance.mode == 'input'</code>)</td></tr>
<tr><td><a href="#changeInput"><code>changeInput</code></a></td><td>Change current input</td><td></td></tr>
<tr><td><a href="#ifEmpty"><code>ifEmpty</code></a></td><td>Executes one of the specified commands depending on whether the current
selections are empty</td><td></td></tr>
<tr><td><a href="#ignore"><code>ignore</code></a></td><td>Ignore key</td><td></td></tr>
<tr><td><a href="#openMenu"><code>openMenu</code></a></td><td>Open menu</td><td></td></tr>
<tr><td><a href="#run"><code>run</code></a></td><td>Run code</td><td></td></tr>
<tr><td><a href="#selectRegister"><code>selectRegister</code></a></td><td>Select register for next command</td><td><code>Shift+'</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+'</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#updateCount"><code>updateCount</code></a></td><td>Update Dance count</td><td></td></tr>
<tr><td><a href="#updateRegister"><code>updateRegister</code></a></td><td>Update the contents of a register</td><td></td></tr>
<tr><td rowspan=11><a href="#modes"><code>modes</code></a></td><td><a href="../modes.ts#L25"><code>modes.insert.after</code></a></td><td>Insert after</td><td><code>A</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>A</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../modes.ts#L24"><code>modes.insert.before</code></a></td><td>Insert before</td><td><code>I</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>I</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../modes.ts#L27"><code>modes.insert.lineEnd</code></a></td><td>Insert at line end</td><td><code>Shift+A</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+A</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../modes.ts#L26"><code>modes.insert.lineStart</code></a></td><td>Insert at line start</td><td><code>Shift+I</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+I</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../modes.ts#L17"><code>modes.set.insert</code></a></td><td>Set mode to Insert</td><td></td></tr>
<tr><td><a href="../modes.ts#L16"><code>modes.set.normal</code></a></td><td>Set mode to Normal</td><td><code>Escape</code> (<code>editorTextFocus && dance.mode == 'insert'</code>)<code>Escape</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>V</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../modes.ts#L43"><code>modes.set.temporarily.insert</code></a></td><td>Temporary Insert mode</td><td><code>Ctrl+V</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../modes.ts#L42"><code>modes.set.temporarily.normal</code></a></td><td>Temporary Normal mode</td><td><code>Ctrl+V</code> (<code>editorTextFocus && dance.mode == 'insert'</code>)</td></tr>
<tr><td><a href="../modes.ts#L18"><code>modes.set.visual</code></a></td><td>Set mode to Visual</td><td><code>V</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#modes.set"><code>modes.set</code></a></td><td>Set Dance mode</td><td></td></tr>
<tr><td><a href="#modes.set.temporarily"><code>modes.set.temporarily</code></a></td><td>Set Dance mode temporarily</td><td></td></tr>
<tr><td rowspan=10><a href="#search"><code>search</code></a></td><td><a href="#search.next"><code>search.next</code></a></td><td>Select next match</td><td><code>N</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#search.search"><code>search.search</code></a></td><td>Search</td><td><code>/</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>NumPad_Divide</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>/</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>NumPad_Divide</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../search.ts#L22"><code>search.backward</code></a></td><td>Search backward</td><td><code>Shift+/</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../search.ts#L23"><code>search.backward.extend</code></a></td><td>Search backward (extend)</td><td><code>Shift+Alt+/</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../search.ts#L21"><code>search.extend</code></a></td><td>Search (extend)</td><td><code>Alt+/</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../search.ts#L158"><code>search.next.add</code></a></td><td>Add next match</td><td><code>Alt+N</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>N</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../search.ts#L159"><code>search.previous</code></a></td><td>Select previous match</td><td><code>Shift+N</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../search.ts#L160"><code>search.previous.add</code></a></td><td>Add previous match</td><td><code>Shift+Alt+N</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+N</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../search.ts#L90"><code>search.selection.smart</code></a></td><td>Search current selection (smart)</td><td><code>Shift+8</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>NumPad_Multiply</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+8</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>NumPad_Multiply</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#search.selection"><code>search.selection</code></a></td><td>Search current selection</td><td><code>Shift+Alt+8</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+NumPad_Multiply</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td rowspan=39><a href="#seek"><code>seek</code></a></td><td><a href="#seek.enclosing"><code>seek.enclosing</code></a></td><td>Select to next enclosing character</td><td><code>Shift+M</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#seek.leap"><code>seek.leap</code></a></td><td>Leap forward</td><td></td></tr>
<tr><td><a href="#seek.object"><code>seek.object</code></a></td><td>Select object</td><td></td></tr>
<tr><td><a href="#seek.seek"><code>seek.seek</code></a></td><td>Select to character (excluded)</td><td><code>T</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L270"><code>seek.askObject</code></a></td><td>Select whole object</td><td></td></tr>
<tr><td><a href="../seek.ts#L276"><code>seek.askObject.end</code></a></td><td>Select to whole object end</td><td></td></tr>
<tr><td><a href="../seek.ts#L277"><code>seek.askObject.end.extend</code></a></td><td>Extend to whole object end</td><td></td></tr>
<tr><td><a href="../seek.ts#L271"><code>seek.askObject.inner</code></a></td><td>Select inner object</td><td></td></tr>
<tr><td><a href="../seek.ts#L278"><code>seek.askObject.inner.end</code></a></td><td>Select to inner object end</td><td></td></tr>
<tr><td><a href="../seek.ts#L279"><code>seek.askObject.inner.end.extend</code></a></td><td>Extend to inner object end</td><td></td></tr>
<tr><td><a href="../seek.ts#L274"><code>seek.askObject.inner.start</code></a></td><td>Select to inner object start</td><td></td></tr>
<tr><td><a href="../seek.ts#L275"><code>seek.askObject.inner.start.extend</code></a></td><td>Extend to inner object start</td><td></td></tr>
<tr><td><a href="../seek.ts#L272"><code>seek.askObject.start</code></a></td><td>Select to whole object start</td><td></td></tr>
<tr><td><a href="../seek.ts#L273"><code>seek.askObject.start.extend</code></a></td><td>Extend to whole object start</td><td></td></tr>
<tr><td><a href="../seek.ts#L24"><code>seek.backward</code></a></td><td>Select to character (excluded, backward)</td><td><code>Shift+T</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L90"><code>seek.enclosing.backward</code></a></td><td>Select to previous enclosing character</td><td><code>Alt+M</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L89"><code>seek.enclosing.extend</code></a></td><td>Extend to next enclosing character</td><td><code>Shift+M</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L91"><code>seek.enclosing.extend.backward</code></a></td><td>Extend to previous enclosing character</td><td><code>Alt+M</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L27"><code>seek.extend</code></a></td><td>Extend to character (excluded)</td><td><code>T</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L28"><code>seek.extend.backward</code></a></td><td>Extend to character (excluded, backward)</td><td><code>Shift+T</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L25"><code>seek.included</code></a></td><td>Select to character (included)</td><td><code>F</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L26"><code>seek.included.backward</code></a></td><td>Select to character (included, backward)</td><td><code>Shift+F</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L29"><code>seek.included.extend</code></a></td><td>Extend to character (included)</td><td><code>F</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L30"><code>seek.included.extend.backward</code></a></td><td>Extend to character (included, backward)</td><td><code>Shift+F</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L523"><code>seek.leap.backward</code></a></td><td>Leap backward</td><td></td></tr>
<tr><td><a href="../seek.ts#L185"><code>seek.word.backward</code></a></td><td>Select to previous word start</td><td><code>B</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L191"><code>seek.word.backward.extend</code></a></td><td>Extend to previous word start</td><td><code>B</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L189"><code>seek.word.extend</code></a></td><td>Extend to next word start</td><td><code>W</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L184"><code>seek.word.ws</code></a></td><td>Select to next WORD start</td><td><code>Shift+W</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L186"><code>seek.word.ws.backward</code></a></td><td>Select to previous WORD start</td><td><code>Shift+B</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L192"><code>seek.word.ws.backward.extend</code></a></td><td>Extend to previous WORD start</td><td><code>Shift+B</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L190"><code>seek.word.ws.extend</code></a></td><td>Extend to next WORD start</td><td><code>Shift+W</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L187"><code>seek.wordEnd</code></a></td><td>Select to next word end</td><td><code>E</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L193"><code>seek.wordEnd.extend</code></a></td><td>Extend to next word end</td><td><code>E</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../seek.ts#L188"><code>seek.wordEnd.ws</code></a></td><td>Select to next WORD end</td><td><code>Shift+E</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../seek.ts#L194"><code>seek.wordEnd.ws.extend</code></a></td><td>Extend to next WORD end</td><td><code>Shift+E</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#seek.selectExpand"><code>seek.selectExpand</code></a></td><td>Expand selection</td><td><code>Alt+O</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+O</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>Alt+Up</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+Up</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#seek.selectShrink"><code>seek.selectShrink</code></a></td><td>Shrink selection</td><td><code>Alt+I</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+I</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>Alt+Down</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+Down</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#seek.word"><code>seek.word</code></a></td><td>Select to next word start</td><td><code>W</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td rowspan=41><a href="#select"><code>select</code></a></td><td><a href="#select.buffer"><code>select.buffer</code></a></td><td>Select whole buffer</td><td><code>Shift+5</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+5</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#select.firstVisibleLine"><code>select.firstVisibleLine</code></a></td><td>Select to first visible line</td><td></td></tr>
<tr><td><a href="#select.horizontally"><code>select.horizontally</code></a></td><td>Select horizontally</td><td></td></tr>
<tr><td><a href="#select.lastLine"><code>select.lastLine</code></a></td><td>Select to last line</td><td></td></tr>
<tr><td><a href="#select.lastVisibleLine"><code>select.lastVisibleLine</code></a></td><td>Select to last visible line</td><td></td></tr>
<tr><td><a href="#select.line.above"><code>select.line.above</code></a></td><td>Select line above</td><td></td></tr>
<tr><td><a href="#select.line.above.extend"><code>select.line.above.extend</code></a></td><td>Extend to line above</td><td></td></tr>
<tr><td><a href="#select.line.below"><code>select.line.below</code></a></td><td>Select line below</td><td></td></tr>
<tr><td><a href="#select.line.below.extend"><code>select.line.below.extend</code></a></td><td>Extend to line below</td><td><code>X</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>X</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#select.lineEnd"><code>select.lineEnd</code></a></td><td>Select to line end. TODO: helix</td><td><code>Alt+L</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>End</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#select.lineStart"><code>select.lineStart</code></a></td><td>Select to line start</td><td><code>Alt+H</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Home</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#select.middleVisibleLine"><code>select.middleVisibleLine</code></a></td><td>Select to middle visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L519"><code>select.documentEnd.extend</code></a></td><td>Extend to last character</td><td></td></tr>
<tr><td><a href="../select.ts#L518"><code>select.documentEnd.jump</code></a></td><td>Jump to last character</td><td></td></tr>
<tr><td><a href="../select.ts#L44"><code>select.down.extend</code></a></td><td>Extend down</td><td><code>Shift+Down</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>J</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>Down</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../select.ts#L43"><code>select.down.jump</code></a></td><td>Jump down</td><td><code>J</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Down</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../select.ts#L472"><code>select.firstLine.extend</code></a></td><td>Extend to first line</td><td></td></tr>
<tr><td><a href="../select.ts#L471"><code>select.firstLine.jump</code></a></td><td>Jump to first line</td><td></td></tr>
<tr><td><a href="../select.ts#L584"><code>select.firstVisibleLine.extend</code></a></td><td>Extend to first visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L583"><code>select.firstVisibleLine.jump</code></a></td><td>Jump to first visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L563"><code>select.lastLine.extend</code></a></td><td>Extend to last line</td><td></td></tr>
<tr><td><a href="../select.ts#L562"><code>select.lastLine.jump</code></a></td><td>Jump to last line</td><td></td></tr>
<tr><td><a href="../select.ts#L618"><code>select.lastVisibleLine.extend</code></a></td><td>Extend to last visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L617"><code>select.lastVisibleLine.jump</code></a></td><td>Jump to last visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L238"><code>select.left.extend</code></a></td><td>Extend left</td><td><code>Shift+Left</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>H</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>Left</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../select.ts#L237"><code>select.left.jump</code></a></td><td>Jump left</td><td><code>H</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Left</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../select.ts#L517"><code>select.lineEnd.extend</code></a></td><td>Extend to line end</td><td><code>Shift+Alt+L</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+End</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../select.ts#L468"><code>select.lineStart.extend</code></a></td><td>Extend to line start</td><td><code>Shift+Alt+H</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+Home</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../select.ts#L467"><code>select.lineStart.jump</code></a></td><td>Jump to line start</td><td></td></tr>
<tr><td><a href="../select.ts#L470"><code>select.lineStart.skipBlank.extend</code></a></td><td>Extend to line start (skip blank)</td><td></td></tr>
<tr><td><a href="../select.ts#L469"><code>select.lineStart.skipBlank.jump</code></a></td><td>Jump to line start (skip blank)</td><td></td></tr>
<tr><td><a href="../select.ts#L601"><code>select.middleVisibleLine.extend</code></a></td><td>Extend to middle visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L600"><code>select.middleVisibleLine.jump</code></a></td><td>Jump to middle visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L236"><code>select.right.extend</code></a></td><td>Extend right</td><td><code>Shift+Right</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>L</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>Right</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../select.ts#L235"><code>select.right.jump</code></a></td><td>Jump right</td><td><code>L</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Right</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../select.ts#L305"><code>select.to.extend</code></a></td><td>Extend to</td><td><code>Shift+G</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>G</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../select.ts#L304"><code>select.to.jump</code></a></td><td>Go to</td><td><code>G</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../select.ts#L46"><code>select.up.extend</code></a></td><td>Extend up</td><td><code>Shift+Up</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>K</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)<code>Up</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../select.ts#L45"><code>select.up.jump</code></a></td><td>Jump up</td><td><code>K</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Up</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#select.to"><code>select.to</code></a></td><td>Select to</td><td></td></tr>
<tr><td><a href="#select.vertically"><code>select.vertically</code></a></td><td>Select vertically</td><td></td></tr>
<tr><td rowspan=37><a href="#selections"><code>selections</code></a></td><td><a href="#selections.changeDirection"><code>selections.changeDirection</code></a></td><td>Change direction of selections</td><td><code>Alt+;</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.changeOrder"><code>selections.changeOrder</code></a></td><td>Reverse selections</td><td></td></tr>
<tr><td><a href="#selections.copy"><code>selections.copy</code></a></td><td>Copy selections below</td><td><code>Shift+C</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+C</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.expandToLines"><code>selections.expandToLines</code></a></td><td>Expand to lines</td><td><code>Shift+X</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+X</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.filter"><code>selections.filter</code></a></td><td>Filter selections</td><td><code>Shift+4</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+4</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.merge"><code>selections.merge</code></a></td><td>Merge contiguous selections</td><td><code>Shift+Alt+-</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.open"><code>selections.open</code></a></td><td>Open selected file</td><td></td></tr>
<tr><td><a href="#selections.pipe"><code>selections.pipe</code></a></td><td>Pipe selections</td><td><code>Shift+Alt+\</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.reduce"><code>selections.reduce</code></a></td><td>Reduce selections to their cursor</td><td><code>;</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>;</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.restore"><code>selections.restore</code></a></td><td>Restore selections. TODO: Needed?</td><td><code>Alt+Z</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.restore.withCurrent"><code>selections.restore.withCurrent</code></a></td><td>Combine register selections with current ones</td><td><code>Alt+Z</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.save"><code>selections.save</code></a></td><td>Save selections</td><td><code>Shift+Alt+Z</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.saveText"><code>selections.saveText</code></a></td><td>Copy selections text</td><td><code>Y</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Y</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.select"><code>selections.select</code></a></td><td>Select within selections</td><td></td></tr>
<tr><td><a href="../selections.ts#L303"><code>selections.clear.main</code></a></td><td>Clear main selections</td><td><code>Alt+,</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+,</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../selections.ts#L302"><code>selections.clear.secondary</code></a></td><td>Clear secondary selections</td><td><code>,</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>,</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../selections.ts#L807"><code>selections.copy.above</code></a></td><td>Copy selections above</td><td><code>Shift+Alt+C</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+Alt+C</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../selections.ts#L659"><code>selections.faceBackward</code></a></td><td>Backward selections</td><td></td></tr>
<tr><td><a href="../selections.ts#L658"><code>selections.faceForward</code></a></td><td>Forward selections</td><td><code>Shift+Alt+;</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../selections.ts#L300"><code>selections.filter.regexp</code></a></td><td>Keep matching selections</td><td><code>Shift+K</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+K</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../selections.ts#L301"><code>selections.filter.regexp.inverse</code></a></td><td>Clear matching selections</td><td><code>Shift+Alt+K</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+Alt+K</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../selections.ts#L885"><code>selections.hideIndices</code></a></td><td>Hide selection indices</td><td></td></tr>
<tr><td><a href="../selections.ts#L698"><code>selections.orderAscending</code></a></td><td>Order selections ascending</td><td></td></tr>
<tr><td><a href="../selections.ts#L697"><code>selections.orderDescending</code></a></td><td>Order selections descending</td><td></td></tr>
<tr><td><a href="../selections.ts#L256"><code>selections.pipe.append</code></a></td><td>Pipe and append</td><td><code>Shift+1</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../selections.ts#L257"><code>selections.pipe.prepend</code></a></td><td>Pipe and prepend</td><td><code>Shift+Alt+1</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../selections.ts#L255"><code>selections.pipe.replace</code></a></td><td>Pipe and replace</td><td><code>Shift+\</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../selections.ts#L577"><code>selections.reduce.edges</code></a></td><td>Reduce selections to their ends</td><td><code>Shift+Alt+S</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../selections.ts#L353"><code>selections.select.orLeap</code></a></td><td>Leap or select</td><td><code>S</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>S</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../selections.ts#L884"><code>selections.showIndices</code></a></td><td>Show selection indices</td><td></td></tr>
<tr><td><a href="../selections.ts#L422"><code>selections.splitLines.orLeap.backward</code></a></td><td>Leap or select backward</td><td><code>Alt+S</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Alt+S</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.sort"><code>selections.sort</code></a></td><td>Sort selections</td><td></td></tr>
<tr><td><a href="#selections.split"><code>selections.split</code></a></td><td>Split selections</td><td><code>Shift+S</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+S</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.splitLines"><code>selections.splitLines</code></a></td><td>Split selections at line boundaries</td><td></td></tr>
<tr><td><a href="#selections.toggleIndices"><code>selections.toggleIndices</code></a></td><td>Toggle selection indices</td><td><code>Enter</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Enter</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="#selections.trimLines"><code>selections.trimLines</code></a></td><td>Trim lines</td><td><code>Alt+X</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.trimWhitespace"><code>selections.trimWhitespace</code></a></td><td>Trim whitespace</td><td><code>Shift+-</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+-</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td rowspan=6><a href="#selections.rotate"><code>selections.rotate</code></a></td><td><a href="#selections.rotate.both"><code>selections.rotate.both</code></a></td><td>Rotate selections clockwise</td><td><code>Shift+Alt+9</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="#selections.rotate.contents"><code>selections.rotate.contents</code></a></td><td>Rotate selections clockwise (contents only)</td><td></td></tr>
<tr><td><a href="#selections.rotate.selections"><code>selections.rotate.selections</code></a></td><td>Rotate selections clockwise (selections only)</td><td><code>Shift+9</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+9</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td><a href="../selections.rotate.ts#L18"><code>selections.rotate.both.reverse</code></a></td><td>Rotate selections counter-clockwise</td><td><code>Shift+Alt+0</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)</td></tr>
<tr><td><a href="../selections.rotate.ts#L35"><code>selections.rotate.contents.reverse</code></a></td><td>Rotate selections counter-clockwise (contents only)</td><td></td></tr>
<tr><td><a href="../selections.rotate.ts#L56"><code>selections.rotate.selections.reverse</code></a></td><td>Rotate selections counter-clockwise (selections only)</td><td><code>Shift+0</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Shift+0</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
<tr><td rowspan=1><a href="#view"><code>view</code></a></td><td><a href="#view.line"><code>view.line</code></a></td><td>Reveals a position based on the main cursor</td><td></td></tr>
<tr><td rowspan=1><a href="#window"><code>window</code></a></td><td><a href="../window.ts#L13"><code>window.windowMenu</code></a></td><td>Show window menu</td><td><code>Ctrl+W</code> (<code>editorTextFocus && dance.mode == 'normal'</code>)<code>Ctrl+W</code> (<code>editorTextFocus && dance.mode == 'visual'</code>)</td></tr>
</tbody>
</table>

</details>

## [`dev`](../dev.ts)

Developer utilities for Dance.

<a name="dev.setSelectionBehavior" />

### [`dev.setSelectionBehavior`](../dev.ts#L12-L21)

Set the selection behavior of the specified mode.

This command:
- takes an argument `mode` of type `string`.
- takes an argument `value` of type `"caret" | "character"`.

<a name="dev.copyLastErrorMessage" />

### [`dev.copyLastErrorMessage`](../dev.ts#L36-L39)

Copies the last encountered error message.

This command:
- does not require an active text editor.

## [`edit`](../edit.ts)

Perform changes on the text content of the document.

See https://github.com/mawww/kakoune/blob/master/doc/pages/keys.asciidoc#changes.

<a name="edit.insert" />

### [`edit.insert`](../edit.ts#L16-L62)

Insert contents of register.

A `where` argument may be specified to state where the text should be
inserted relative to each selection. If unspecified, each selection will be
replaced by the text.

Specify `"shift": "select"` to select the inserted selection,
`"shift": "extend"` to extend to the inserted text, and nothing to keep the
current selections.

Specify `all` to paste all contents next to each selection.


#### Additional commands

| Title                              | Identifier               | Keybinding                                                          | Commands                                                                                                                       |
| ---------------------------------- | ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Pick register and replace          | `selectRegister-insert`  | `c-r` (helix: normal), `c-r` (helix: visual)                        | `[".selectRegister", { +register }], [".edit.insert", { ... }]`                                                                |
| Paste before                       | `paste.before`           |                                                                     | `[".edit.insert", { handleNewLine: true, where: "start", ... }]`                                                               |
| Paste after                        | `paste.after`            |                                                                     | `[".edit.insert", { handleNewLine: true, where: "end"  , ... }]`                                                               |
| Paste before and select            | `paste.before.select`    | `s-p` (helix: normal), `s-p` (helix: visual)                        | `[".edit.insert", { handleNewLine: true, where: "start", shift: "select", ... }]`                                              |
| Paste after and select             | `paste.after.select`     | `p` (helix: normal)  , `p` (helix: visual)                          | `[".edit.insert", { handleNewLine: true, where: "end"  , shift: "select", ... }]`                                              |
| Paste all before                   | `pasteAll.before`        |                                                                     | `[".edit.insert", { handleNewLine: true, where: "start", all: true, ... }]`                                                    |
| Paste all after                    | `pasteAll.after`         |                                                                     | `[".edit.insert", { handleNewLine: true, where: "end"  , all: true, ... }]`                                                    |
| Paste all before and select        | `pasteAll.before.select` | `s-a-p` (helix: normal), `s-a-p` (helix: visual)                    | `[".edit.insert", { handleNewLine: true, where: "start", all: true, shift: "select", ... }]`                                   |
| Paste all after and select         | `pasteAll.after.select`  | `a-p` (helix: normal)  , `a-p` (helix: visual)                      | `[".edit.insert", { handleNewLine: true, where: "end"  , all: true, shift: "select", ... }]`                                   |
| Delete                             | `delete`                 | `a-d` (helix: normal)  , `a-d` (helix: visual)                      | `[".edit.insert", { register: "_", ... }]`                                                                                     |
| Delete and switch to Insert        | `delete-insert`          | `a-c` (helix: normal)  , `a-c` (helix: visual)                      | `[".modes.set", { mode: "insert", +mode }], [".edit.insert", { register: "_", ... }]`                                          |
| Copy and delete                    | `yank-delete`            | `d` (helix: normal)    , `d` (helix: visual)                        | `[".selections.saveText", { +register }],                                            [".edit.insert", { register: "_", ... }]` |
| Copy, delete and switch to Insert  | `yank-delete-insert`     | `c` (helix: normal)    , `c` (helix: visual)                        | `[".selections.saveText", { +register }], [".modes.set", { mode: "insert", +mode }], [".edit.insert", { register: "_", ... }]` |
| Copy and replace                   | `yank-replace`           | `s-r` (helix: normal)  , `s-r` (helix: visual)                      | `[".selections.saveText", { register: "tmp" }], [".edit.insert"], [".updateRegister", { copyFrom: "tmp", ... }]`               |

This command:
- accepts a register (by default, it uses `dquote`).
- may be repeated with a given number of repetitions.
- takes an argument `adjust` of type `boolean`.
- takes an argument `all` of type `boolean`.
- takes an argument `handleNewLine` of type `boolean`.
- takes an argument `shift` of type `Shift`.
- takes an argument `text` of type `string`.
- takes an argument `where` of type `"active" | "anchor" | "start" | "end" | undefined`.

Default keybinding: `s-a-r` (kakoune: normal)

<a name="edit.join" />

### [`edit.join`](../edit.ts#L134-L139)

Join lines.


This command:
- takes an argument `separator` of type `string`.

Default keybinding: `s-j` (helix: normal)
`s-j` (helix: visual)

<a name="edit.join.select" />

### [`edit.join.select`](../edit.ts#L143-L148)

Join lines and select inserted separators.


This command:
- takes an argument `separator` of type `string`.

Default keybinding: `a-j` (helix: normal)

<a name="edit.indent" />

### [`edit.indent`](../edit.ts#L152-L157)

Indent selected lines.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `>` (helix: normal)
`>` (helix: visual)

<a name="edit.indent.withEmpty" />

### [`edit.indent.withEmpty`](../edit.ts#L161-L166)

Indent selected lines (including empty lines).


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `a->` (helix: normal)
`a->` (helix: visual)

<a name="edit.deindent" />

### [`edit.deindent`](../edit.ts#L170-L175)

Deindent selected lines.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `a-<` (helix: normal)
`a-<` (helix: visual)

<a name="edit.deindent.withIncomplete" />

### [`edit.deindent.withIncomplete`](../edit.ts#L179-L184)

Deindent selected lines (including incomplete indent).


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `<` (helix: normal)
`<` (helix: visual)

<a name="edit.case.toLower" />

### [`edit.case.toLower`](../edit.ts#L188-L193)

Transform to lower case.



Default keybinding: `` ` `` (helix: normal)
`` ` `` (helix: visual)

<a name="edit.case.toUpper" />

### [`edit.case.toUpper`](../edit.ts#L197-L202)

Transform to upper case.



Default keybinding: `` a-` `` (helix: normal)
`` a-` `` (helix: visual)

<a name="edit.case.swap" />

### [`edit.case.swap`](../edit.ts#L206-L211)

Swap case.



Default keybinding: `~` (helix: normal)
`~` (helix: visual)

<a name="edit.replaceCharacters" />

### [`edit.replaceCharacters`](../edit.ts#L226-L235)

Replace characters.


This command:
- may be repeated with a given number of repetitions.
- takes an input `input` of type `string`.

Default keybinding: `r` (helix: normal)
`r` (helix: visual)

<a name="edit.align" />

### [`edit.align`](../edit.ts#L278-L290)

Align selections.

Align selections, aligning the cursor of each selection by inserting spaces
before the first character of each selection.


This command:
- takes an argument `fill` of type `string`.

Default keybinding: `&` (helix: normal)
`&` (helix: visual)

<a name="edit.copyIndentation" />

### [`edit.copyIndentation`](../edit.ts#L334-L347)

Copy indentation.

Copy the indentation of the main selection (or the count one if a count is
given) to all other ones.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `a-&` (helix: normal)
`a-&` (helix: visual)

<a name="edit.newLine.above" />

### [`edit.newLine.above`](../edit.ts#L376-L393)

Insert new line above each selection.

Specify `"shift": "select"` to select the inserted selections, and nothing to
keep the current selections.


#### Additional keybindings

| Title                                      | Identifier             | Keybinding                                   | Commands                                                                          |
| ------------------------------------------ | ---------------------- | -------------------------------------------- | --------------------------------------------------------------------------------- |
| Insert new line above and switch to insert | `newLine.above.insert` | `s-o` (helix: normal), `s-o` (helix: visual) | `[".edit.newLine.above", { shift: "select" }], [".modes.insert.before", { ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `shift` of type `Shift`.

<a name="edit.newLine.below" />

### [`edit.newLine.below`](../edit.ts#L413-L430)

Insert new line below each selection.

Specify `"shift": "select"` to select the inserted selections, and nothing to
keep the current selections.


#### Additional keybindings

| Title                                      | Identifier             | Keybinding                               | Commands                                                                          |
| ------------------------------------------ | ---------------------- | ---------------------------------------- | --------------------------------------------------------------------------------- |
| Insert new line below and switch to insert | `newLine.below.insert` | `o` (helix: normal), `o` (helix: visual) | `[".edit.newLine.below", { shift: "select" }], [".modes.insert.before", { ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `shift` of type `Shift`.

## [`history`](../history.ts)

Interact with history.

<a name="history.undo" />

### [`history.undo`](../history.ts#L15-L20)

Undo.


This command:
- does not require an active text editor.

Default keybinding: `u` (helix: normal)
`u` (helix: visual)

<a name="history.redo" />

### [`history.redo`](../history.ts#L24-L29)

Redo.


This command:
- does not require an active text editor.

Default keybinding: `s-u` (helix: normal)
`s-u` (helix: visual)

<a name="history.undo.selections" />

### [`history.undo.selections`](../history.ts#L33-L38)

Undo a change of selections.


This command:
- does not require an active text editor.

Default keybinding: `a-u` (kakoune: normal)

<a name="history.redo.selections" />

### [`history.redo.selections`](../history.ts#L42-L47)

Redo a change of selections.


This command:
- does not require an active text editor.

Default keybinding: `s-a-u` (kakoune: normal)

<a name="history.repeat" />

### [`history.repeat`](../history.ts#L51-L66)

Repeat last change.


| Title                        | Identifier         | Keybinding              | Commands                                                                      |
| ---------------------------- | ------------------ | ----------------------- | ----------------------------------------------------------------------------- |
| Repeat last selection change | `repeat.selection` |                         | `[".history.repeat", { filter: "dance\\.(seek\|select\|selections)", +count }]` |
| Repeat last seek             | `repeat.seek`      | `a-.` (kakoune: normal) | `[".history.repeat", { filter: "dance\\.seek", +count }]`                     |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `filter` of type `string | RegExp`.

<a name="history.repeat.edit" />

### [`history.repeat.edit`](../history.ts#L98-L104)

Repeat last edit without a command.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `.` (helix: normal) , `NumPad_Decimal` (helix: normal) , `.` (helix: visual) , `NumPad_Decimal` (helix: visual)

<a name="history.recording.play" />

### [`history.recording.play`](../history.ts#L140-L151)

Replay recording.


This command:
- accepts a register (by default, it uses `arobase`).
- does not require an active text editor.
- may be repeated with a given number of repetitions.

Default keybinding: `q` (helix: normal)
`q` (helix: visual)

<a name="history.recording.start" />

### [`history.recording.start`](../history.ts#L167-L176)

Start recording.


This command:
- accepts a register (by default, it uses `arobase`).

Default keybinding: `s-q` (helix: normal, !recording) , `s-q` (helix: visual, !recording)

<a name="history.recording.stop" />

### [`history.recording.stop`](../history.ts#L188-L197)

Stop recording.


This command:
- accepts a register (by default, it uses `arobase`).

Default keybinding: `escape` (helix: normal, recording) , `s-q` (helix: normal, recording) , `escape` (helix: visual, recording) , `s-q` (helix: visual, recording)

## [`keybindings`](../keybindings.ts)

Utilities for setting up keybindings.

<a name="keybindings.setup" />

### [`keybindings.setup`](../keybindings.ts#L12-L15)

Set up Dance keybindings.

This command:
- accepts a register (by default, it uses `dquote`).

## [`match`](../match.ts)

Match menu.

| Title                   | Keybinding          | Command                            |
| ----------------------- | ------------------- | ---------------------------------- |
| Show match menu         | `m` (helix: normal) | `[".openMenu", { menu: "match" }]` |
| Show match menu         | `m` (helix: visual) | `[".openMenu", { menu: "match" }]` |

<a name="match.surroundreplace" />

### [`match.surroundreplace`](../match.ts#L22-L30)

Replace stuff surround


This command:
- takes an input `input` of type `string`.

<a name="match.surrounddelete" />

### [`match.surrounddelete`](../match.ts#L96-L103)

Delete stuff surround


This command:
- takes an input `input` of type `string`.

<a name="match.surround" />

### [`match.surround`](../match.ts#L159-L168)

Add stuff surround


This command:
- accepts a register (by default, it uses `dquote`).
- takes an input `input` of type `string`.

## [`misc`](../misc.ts)

Miscellaneous commands that don't deserve their own category.

By default, Dance also exports the following keybindings for existing
commands:

| Keybinding                                   | Command                                      |
| -------------------------------------------- | -------------------------------------------- |
| `s-;` (helix: normal), `s-;` (helix: visual) | `["workbench.action.showCommands", { ... }]` |
| `c-c` (helix: normal), `c-c` (helix: visual) | `["editor.action.commentLine", { ... }]` |

<a name="cancel" />

### [`cancel`](../misc.ts#L21-L26)

Cancel Dance operation.


This command:
- does not require an active text editor.

Default keybinding: `escape` (core: normal, !recording, "!markersNavigationVisible")
`escape` (core: input)

<a name="ignore" />

### [`ignore`](../misc.ts#L32-L35)

Ignore key.

This command:
- does not require an active text editor.

<a name="run" />

### [`run`](../misc.ts#L41-L150)

Run code.

There are two ways to invoke this command. The first one is to provide an
`code` string argument. This code must be a valid JavaScript string, and will
be executed with full access to the [Dance API](../api/README.md). For
instance,

```json
{
  "command": "dance.run",
  "args": {
    "code": "Selections.set(Selections.filter(text => text.includes('foo')))",
  },
},
```

If no argument is provided, a prompt will be shown asking for an input.
Furthermore, an array of strings can be passed to make longer functions
easier to read:

```json
{
  "command": "dance.run",
  "args": {
    "code": [
      "for (const selection of Selections.current) {",
      "  console.log(text(selection));",
      "}",
    ],
  },
},
```

The second way to use this command is with the `commands` argument. This
argument must be an array of "command-like" values. The simplest
"command-like" value is a string corresponding to the command itself:

```json
{
  "command": "dance.run",
  "args": {
    "commands": [
      "dance.modes.set.normal",
    ],
  },
},
```

But arguments can also be provided by passing an array:

```json
{
  "command": "dance.run",
  "args": {
    "commands": [
      ["dance.modes.set", { "mode": "normal" }],
    ],
  },
},
```

Or by passing an object, like regular VS Code key bindings:

```json
{
  "command": "dance.run",
  "args": {
    "commands": [
      {
        "command": "dance.modes.set",
        "args": { "mode": "normal" },
      },
    ],
  },
},
```

These values can be mixed:

```json
{
  "command": "dance.run",
  "args": {
    "commands": [
      ["dance.selections.saveText", { "register": "^" }],
      {
        "command": "dance.modes.set",
        "args": { "mode": "normal" },
      },
      "hideSuggestWidget",
    ],
  },
},
```

If both `code` and `commands` are given, Dance will use `code` if arbitrary
code execution is enabled, or `commands` otherwise.

This command:
- accepts a register (by default, it uses `null`).
- accepts an argument of type `{ code?: string | readonly string[] }`.
- may be repeated with a given number of repetitions.
- may be repeated with a given number of repetitions.
- takes an argument `commands` of type `command.Any[]`.
- takes an input `code` of type `string | readonly string[]`.

<a name="selectRegister" />

### [`selectRegister`](../misc.ts#L186-L200)

Select register for next command.

When selecting a register, the next key press is used to determine what
register is selected. If this key is a `space` character, then a new key
press is awaited again and the returned register will be specific to the
current document.


This command:
- takes an input `register` of type `string | Register`.

Default keybinding: `"` (helix: normal)
`"` (helix: visual)

<a name="updateRegister" />

### [`updateRegister`](../misc.ts#L216-L227)

Update the contents of a register.


This command:
- accepts a register (by default, it uses `dquote`).
- takes an input `input` of type `string`.

<a name="updateCount" />

### [`updateCount`](../misc.ts#L253-L282)

Update Dance count.

Update the current counter used to repeat the next command.

#### Additional keybindings

| Title                          | Keybinding                                                                                     | Command                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------ |
| Add the digit 0 to the counter | `0` (helix: normal), `NumPad0` (helix: normal), `0` (helix: visual), `NumPad0` (helix: visual) | `[".updateCount", { addDigits: 0 }]` |
| Add the digit 1 to the counter | `1` (helix: normal), `NumPad1` (helix: normal), `1` (helix: visual), `NumPad1` (helix: visual) | `[".updateCount", { addDigits: 1 }]` |
| Add the digit 2 to the counter | `2` (helix: normal), `NumPad2` (helix: normal), `2` (helix: visual), `NumPad2` (helix: visual) | `[".updateCount", { addDigits: 2 }]` |
| Add the digit 3 to the counter | `3` (helix: normal), `NumPad3` (helix: normal), `3` (helix: visual), `NumPad3` (helix: visual) | `[".updateCount", { addDigits: 3 }]` |
| Add the digit 4 to the counter | `4` (helix: normal), `NumPad4` (helix: normal), `4` (helix: visual), `NumPad4` (helix: visual) | `[".updateCount", { addDigits: 4 }]` |
| Add the digit 5 to the counter | `5` (helix: normal), `NumPad5` (helix: normal), `5` (helix: visual), `NumPad5` (helix: visual) | `[".updateCount", { addDigits: 5 }]` |
| Add the digit 6 to the counter | `6` (helix: normal), `NumPad6` (helix: normal), `6` (helix: visual), `NumPad6` (helix: visual) | `[".updateCount", { addDigits: 6 }]` |
| Add the digit 7 to the counter | `7` (helix: normal), `NumPad7` (helix: normal), `7` (helix: visual), `NumPad7` (helix: visual) | `[".updateCount", { addDigits: 7 }]` |
| Add the digit 8 to the counter | `8` (helix: normal), `NumPad8` (helix: normal), `8` (helix: visual), `NumPad8` (helix: visual) | `[".updateCount", { addDigits: 8 }]` |
| Add the digit 9 to the counter | `9` (helix: normal), `NumPad9` (helix: normal), `9` (helix: visual), `NumPad9` (helix: visual) | `[".updateCount", { addDigits: 9 }]` |


This command:
- may be repeated with a given number of repetitions.
- takes an argument `addDigits` of type `number`.
- takes an input `count` of type `number`.

<a name="openMenu" />

### [`openMenu`](../misc.ts#L310-L332)

Open menu.

If no menu is specified, a prompt will ask for the name of the menu to open.

Alternatively, a `menu` can be inlined in the arguments.

Pass a `prefix` argument to insert the prefix string followed by the typed
key if it does not match any menu entry. This can be used to implement chords
like `jj`.


This command:
- does not require an active text editor.
- takes an argument `delay` of type `number`.
- takes an argument `locked` of type `boolean`.
- takes an argument `pass` of type `any[]`.
- takes an argument `prefix` of type `string`.
- takes an argument `title` of type `string`.
- takes an input `menu` of type `string | Menu`.

<a name="changeInput" />

### [`changeInput`](../misc.ts#L373-L387)

Change current input.

When showing some menus, Dance can navigate their history:

| Keybinding            | Command                                    |
| --------------------- | ------------------------------------------ |
| `up` (core: prompt)   | `[".changeInput", { action: "previous" }]` |
| `down` (core: prompt) | `[".changeInput", { action: "next"     }]` |


This command:
- does not require an active text editor.

<a name="ifEmpty" />

### [`ifEmpty`](../misc.ts#L397-L408)

Executes one of the specified commands depending on whether the current
selections are empty.

This command:
- accepts an argument of type `{}`.
- takes an argument `otherwise` of type `command.Any[]`.
- takes an argument `then` of type `command.Any[]`.

## [`modes`](../modes.ts)

Set modes.

<a name="modes.set" />

### [`modes.set`](../modes.ts#L9-L31)

Set Dance mode.

#### Variants

| Title              | Identifier   | Keybinding                                                                | Command                                                     |
| ------------------ | ------------ | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Set mode to Normal | `set.normal` | `escape` (helix: insert) , `escape` (helix: visual) , `v` (helix: visual) | `[".modes.set", { mode: "normal" }], ["hideSuggestWidget"]` |
| Set mode to Insert | `set.insert` |                                                                           | `[".modes.set", { mode: "insert" }]`                        |
| Set mode to Visual | `set.visual` | `v` (helix: normal)                                                       | `[".modes.set", { mode: "visual" }]`                        |

Other variants are provided to switch to insert mode:

| Title                | Identifier         | Keybinding                                   | Commands                                                                                                                                                                            |
| -------------------- | ------------------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Insert before        | `insert.before`    | `i` (helix: normal), `i` (helix: visual)     | `[".selections.faceBackward", { record: false }],           [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "start", record: false, empty: true, ... }]` |
| Insert after         | `insert.after`     | `a` (helix: normal), `a` (helix: visual)     | `[".selections.faceForward" , { record: false }],           [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "end"  , record: false, empty: true, ... }]` |
| Insert at line start | `insert.lineStart` | `s-i` (helix: normal), `s-i` (helix: visual) | `[".select.lineStart", { shift: "jump", skipBlank: true }], [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "start", record: false, empty: true, ... }]` |
| Insert at line end   | `insert.lineEnd`   | `s-a` (helix: normal), `s-a` (helix: visual) | `[".select.lineEnd"  , { shift: "jump"                  }], [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "end"  , record: false, empty: true, ... }]` |


This command:
- takes an input `mode` of type `string`.

<a name="modes.set.temporarily" />

### [`modes.set.temporarily`](../modes.ts#L35-L47)

Set Dance mode temporarily.

#### Variants

| Title                 | Identifier               | Keybindings             | Commands                                         |
| --------------------- | ------------------------ | ----------------------- | ------------------------------------------------ |
| Temporary Normal mode | `set.temporarily.normal` | `c-v` (kakoune: insert) | `[".modes.set.temporarily", { mode: "normal" }]` |
| Temporary Insert mode | `set.temporarily.insert` | `c-v` (kakoune: normal) | `[".modes.set.temporarily", { mode: "insert" }]` |


This command:
- may be repeated with a given number of repetitions.
- takes an input `mode` of type `string`.

## [`search`](../search.ts)

Search for patterns and replace or add selections.

<a name="search.search" />

### [`search.search`](../search.ts#L14-L36)

Search.


| Title                    | Identifier        | Keybinding            | Command                                                |
| ------------------------ | ----------------- | --------------------- | ------------------------------------------------------ |
| Search (extend)          | `extend`          | `a-/` (helix: normal) | `[".search", {                shift: "extend", ... }]` |
| Search backward          | `backward`        | `?` (helix: normal)   | `[".search", { direction: -1                 , ... }]` |
| Search backward (extend) | `backward.extend` | `a-?` (helix: normal) | `[".search", { direction: -1, shift: "extend", ... }]` |

This command:
- accepts a register (by default, it uses `slash`).
- accepts an argument of type `{ re?: string | (RegExp & { originalSource?: string }) }`.
- may be repeated with a given number of repetitions.
- takes an argument `add` of type `boolean`.
- takes an argument `interactive` of type `boolean`.

Default keybinding: `/` (helix: normal) , `NumPad_Divide` (helix: normal) , `/` (helix: visual) , `NumPad_Divide` (helix: visual)

<a name="search.selection" />

### [`search.selection`](../search.ts#L83-L98)

Search current selection.


| Title                            | Identifier        | Keybinding                                                                                                        | Command                                             |
| -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Search current selection (smart) | `selection.smart` | `*` (helix: normal) , `NumPad_Multiply` (helix: normal) , `*` (helix: visual) , `NumPad_Multiply` (helix: visual) | `[".search.selection", { smart: true, +register }]` |

This command:
- accepts a register (by default, it uses `slash`).
- takes an argument `smart` of type `boolean`.

Default keybinding: `a-*` (helix: normal) , `a-NumPad_Multiply` (helix: normal)

<a name="search.next" />

### [`search.next`](../search.ts#L151-L170)

Select next match.


| Title                 | Identifier     | Keybinding                                     | Command                                               |
| --------------------- | -------------- | ---------------------------------------------- | ----------------------------------------------------- |
| Add next match        | `next.add`     | `a-n` (helix: normal), `n` (helix: visual)     | `[".search.next", {                add: true, ... }]` |
| Select previous match | `previous`     | `s-n` (helix: normal)                          | `[".search.next", { direction: -1           , ... }]` |
| Add previous match    | `previous.add` | `s-a-n` (helix: normal), `s-n` (helix: visual) | `[".search.next", { direction: -1, add: true, ... }]` |

This command:
- accepts a register (by default, it uses `slash`).
- may be repeated with a given number of repetitions.
- takes an argument `add` of type `boolean`.

Default keybinding: `n` (helix: normal)

## [`seek`](../seek.ts)

Update selections based on the text surrounding them.

<a name="seek.seek" />

### [`seek.seek`](../seek.ts#L15-L40)

Select to character (excluded).


#### Variants

| Title                                    | Identifier                 | Keybinding              | Command                                                             |
| ---------------------------------------- | -------------------------- | ----------------------- | ------------------------------------------------------------------- |
| Select to character (excluded, backward) | `backward`                 | `s-t` (helix: normal)   | `[".seek", {                                 direction: -1, ... }]` |
| Select to character (included)           | `included`                 | `f` (helix: normal)     | `[".seek", { include: true                                , ... }]` |
| Select to character (included, backward) | `included.backward`        | `s-f` (helix: normal)   | `[".seek", { include: true,                  direction: -1, ... }]` |
| Extend to character (excluded)           | `extend`                   | `t` (helix: visual)     | `[".seek", {                shift: "extend"               , ... }]` |
| Extend to character (excluded, backward) | `extend.backward`          | `s-t` (helix: visual)   | `[".seek", {                shift: "extend", direction: -1, ... }]` |
| Extend to character (included)           | `included.extend`          | `f` (helix: visual)     | `[".seek", { include: true, shift: "extend"               , ... }]` |
| Extend to character (included, backward) | `included.extend.backward` | `s-f` (helix: visual)   | `[".seek", { include: true, shift: "extend", direction: -1, ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `include` of type `boolean`.
- takes an input `input` of type `string`.

Default keybinding: `t` (kakoune: normal)

<a name="seek.enclosing" />

### [`seek.enclosing`](../seek.ts#L80-L100)

Select to next enclosing character.


#### Variants

| Title                                  | Identifier                  | Keybinding            | Command                                                        |
| -------------------------------------- | --------------------------- | --------------------- | -------------------------------------------------------------- |
| Extend to next enclosing character     | `enclosing.extend`          | `s-m` (helix: visual) | `[".seek.enclosing", { shift: "extend"               , ... }]` |
| Select to previous enclosing character | `enclosing.backward`        | `a-m` (helix: normal) | `[".seek.enclosing", {                  direction: -1, ... }]` |
| Extend to previous enclosing character | `enclosing.extend.backward` | `a-m` (helix: visual) | `[".seek.enclosing", { shift: "extend", direction: -1, ... }]` |

This command:
- takes an argument `open` of type `boolean`.
- takes an argument `pairs` of type `readonly string[]`.

Default keybinding: `s-m` (helix: normal)

<a name="seek.word" />

### [`seek.word`](../seek.ts#L173-L204)

Select to next word start.

Select the word and following whitespaces on the right of the end of each selection.


#### Variants

| Title                                        | Identifier                | Keybinding              | Command                                                                              |
| -------------------------------------------- | ------------------------- | ----------------------- | ------------------------------------------------------------------------------------ |
| Select to next WORD start                    | `word.ws`                 | `s-w` (helix: normal)   | `[".seek.word", {                  ws: true                                , ... }]` |
| Select to previous word start                | `word.backward`           | `b` (helix: normal)     | `[".seek.word", {                                             direction: -1, ... }]` |
| Select to previous WORD start                | `word.ws.backward`        | `s-b` (helix: normal)   | `[".seek.word", {                  ws: true,                  direction: -1, ... }]` |
| Select to next word end                      | `wordEnd`                 | `e` (helix: normal)     | `[".seek.word", { stopAtEnd: true                                          , ... }]` |
| Select to next WORD end                      | `wordEnd.ws`              | `s-e` (helix: normal)   | `[".seek.word", { stopAtEnd: true, ws: true                                , ... }]` |
| Extend to next word start                    | `word.extend`             | `w` (helix: visual)     | `[".seek.word", {                            shift: "extend"               , ... }]` |
| Extend to next WORD start                    | `word.ws.extend`          | `s-w` (helix: visual)   | `[".seek.word", {                  ws: true, shift: "extend"               , ... }]` |
| Extend to previous word start                | `word.backward.extend`    | `b` (helix: visual)     | `[".seek.word", {                            shift: "extend", direction: -1, ... }]` |
| Extend to previous WORD start                | `word.ws.backward.extend` | `s-b` (helix: visual)   | `[".seek.word", {                  ws: true, shift: "extend", direction: -1, ... }]` |
| Extend to next word end                      | `wordEnd.extend`          | `e` (helix: visual)     | `[".seek.word", { stopAtEnd: true,           shift: "extend"               , ... }]` |
| Extend to next WORD end                      | `wordEnd.ws.extend`       | `s-e` (helix: visual)   | `[".seek.word", { stopAtEnd: true, ws: true, shift: "extend"               , ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `stopAtEnd` of type `boolean`.
- takes an argument `ws` of type `boolean`.

Default keybinding: `w` (helix: normal)

<a name="seek.object" />

### [`seek.object`](../seek.ts#L248-L288)

Select object.


#### Object patterns

- Pairs: `<regexp>(?#inner)<regexp>`.

- Character sets: `[<characters>]+`.

  - Can be preceded by `(?<before>[<characters>]+)` and followed by
    `(?<after>[<character>]+)` for whole objects.

- Matches that may only span a single line: `(?#singleline)<regexp>`.

- Predefined: `(?#predefined=<argument | paragraph | sentence>)`.

#### Variants

| Title                        | Identifier                     | Keybinding                                       | Command                                                                                       |
| ---------------------------- | ------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Select whole object          | `askObject`                    |                                                  | `[".openMenu", { menu: "object",                          title: "Select whole object..." }]` |
| Select inner object          | `askObject.inner`              |                                                  | `[".openMenu", { menu: "object", pass: [{ inner: true }], title: "Select inner object..." }]` |
| Select to whole object start | `askObject.start`              |                                                  | `[".openMenu", { menu: "object", pass: [{              where: "start"                  }] }]` |
| Extend to whole object start | `askObject.start.extend`       |                                                  | `[".openMenu", { menu: "object", pass: [{              where: "start", shift: "extend" }] }]` |
| Select to inner object start | `askObject.inner.start`        |                                                  | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "start"                  }] }]` |
| Extend to inner object start | `askObject.inner.start.extend` |                                                  | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "start", shift: "extend" }] }]` |
| Select to whole object end   | `askObject.end`                |                                                  | `[".openMenu", { menu: "object", pass: [{              where: "end"                    }] }]` |
| Extend to whole object end   | `askObject.end.extend`         |                                                  | `[".openMenu", { menu: "object", pass: [{              where: "end"  , shift: "extend" }] }]` |
| Select to inner object end   | `askObject.inner.end`          |                                                  | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "end"                    }] }]` |
| Extend to inner object end   | `askObject.inner.end.extend`   |                                                  | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "end"  , shift: "extend" }] }]` |

This command:
- takes an argument `inner` of type `boolean`.
- takes an argument `where` of type `"start" | "end"`.
- takes an input `input` of type `string`.

<a name="seek.selectExpand" />

### [`seek.selectExpand`](../seek.ts#L497-L501)

Expand selection

This command:
- does not require an active text editor.

Default keybinding: `a-o` (helix: normal)
`a-o` (helix: visual)
`a-up` (helix: normal)
`a-up` (helix: visual)

<a name="seek.selectShrink" />

### [`seek.selectShrink`](../seek.ts#L505-L509)

Shrink selection

This command:
- does not require an active text editor.

Default keybinding: `a-i` (helix: normal)
`a-i` (helix: visual)
`a-down` (helix: normal)
`a-down` (helix: visual)

<a name="seek.leap" />

### [`seek.leap`](../seek.ts#L514-L530)

Leap forward.

Inspired by [`leap.nvim`](https://github.com/ggandor/leap.nvim).

#### Variants

| Title         | Identifier      | Command                                  |
| ------------- | --------------- | ---------------------------------------- |
| Leap backward | `leap.backward` | `[".seek.leap", { direction: -1, ... }]` |

This command:
- takes an argument `labels` of type `string`.

## [`select`](../select.ts)

Update selections based on their position in the document.

<a name="select.buffer" />

### [`select.buffer`](../select.ts#L13-L18)

Select whole buffer.



Default keybinding: `%` (helix: normal)
`%` (helix: visual)

<a name="select.vertically" />

### [`select.vertically`](../select.ts#L31-L70)

Select vertically.


 TODO: Keep s-down and s-up?

#### Variants

| Title       | Identifier    | Keybinding                                                                                     | Command                                                           |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Jump down   | `down.jump`   | `j` (helix: normal)  , `down` (helix: normal)                                                  | `[".select.vertically", { direction:  1, shift: "jump"  , ... }]` |
| Extend down | `down.extend` | `s-down` (helix: normal) , `j` (helix: visual) , `down` (helix: visual) | `[".select.vertically", { direction:  1, shift: "extend", ... }]` |
| Jump up     | `up.jump`     | `k` (helix: normal)  , `up` (helix: normal)                                                    | `[".select.vertically", { direction: -1, shift: "jump"  , ... }]` |
| Extend up   | `up.extend`   | `s-up` (helix: normal)  , `k` (helix: visual) , `up` (helix: visual)    | `[".select.vertically", { direction: -1, shift: "extend", ... }]` |

The following keybindings are also defined:

| Keybinding                                   | Command                                                                      |
| -------------------------------------------- | ---------------------------------------------------------------------------- |
| `c-f` (helix: normal), `c-f` (helix: insert) | `[".select.vertically", { direction:  1, by: "page"    , shift: "jump" }]`   |
| `c-d` (helix: normal), `c-d` (helix: insert) | `[".select.vertically", { direction:  1, by: "halfPage", shift: "jump" }]`   |
| `c-b` (helix: normal), `c-b` (helix: insert) | `[".select.vertically", { direction: -1, by: "page"    , shift: "jump" }]`   |
| `c-u` (helix: normal), `c-u` (helix: insert) | `[".select.vertically", { direction: -1, by: "halfPage", shift: "jump" }]`   |
| `c-f` (helix: visual)                        | `[".select.vertically", { direction:  1, by: "page"    , shift: "extend" }]` |
| `c-d` (helix: visual)                        | `[".select.vertically", { direction:  1, by: "halfPage", shift: "extend" }]` |
| `c-b` (helix: visual)                        | `[".select.vertically", { direction: -1, by: "page"    , shift: "extend" }]` |
| `c-u` (helix: visual)                        | `[".select.vertically", { direction: -1, by: "halfPage", shift: "extend" }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `avoidEol` of type `boolean`.
- takes an argument `by` of type `"page" | "halfPage"`.

<a name="select.horizontally" />

### [`select.horizontally`](../select.ts#L223-L247)

Select horizontally.


TODO: keep s-left and s-right?

#### Variants

| Title        | Identifier     | Keybinding                                                               | Command                                                             |
| ------------ | -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Jump right   | `right.jump`   | `l` (helix: normal) , `right` (helix: normal)                            | `[".select.horizontally", { direction:  1, shift: "jump"  , ... }]` |
| Extend right | `right.extend` | `s-right` (helix: normal), `l` (helix: visual) , `right` (helix: visual) | `[".select.horizontally", { direction:  1, shift: "extend", ... }]` |
| Jump left    | `left.jump`    | `h` (helix: normal) , `left` (helix: normal)                             | `[".select.horizontally", { direction: -1, shift: "jump"  , ... }]` |
| Extend left  | `left.extend`  | `s-left` (helix: normal) , `h` (helix: visual) , `left` (helix: visual)  | `[".select.horizontally", { direction: -1, shift: "extend", ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `avoidEol` of type `boolean`.

<a name="select.to" />

### [`select.to`](../select.ts#L294-L312)

Select to.

If a count is specified, this command will shift to the start of the given
line. If no count is specified, this command will shift open the `goto` menu.

#### Variants

| Title     | Identifier  | Keybinding                                 | Command                                    |
| --------- | ----------- | ------------------------------------------ | ------------------------------------------ |
| Go to     | `to.jump`   | `g` (helix: normal)                        | `[".select.to", { shift: "jump"  , ... }]` |
| Extend to | `to.extend` | `s-g` (helix: normal), `g` (helix: visual) | `[".select.to", { shift: "extend", ... }]` |

This command:
- accepts an argument of type `object`.
- may be repeated with a given number of repetitions.

<a name="select.line.below" />

### [`select.line.below`](../select.ts#L322-L325)

Select line below.

This command:
- may be repeated with a given number of repetitions.

<a name="select.line.below.extend" />

### [`select.line.below.extend`](../select.ts#L350-L355)

Extend to line below.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `x` (helix: normal)
`x` (helix: visual)

<a name="select.line.above" />

### [`select.line.above`](../select.ts#L382-L385)

Select line above.

This command:
- may be repeated with a given number of repetitions.

<a name="select.line.above.extend" />

### [`select.line.above.extend`](../select.ts#L409-L412)

Extend to line above.

This command:
- may be repeated with a given number of repetitions.

<a name="select.lineStart" />

### [`select.lineStart`](../select.ts#L458-L480)

Select to line start.


#### Variants

| Title                             | Identifier                   | Keybinding                                        | Command                                                            |
| --------------------------------- | ---------------------------- | ------------------------------------------------- | ------------------------------------------------------------------ |
| Jump to line start                | `lineStart.jump`             |                                                   | `[".select.lineStart", {                  shift: "jump"  , ... }]` |
| Extend to line start              | `lineStart.extend`           | `s-a-h` (helix: normal), `s-home` (helix: normal) | `[".select.lineStart", {                  shift: "extend", ... }]` |
| Jump to line start (skip blank)   | `lineStart.skipBlank.jump`   |                                                   | `[".select.lineStart", { skipBlank: true, shift: "jump"  , ... }]` |
| Extend to line start (skip blank) | `lineStart.skipBlank.extend` |                                                   | `[".select.lineStart", { skipBlank: true, shift: "extend", ... }]` |
| Jump to first line                | `firstLine.jump`             |                                                   | `[".select.lineStart", { count: 0,        shift: "jump"  , ... }]` |
| Extend to first line              | `firstLine.extend`           |                                                   | `[".select.lineStart", { count: 0,        shift: "extend", ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `skipBlank` of type `boolean`.

Default keybinding: `a-h` (helix: normal)
`home` (helix: normal)

<a name="select.lineEnd" />

### [`select.lineEnd`](../select.ts#L505-L527)

Select to line end. TODO: helix



#### Variants

| Title                    | Identifier           | Keybinding                                           | Command                                                         |
| ------------------------ | -------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| Extend to line end       | `lineEnd.extend`     | `s-a-l` (kakoune: normal), `s-end` (kakoune: normal) | `[".select.lineEnd", {                 shift: "extend", ... }]` |
| Jump to last character   | `documentEnd.jump`   |                                                      | `[".select.lineEnd", { count: MAX_INT, shift: "jump"  , ... }]` |
| Extend to last character | `documentEnd.extend` |                                                      | `[".select.lineEnd", { count: MAX_INT, shift: "extend", ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `lineBreak` of type `boolean`.

Default keybinding: `a-l` (kakoune: normal)
`end` (kakoune: normal)

<a name="select.lastLine" />

### [`select.lastLine`](../select.ts#L555-L565)

Select to last line.

#### Variants

| Title               | Identifier        | Command                                     |
| ------------------- | ----------------- | ------------------------------------------- |
| Jump to last line   | `lastLine.jump`   | `[".select.lastLine", { shift: "jump"   }]` |
| Extend to last line | `lastLine.extend` | `[".select.lastLine", { shift: "extend" }]` |

<a name="select.firstVisibleLine" />

### [`select.firstVisibleLine`](../select.ts#L576-L586)

Select to first visible line.

#### Variants

| Title                        | Identifier                | Command                                             |
| ---------------------------- | ------------------------- | --------------------------------------------------- |
| Jump to first visible line   | `firstVisibleLine.jump`   | `[".select.firstVisibleLine", { shift: "jump"   }]` |
| Extend to first visible line | `firstVisibleLine.extend` | `[".select.firstVisibleLine", { shift: "extend" }]` |

<a name="select.middleVisibleLine" />

### [`select.middleVisibleLine`](../select.ts#L593-L603)

Select to middle visible line.

#### Variants

| Title                         | Identifier                 | Command                                              |
| ----------------------------- | -------------------------- | ---------------------------------------------------- |
| Jump to middle visible line   | `middleVisibleLine.jump`   | `[".select.middleVisibleLine", { shift: "jump"   }]` |
| Extend to middle visible line | `middleVisibleLine.extend` | `[".select.middleVisibleLine", { shift: "extend" }]` |

<a name="select.lastVisibleLine" />

### [`select.lastVisibleLine`](../select.ts#L610-L620)

Select to last visible line.

#### Variants

| Title                       | Identifier               | Command                                            |
| --------------------------- | ------------------------ | -------------------------------------------------- |
| Jump to last visible line   | `lastVisibleLine.jump`   | `[".select.lastVisibleLine", { shift: "jump"   }]` |
| Extend to last visible line | `lastVisibleLine.extend` | `[".select.lastVisibleLine", { shift: "extend" }]` |

## [`selections`](../selections.ts)

Interacting with selections.

<a name="selections.saveText" />

### [`selections.saveText`](../selections.ts#L21-L30)

Copy selections text.


This command:
- accepts a register (by default, it uses `dquote`).

Default keybinding: `y` (helix: normal)
`y` (helix: visual)

<a name="selections.save" />

### [`selections.save`](../selections.ts#L34-L48)

Save selections.


This command:
- accepts a register (by default, it uses `caret`).
- takes an argument `style` of type `object`.
- takes an argument `untilDelay` of type `number`.
- takes an argument `until` of type `AutoDisposable.Event[]`.

Default keybinding: `s-a-z` (helix: normal)

<a name="selections.restore" />

### [`selections.restore`](../selections.ts#L95-L103)

Restore selections. TODO: Needed?


This command:
- accepts a register (by default, it uses `caret`).

Default keybinding: `a-z` (helix: normal)

<a name="selections.restore.withCurrent" />

### [`selections.restore.withCurrent`](../selections.ts#L115-L135)

Combine register selections with current ones.


The following keybinding is also available:

| Keybinding                | Command                                                       |
| ------------------------- | ------------------------------------------------------------- |
| `s-a-z` (kakoune: normal) | `[".selections.restore.withCurrent", { reverse: true, ... }]` |

See https://github.com/mawww/kakoune/blob/master/doc/pages/keys.asciidoc#marks

This command:
- accepts a register (by default, it uses `caret`).
- takes an argument `action` of type `"a" | "u" | "i" | "<" | ">" | "+" | "-"`.
- takes an argument `reverse` of type `boolean`.

Default keybinding: `a-z` (kakoune: normal)

<a name="selections.pipe" />

### [`selections.pipe`](../selections.ts#L241-L263)

Pipe selections.

Run the specified command or code with the contents of each selection, and
save the result to a register.


See https://github.com/mawww/kakoune/blob/master/doc/pages/keys.asciidoc#changes-through-external-programs

#### Additional commands

| Title               | Identifier     | Keybinding              | Commands                                                                                                                    |
| ------------------- | -------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Pipe and replace    | `pipe.replace` | `\|` (kakoune: normal)   | `[".selections.pipe", { +expression,register }], [".edit.insert", { register: "\|",                                  ... }]` |
| Pipe and append     | `pipe.append`  | `!` (kakoune: normal)   | `[".selections.pipe", { +expression,register }], [".edit.insert", { register: "\|", where: "end"  , shift: "select", ... }]` |
| Pipe and prepend    | `pipe.prepend` | `a-!` (kakoune: normal) | `[".selections.pipe", { +expression,register }], [".edit.insert", { register: "\|", where: "start", shift: "select", ... }]` |

This command:
- accepts a register (by default, it uses `pipe`).
- takes an input `expression` of type `string`.

Default keybinding: `a-|` (kakoune: normal)

<a name="selections.filter" />

### [`selections.filter`](../selections.ts#L291-L313)

Filter selections.


#### Variants

| Title                      | Identifier              | Keybinding                                       | Commands                                                                 |
| -------------------------- | ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| Keep matching selections   | `filter.regexp`         | `s-k` (helix: normal)  , `s-k` (helix: visual)   | `[".selections.filter", { defaultExpression: "/"               , ... }]` |
| Clear matching selections  | `filter.regexp.inverse` | `s-a-k` (helix: normal), `s-a-k` (helix: visual) | `[".selections.filter", { defaultExpression: "/", inverse: true, ... }]` |
| Clear secondary selections | `clear.secondary`       | `,` (helix: normal)    , `,` (helix: visual)     | `[".selections.filter", { expression: "i === count"            , ... }]` |
| Clear main selections      | `clear.main`            | `a-,` (helix: normal)  , `a-,` (helix: visual)   | `[".selections.filter", { expression: "i !== count"            , ... }]` |

This command:
- accepts an argument of type `{ expression?: string }`.
- may be repeated with a given number of repetitions.
- takes an argument `defaultExpression` of type `string`.
- takes an argument `interactive` of type `boolean`.
- takes an argument `inverse` of type `boolean`.

Default keybinding: `$` (helix: normal)
`$` (helix: visual)

<a name="selections.select" />

### [`selections.select`](../selections.ts#L346-L360)

Select within selections.

#### Variants

| Title          | Identifier      | Keybinding                               | Command                                                                                           |
| -------------- | --------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Leap or select | `select.orLeap` | `s` (helix: normal), `s` (helix: visual) | `[".ifEmpty", { then: [[".seek.leap", { ... }]], otherwise: [[".selections.select", { ... }]] }]` |

This command:
- accepts an argument of type `{ re?: string | RegExp }`.
- takes an argument `interactive` of type `boolean`.

<a name="selections.split" />

### [`selections.split`](../selections.ts#L379-L390)

Split selections.


This command:
- accepts an argument of type `{ re?: string | RegExp }`.
- takes an argument `excludeEmpty` of type `boolean`.
- takes an argument `interactive` of type `boolean`.

Default keybinding: `s-s` (helix: normal)
`s-s` (helix: visual)

<a name="selections.splitLines" />

### [`selections.splitLines`](../selections.ts#L415-L430)

Split selections at line boundaries.

#### Variants

| Title                   | Identifier                   | Keybinding                                   | Command                                                                                                              |
| ----------------------- | ---------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Leap or select backward | `splitLines.orLeap.backward` | `a-s` (helix: normal), `a-s` (helix: visual) | `[".ifEmpty", { then: [[".seek.leap", { direction: -1, ... }]], otherwise: [[".selections.splitLines", { ... }]] }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `excludeEol` of type `boolean`.

<a name="selections.expandToLines" />

### [`selections.expandToLines`](../selections.ts#L473-L480)

Expand to lines.

Expand selections to contain full lines (including end-of-line characters).



Default keybinding: `s-x` (helix: normal)
`s-x` (helix: visual)

<a name="selections.trimLines" />

### [`selections.trimLines`](../selections.ts#L507-L514)

Trim lines.

Trim selections to only contain full lines (from start to line break).



Default keybinding: `a-x` (kakoune: normal)

<a name="selections.trimWhitespace" />

### [`selections.trimWhitespace`](../selections.ts#L539-L546)

Trim whitespace.

Trim whitespace at beginning and end of selections.



Default keybinding: `_` (helix: normal)
`_` (helix: visual)

<a name="selections.reduce" />

### [`selections.reduce`](../selections.ts#L565-L584)

Reduce selections to their cursor.



#### Variant

| Title                           | Identifier     | Keybinding                | Command                                                        |
| ------------------------------- | -------------- | ------------------------- | -------------------------------------------------------------- |
| Reduce selections to their ends | `reduce.edges` | `s-a-s` (kakoune: normal) | `[".selections.reduce", { where: "both", empty: false, ... }]` |

This command:
- takes an argument `empty` of type `boolean`.
- takes an argument `where` of type `"active" | "anchor" | "start" | "end" | "both"`.

Default keybinding: `;` (helix: normal)
`;` (helix: visual)

<a name="selections.changeDirection" />

### [`selections.changeDirection`](../selections.ts#L646-L661)

Change direction of selections.



#### Variants

| Title               | Identifier     | Keybinding              | Command                                              |
| ------------------- | -------------- | ----------------------- | ---------------------------------------------------- |
| Forward selections  | `faceForward`  | `a-:` (kakoune: normal) | `[".selections.changeDirection", { direction:  1 }]` |
| Backward selections | `faceBackward` |                         | `[".selections.changeDirection", { direction: -1 }]` |


Default keybinding: `a-;` (kakoune: normal)

<a name="selections.changeOrder" />

### [`selections.changeOrder`](../selections.ts#L686-L700)

Reverse selections.


#### Variants

| Title                       | Identifier        | Command                                          |
| --------------------------- | ----------------- | ------------------------------------------------ |
| Order selections descending | `orderDescending` | `[".selections.changeOrder", { direction:  1 }]` |
| Order selections ascending  | `orderAscending`  | `[".selections.changeOrder", { direction: -1 }]` |

<a name="selections.sort" />

### [`selections.sort`](../selections.ts#L713-L725)

Sort selections.



This command:
- takes an input `expression` of type `string`.

<a name="selections.copy" />

### [`selections.copy`](../selections.ts#L798-L816)

Copy selections below.


#### Variant

| Title                 | Identifier   | Keybinding                                       | Command                                   |
| --------------------- | ------------ | ------------------------------------------------ | ----------------------------------------- |
| Copy selections above | `copy.above` | `s-a-c` (helix: normal), `s-a-c` (helix: visual) | `[".selections.copy", { direction: -1 }]` |

This command:
- may be repeated with a given number of repetitions.

Default keybinding: `s-c` (helix: normal)
`s-c` (helix: visual)

<a name="selections.merge" />

### [`selections.merge`](../selections.ts#L850-L855)

Merge contiguous selections.



Default keybinding: `a-_` (kakoune: normal)

<a name="selections.open" />

### [`selections.open`](../selections.ts#L859-L862)

Open selected file.

<a name="selections.toggleIndices" />

### [`selections.toggleIndices`](../selections.ts#L875-L892)

Toggle selection indices.


#### Variants

| Title                  | Identifier    | Command                                                  |
| ---------------------- | ------------- | -------------------------------------------------------- |
| Show selection indices | `showIndices` | `[".selections.toggleIndices", { display: true , ... }]` |
| Hide selection indices | `hideIndices` | `[".selections.toggleIndices", { display: false, ... }]` |

This command:
- takes an argument `display` of type `boolean | undefined`.
- takes an argument `until` of type `AutoDisposable.Event[]`.

Default keybinding: `enter` (helix: normal)
`enter` (helix: visual)

## [`selections.rotate`](../selections.rotate.ts)

Rotate selection indices and contents.

<a name="selections.rotate.both" />

### [`selections.rotate.both`](../selections.rotate.ts#L9-L20)

Rotate selections clockwise.


The following keybinding is also available:

| Title                               | Identifier     | Keybinding              | Command                                          |
| ----------------------------------- | -------------- | ----------------------- | ------------------------------------------------ |
| Rotate selections counter-clockwise | `both.reverse` | `a-)` (kakoune: normal) | `[".selections.rotate.both", { reverse: true }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `reverse` of type `boolean`.

Default keybinding: `a-(` (kakoune: normal)

<a name="selections.rotate.contents" />

### [`selections.rotate.contents`](../selections.rotate.ts#L28-L37)

Rotate selections clockwise (contents only).

The following command is also available:

| Title                                               | Identifier         | Command                                              |
| --------------------------------------------------- | ------------------ | ---------------------------------------------------- |
| Rotate selections counter-clockwise (contents only) | `contents.reverse` | `[".selections.rotate.contents", { reverse: true }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `reverse` of type `boolean`.

<a name="selections.rotate.selections" />

### [`selections.rotate.selections`](../selections.rotate.ts#L45-L58)

Rotate selections clockwise (selections only).

TODO: ( seems to be broken. Fix it...


The following keybinding is also available:

| Title                                                 | Identifier           | Keybinding                               | Command                                                |
| ----------------------------------------------------- | -------------------- | ---------------------------------------- | ------------------------------------------------------ |
| Rotate selections counter-clockwise (selections only) | `selections.reverse` | `)` (helix: normal), `)` (helix: visual) | `[".selections.rotate.selections", { reverse: true }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `reverse` of type `boolean`.

Default keybinding: `(` (helix: normal)
`(` (helix: visual)

## [`space`](../space.ts)

General purpose space menu.

#### Predefined keybindings

| Title                   | Keybinding                                       | Command                                 |
| ----------------------- | ------------------------------------------------ | --------------------------------------- |
| Show space menu         | `space` (helix: normal), `space` (helix: visual) | `[".openMenu", { menu: "space", ... }]` |

## [`view`](../view.ts)

Moving the editor view.

#### Predefined keybindings

| Title                   | Keybinding                                   | Command                                              |
| ----------------------- | -------------------------------------------- | ---------------------------------------------------- |
| Show view menu          | `z` (helix: normal), `z` (helix: visual)     | `[".openMenu", { menu: "view", ...               }]` |
| Show view menu (locked) | `s-z` (helix: normal), `s-z` (helix: visual) | `[".openMenu", { menu: "view", locked: true, ... }]` |

<a name="view.line" />

### [`view.line`](../view.ts#L18-L24)

Reveals a position based on the main cursor.

This command:
- takes an argument `at` of type `"top" | "center" | "bottom"`.

## [`window`](../window.ts)

Window menu.

#### Predefined keybindings

| Title                   | Identifier                     | Keybinding                                   | Command                                  |
| ----------------------- | ------------------------------ | -------------------------------------------- | ---------------------------------------- |
| Show window menu        | `windowMenu`                   | `c-w` (helix: normal), `c-w` (helix: visual) | `[".openMenu", { menu: "window", ... }]` |
