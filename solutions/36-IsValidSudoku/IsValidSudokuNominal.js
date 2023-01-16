function isValidSudoku(board) {
  // Helper function to check if a given sub-box is valid
  function isValidBox(row, col) {
    let box = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let num = board[row + i][col + j];
        if (num !== ".") {
          if (box.has(num)) {
            return false;
          }
          box.add(num);
        }
      }
    }
    return true;
  }

  // Check rows
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num !== ".") {
        if (row.has(num)) {
          return false;
        }
        row.add(num);
      }
    }
  }

  // Check columns
  for (let i = 0; i < 9; i++) {
    let col = new Set();
    for (let j = 0; j < 9; j++) {
      let num = board[j][i];
      if (num !== ".") {
        if (col.has(num)) {
          return false;
        }
        col.add(num);
      }
    }
  }

  // Check sub-boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!isValidBox(i, j)) {
        return false;
      }
    }
  }

  return true;
}
