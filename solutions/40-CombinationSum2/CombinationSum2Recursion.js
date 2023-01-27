function findCombinations(candidates, target) {
  const combinations = [];

  function findCombinationsHelper(start, current, currentSum) {
    // Base case: if the current sum is equal to the target, add the current combination to the list
    if (currentSum === target) {
      combinations.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicate candidates
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      // Skip candidates that exceed the target sum
      if (currentSum + candidates[i] > target) {
        continue;
      }

      current.push(candidates[i]);
      findCombinationsHelper(i + 1, current, currentSum + candidates[i]);
      current.pop();
    }
  }

  candidates.sort();
  findCombinationsHelper(0, [], 0);
  return combinations;
}
