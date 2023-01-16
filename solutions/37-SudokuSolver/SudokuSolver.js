function solveSudoku(board) {
  let row = new Array(9),
    col = new Array(9),
    box = new Array(9);
  for (let i = 0; i < 9; i++) {
    row[i] = new Set();
    col[i] = new Set();
    box[i] = new Set();
  }

  // Helper function to get the box index
  function getBoxIndex(i, j) {
    return (((i / 3) | 0) * 3 + j / 3) | 0;
  }

  // Fill the sets with initial values
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num !== ".") {
        row[i].add(num);
        col[j].add(num);
        box[getBoxIndex(i, j)].add(num);
      }
    }
  }

  // Helper function to check if a number can be placed in a given cell
  function canPlace(i, j, num) {
    return (
      !row[i].has(num) && !col[j].has(num) && !box[getBoxIndex(i, j)].has(num)
    );
  }

  // Helper function to solve the puzzle using backtracking
  function solve() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") {
          for (let num = 1; num <= 9; num++) {
            if (canPlace(i, j, num.toString())) {
              board[i][j] = num.toString();
              row[i].add(num.toString());
              col[j].add(num.toString());
              box[getBoxIndex(i, j)].add(num.toString());
              // Check again here if we have a solution
              if (solve()) {
                return true;
              } else { // otherwise backtrack
                board[i][j] = ".";
                row[i].delete(num.toString());
                col[j].delete(num.toString());
                box[getBoxIndex(i, j)].delete(num.toString());
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  return solve();
}
