function sketch() {
  let page = document.createElement("div");
  let sketchArea = document.createElement("div");

  let perCell = {
    height: "42px",
    width: "42px",
    display: "flex",
    flexShrink: "0",
    flexDirection: "column",
    background: "black",
  };

  let rows = [];
  for (let size = 0; size < 16; size++) {
    let row = document.createElement("div");
    rows.push(row);
    Object.assign(row.style, perCell);

    sketchArea.appendChild(row);
  }
  for (let col of rows) {
    for (let size = 0; size < 16; size++) {
      let currCol = document.createElement("div");
      col.appendChild(currCol);
      Object.assign(currCol.style, perCell);
    }
  }

  let sketchStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  Object.assign(sketchArea.style, sketchStyle);
  page.appendChild(sketchArea);
  document.body.appendChild(page);
}

function main() {
  sketch();
}

main();
