function sketch() {
  let page = document.createElement('div');
  let sketchArea = document.createElement('div');

  let perCell = {
    height : "42px",
    width : "42px",
    display : "flex",
   flexShrink : "0", 
    background : "black",
  };

  for(let rSize = 0; rSize < 16; rSize++){
    let row = document.createElement('div');
    
    for(let cSize = 0; cSize < 16; cSize++){
      let currChild = document.createElement('div');
      row.appendChild(currChild);
      Object.assign(currChild.style, perCell);
    }

    sketchArea.appendChild(row);
    Object.assign(row.style, perCell);
  }
 
  let sketchStyle = {
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
  };
  Object.assign(page.style, sketchStyle)
  page.appendChild(sketchArea); 
  document.body.appendChild(page);
  
 
}

function main() {
 sketch(); 
}

main();
