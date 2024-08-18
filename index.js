let text = "brat summer";

// define function
function addText() {
  const element = document.getElementById("brat");

  element.innerHTML = text;
  console.log("text added yay");
  return element;
}

// call function
addText();
