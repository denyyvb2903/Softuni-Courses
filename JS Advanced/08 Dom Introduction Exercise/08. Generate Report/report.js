function generateReport() {
    const thRow = Array.from(document.querySelectorAll("input"));
    const textareaOutput = document.getElementById("output");
    const obj = {};
    const output = [];
    thRow.forEach((row, idx) => {
      if (row.checked) {
        obj[idx + 1] = row.name;
      }
    });
  
    const rows = Array.from(document.querySelectorAll("tr")).slice(1);
    rows.forEach((row) => {
      const children = Array.from(row.children);
      const temp = {};
      children.forEach((child, idxChild) => {
        if (obj[idxChild + 1]) {
          temp[obj[idxChild + 1]] = child.textContent;
        }
      });
      output.push(temp);
    });
  
    textareaOutput.value = JSON.stringify(output);
  }