let penColor = "BLACK";
let gridSize = 16;
// Create the title
function title(){
  let headder = document.createElement('p');

  headder.innerText = 'Etch-A-Sketch'

  headderStyle = {
    fontSize : '32px',
    fondWeight : '800',
    textAlign : 'center',
    margin : '8px',
  };
  Object.assign(headder.style, headderStyle);
  document.body.appendChild(headder);
}

// Creates the sketch area with given size and returns the classes of created divs
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

// The input part, lets you take input for size, returns the div for inputs
function createInput(){
  let inputs = document.createElement('div');
  let textInput = document.createElement('textArea');
  let btnsDiv = document.createElement('div');

  let btn = document.createElement('button');
  let rainbowBtn = document.createElement('button');
  let bnwBtn = document.createElement('button');
  let p = document.createElement('p');
  p.innerText = "Input size:";
  p.style.margin = "1px";

  let btnSyle = {
    height: "20px",
    width: "60px",
    alignSelf: "center",
    margin: "2px",
    padding: "2px"
  };

  let inputsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  }

  textInput.classList.add('textIn');
  btn.classList.add('takeInput');
  
  btn.innerHTML = "Create";
  bnwBtn.innerHTML = "Black";
  rainbowBtn.innerHTML = "Rainbow";
  Object.assign(btn.style, btnSyle);
  Object.assign(bnwBtn.style, btnSyle);
  Object.assign(rainbowBtn.style, btnSyle);

  btnsDiv.appendChild(btn);
  btnsDiv.appendChild(rainbowBtn);
  btnsDiv.appendChild(bnwBtn);

  rainbowBtn.addEventListener('click', rainbowEvent);
  bnwBtn.addEventListener('click', blackEvent);
  
  Object.assign(inputs.style, inputsStyle);
  
  inputs.appendChild(p);
  
  inputs.appendChild(textInput);
  inputs.appendChild(btnsDiv);

  return inputs;
}

// Rainbow button event 
function rainbowEvent() {
  penColor = "RAINBOW";
  clickOnButton();
}

// Black button event  
function blackEvent() {
 penColor = "BLACK";
  clickOnButton();
}

// Set the color as Rainbow 
function setRainbow(classes) {
  addListenersForHov(classes, "rainbow");
}

// Set the color as Black 
function setBlack(classes) {
  addListenersForHov(classes, "black")
}

// Generate a random hexcolor
function genHex() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

// Adds listeners to all the divs
function addListenersForHov(classes, color){
  for(let val of classes){
    let currDiv = document.getElementsByClassName(val);
    if(color != 'black'){
      let rColor = genHex();
      currDiv[0].addEventListener('mouseover', (event) => currDiv[0].style.background = rColor);
    }
    else{
      currDiv[0].addEventListener('mouseover', (event) => currDiv[0].style.background = color);
    }
  }
}

// Calculates the pixel size for each div
function pixelSize(size){
  return ((640/size).toString()+'px')
}


// Creates new grid with given input 
function clickOnButton(){
  let tIn = document.getElementsByClassName("textIn")[0].value || 16;
  gridsize = Math.round(tIn);
  let playArea = document.getElementsByClassName('playArea')[0];
  playArea.remove();
  let classes = sketch(gridsize);
  if(penColor == "RAINBOW"){
    setRainbow(classes);
  }
  else{
    setBlack(classes);
  }
}

function main() {
  title();
  let clasess = sketch(gridSize); // Default gridsize 16
  addListenersForHov(clasess, "black");
}

main();
