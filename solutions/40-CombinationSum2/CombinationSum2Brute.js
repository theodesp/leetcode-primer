function findCombinations(candidates, target) {
  const subsets = generateSubsets(candidates);
  const combinations = new Set();
  for (let subset of subsets) {
    if (subset.reduce((a, b) => a + b, 0) === target) {
      combinations.add(JSON.stringify(subset.sort()));
    }
  }
  return [...combinations].map((combination) => JSON.parse(combination));
}

function generateSubsets(candidates) {
  const subsets = [[]];
  for (let candidate of candidates) {
    const subsetsLength = subsets.length;
    for (let i = 0; i < subsetsLength; i++) {
      subsets.push(subsets[i].concat([candidate]));
    }
  }
  return subsets;
}
