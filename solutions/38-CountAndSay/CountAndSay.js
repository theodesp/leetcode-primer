function countAndSay(n) {
  let str = "1";
  for (let i = 1; i < n; i++) {
    let nextStr = "";
    let count = 1;
    for (let j = 1; j < str.length; j++) {
      if (str[j] === str[j - 1]) {
        count++;
      } else {
        nextStr += count + str[j - 1];
        count = 1;
      }
    }
    nextStr += count + str[str.length - 1];
    str = nextStr;
  }
  return str;
}
