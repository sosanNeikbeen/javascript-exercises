const addMultTable = (rows, cols) => {
  const table = document.createElement("table");
  for (let j = 0; j < rows; j++) {
    // table row creation
    const row = document.createElement("tr");

    for (let i = 0; i < cols; i++) {
      const col = document.createElement("td");

      row.appendChild(col);
    }
    table.appendChild(row);
  }

  table.setAttribute("border", "1px");
  document.body.appendChild(table);
};

addMultTable(3, 5);
