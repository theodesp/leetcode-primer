# Basic Algorithmic Techniques

The following section discusses and analyses some of the most common algorithmic techniques and insights on how to solve technical problems. Many problems will reference this sections for quick navigation and convenience.

## Techniques

### 1. Read the problem statement aloud, making use of notes.

When addressing a new problem, make sure you read the problem as thoroughly as possible so that your mind can expose logical errors. LeetCode allows you to add notes next to each problem so it makes it handy to jot down your thoughts and verify them once you attempting to write the solution.

### 2. Consider Trading Time with Space.

When you have a problem with bad time complexity (by doing multiple passes on the same data structure), then consider using fast access data structure like a HashTable to store intermediate results for later.
This may increase the Space Complexity of the algorithm but may reduce the time complexity as you merely have to search the Cache in $O(1)$ time instead of $O(n)$ time.