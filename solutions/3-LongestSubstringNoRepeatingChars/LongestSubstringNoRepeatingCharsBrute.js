/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let max = 0;
    // Loop for each substring combination
    for (let i = 0; i < s.length; i += 1) {         // O(n)
        for (let j = i; j < s.length; j += 1) {     // O(n)
            // Check if the substring does not contain repeated characters
            if (checkRepetition(s, i, j)) {         // O(n)
                // update current max
                max = Math.max(max, j - i + 1);     // O(1)
            }
        }
    }

    return max;
}

// Checks if the substring s[start:end] contains repetitive characters
function checkRepetition(s, start, end) {
    const chars = new Set();

    for (let i = start; i <= end; i += 1) { // O(n)
        if(chars.has(s[i])) {               // O(1)
            return false;
        }
        chars.add(s[i]);
    }

    return true;
}