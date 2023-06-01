function sketch(currSize) {
  let page = document.createElement("div");
  let sketchArea = document.createElement("div");

  if (currSize > 100) currSize = 100;

  let sizeP = pixelSize(currSize);
  let perCell = {
    display: "flex",
    flexDirection: "column",
    flexShrink: "0",
    height: sizeP,
    width: sizeP,
    margin: "0",
    padding: "0",
    background: "none",
  };

  let rows = [];
  for (let size = 0; size < currSize; size++) {
    let row = document.createElement("div");
    rows.push(row);
    Object.assign(row.style, perCell);
    sketchArea.appendChild(row);
  }
  let colR = 0;

  let classNames = [];
  for (let col of rows) {
    for (let size = 0; size < currSize; size++) {
      let currCol = document.createElement("div");
      col.appendChild(currCol);
      currCol.classList.add(`hov${size}-${colR}`);

      classNames.push(`hov${size}-${colR}`)
      Object.assign(currCol.style, perCell);
    }
    colR += 1;
  }

  let sketchStyle = {
    display: "flex",
    height: "640px",
    width: "640px",
    display: "flex",
    border: "1px solid grey",
  };

  Object.assign(sketchArea.style, sketchStyle);
  page.appendChild(sketchArea);
  document.body.appendChild(page);

  let pageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  Object.assign(page.style, pageStyle);

  let inputs = createInput();
  page.appendChild(inputs);
  page.classList.add('playArea');

  let btn = document.getElementsByClassName("takeInput");
  btn[0].addEventListener('click', clickOnButton);

  return classNames;
}

function createInput(){
  let inputs = document.createElement('div');
  let textInput = document.createElement('textArea');
  let btn = document.createElement('button');

  let btnSyle = {
    height: "20px",
    width: "60px",
    alignSelf: "center",
  };

  let inputsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  }

  textInput.classList.add('textIn');
  btn.classList.add('takeInput');
  Object.assign(btn.style, btnSyle);
  Object.assign(inputs.style, inputsStyle);

  inputs.appendChild(textInput);
  inputs.appendChild(btn);
  return inputs;
}



function addListenersForHov(classes){
  for(let val of classes){
    let currDiv = document.getElementsByClassName(val);
    currDiv[0].addEventListener('mouseover', (event) => currDiv[0].style.background = "black")
  }
}

function pixelSize(size){
  return ((640/size).toString()+'px')
}

function clickOnButton(){
  let tIn = document.getElementsByClassName("textIn")[0].value;
  tIn = Math.round(tIn);
  let playArea = document.getElementsByClassName('playArea')[0];
  playArea.remove();
  clasess = sketch(tIn);
  addListenersForHov(clasess);
}

function main() {
  let clasess = sketch(16);
  addListenersForHov(clasess);
}

main();
