function findCombinations(candidates, target) {
  const combinations = [];

  function findCombinationsHelper(start, current) {
    if (current.length > 0) {
      let currentSum = current.reduce((a, b) => a + b);
      if (currentSum === target) {
        combinations.push(current);
      }
    }
    for (let i = start; i < candidates.length; i++) {
      findCombinationsHelper(i, [...current, candidates[i]]);
    }
  }

  findCombinationsHelper(0, []);
  return combinations;
}
