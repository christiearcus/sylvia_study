# Description

Study notes for Sylvia on web development basics. Website published at: https://christiearcus.github.io/sylvia_study/

# Notes

**Quick start a new basic web project:**

Use this as a cheat sheet for saving time when doing assessments. This is how you construct it from scratch. There are many things out there that can generate stuff for you, but it helps to know how the foundations.

1. Open iTerm terminal (the default Mac one sucks).
2. `cd ~` to go to your home directory and then `pwd` to show your location (using finder is also fine if you don't like the terminal).
3. `mkdir sylvia_study` and then `cd sylvia_study` to navigate in to that directory.
4. `git init` to initiate the folder as a git repository so that version changes can be seen.
5. `touch index.html styles.css index.js` to create basic files for building something.
6. `ls` to check the files have been created properly.
7. `code .` to open vscode in this folder location. If this command doesn't work, you can also manually open vscode and open in the UI (user interface).
8. Once in vscode go in to `index.html` and type `!` and then hit enter. This will automatically create your HTML boilerplate/template (like below).
9. Add CSS by putting the link to it in the head tag (the browser reads your html document from top to bottom, so you want the styles up the top. `<link rel="stylesheet" href="styles.css">`. rel means relative link, so you need to tell the html document how to find the stylesheet. Because it's in the same folder location / directory as the HTML document, you don't need anything to the file location.
10. Add the [JS](https://www.w3schools.com/js/js_whereto.asp) file to the HTML document. I chucked it at the bottom of the document, as it needs to load first before you initiate JS.
11. Open it up in your browser! You can just click file open in Chrome and find it that way. You should see your raw HTML doc.
12. Add styles & interactivity with JavaScript.
13. Add to your GitHub account! Go in to github desktop, click add local repository (repo) and find the folder. All three documents should come up. Put a commit message in there `initial commit` works. Then click commit to main (chat to me about branches if you like). Then click repository then publish. This will create a brand new repo / project in your GitHub account for you and now this version is safe on the internet. Here's what I added to my [personal account](https://github.com/christiearcus/sylvia_study)


### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Sylvia</title>
</head>
<body>
  <h1>hey nerd!</h1>
  <div id="brat"></div>
</body>
  <script src="index.js"></script>
</html>
```

### index.js
```
let text = "brat summer";

// define function
function addText() {
  debugger;
  const element = document.getElementById("brat");

  element.innerHTML = text;
  console.log("text added yay");
  return element;
}

// call function
addText();
```

### styles.css
```
body {
  background-color: lime;
  font-family: arial;
  color: grey
}
