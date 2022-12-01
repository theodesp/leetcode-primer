/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows == 1) return s;
  const result = [];
  for (let i = 0; i < numRows; i++) {
    result.push([]);
  }
  // keeps track of the current row
  let currentRow = 0;
  // keeps track of the direction we are facing
  let direction = 1;

  for (let ch of s) {
    result[currentRow].push(ch);
    // Check if currentRow has reached either the beginning or end of the numRows so we can change direction
    if (currentRow == 0) {
      direction = 1;
    } else if (currentRow == numRows - 1) {
      direction = -1;
    }
    currentRow += direction;
  }
  return result.map((row) => row.join("")).join("");
}

console.debug(convert("PAYPALISHIRING", 4));
