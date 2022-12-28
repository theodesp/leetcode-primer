function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const letterMaps = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];
  const numLetters = digits.length;
  const numCombinations = Math.pow(4, numLetters);
  for (let i = 0; i < numCombinations; i++) {
    let combination = "";
    let num = i;
    for (let j = 0; j < numLetters; j++) {
      const digit = digits[j];
      const letters = letterMaps[digit];
      const letterIndex = num % 4;
      combination += letters[letterIndex];
      num = Math.floor(num / 4);
    }
    result.push(combination);
  }
  return result;
}
