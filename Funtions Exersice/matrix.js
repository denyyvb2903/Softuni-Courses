function printMatrix(n) {
    // Loop through rows
    for (let i = 0; i < n; i++) {
      let row = '';
      // Loop through columns
      for (let j = 0; j < n; j++) {
        row += n + ' ';
      }
      console.log(row);
    }
  }
  printMatrix(3)