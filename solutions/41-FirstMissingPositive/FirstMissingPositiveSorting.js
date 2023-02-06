function firstMissingPositive(nums) {
    // current positive number we need to match
    let traversal = 1;
    nums.sort(function(a, b){return a-b});
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == traversal) {
            // increase positive match here to look in the next iteration
            traversal++;
        }
    }
    // return last missing positive number
    return traversal;
}

console.log(firstMissingPositive([-1,0,1,3]));