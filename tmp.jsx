private _getHtmlForWebview(webview: vscode.Webview) {

    // const filePath = path.join(this.extensionPath, 'resources', 'read.md');
    // const readMe = fs.readFileSync(filePath, 'utf8');
    // console.log(readMe)

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <script src="${tailwindUri}"></script>
      <script src="${highlightUri}"></script>
      <script src="${markeddUri}"></script>
      <link rel="stylesheet" href="${highlighDefualtUri}">
      <link rel="stylesheet" href="${leftSideStyleUri}">
    </head>
    <body>
      <div id="read-box">
        <p style="font-size: 1.6em">Welcome to CursorCode</p>
        <p>Conversation session: enter a question in the input box below</p>
        <p>Code generation: Right-click the code box, click the CourseCode option in the menu to enter the requirements</p>
        <p>Code optimization: select the code in the code box, right click on the CourseCode option in the menu, and enter the requirements in the input box that pops up above</p>
        <p>Code optimization: select the code in the code box, and enter the requirements in the input box below</p>
        <p>Shortcut key 1: Press Ctrl+Alt+Y in the code box to pop up the code generation/optimization command box</p>
        <p>Shortcut key 2: Press Ctrl+Alt+U in the code box to pop up the dialogue message sending box</p>
        <p>Tips: If there is a blank and no answer, please click Stop Response</p>
        <p>Github: https://github.com/Meteo-Pig/CursorCode</p>
      </div>

      <div id="chat-box" class="pt-6 text-sm">Please enter your question:</div>
      <div class="response-box"><button id="stop-response">Stop responding</button></div>
      <div style="height: 80px;"></div>

      <div id="bottom-box">
        <button id="clear-msg">Clear session</button>
        <input class="h-10 w-full p-4 text-sm" type="text" id="prompt-input" placeholder="Please enter your question..."/>
      </div>
    </body>
    <script src="${scriptUri}"></script>
    </html>`;
  }
