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

  let result = [""];
  for (const digit of digits) {
    const letters = letterMaps[digit];
    const temp = [];
    for (const letter of letters) {
      for (const combination of result) {
        temp.push(combination + letter);
      }
    }
    result = temp;
  }
  return result;
}
