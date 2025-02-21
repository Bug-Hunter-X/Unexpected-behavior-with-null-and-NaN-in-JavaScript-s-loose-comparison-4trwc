# JavaScript Loose Comparison Bug

This repository demonstrates a common error in JavaScript related to loose comparison (==) with null and NaN.  The `bug.js` file contains a function with a seemingly correct logic that fails due to the loose comparison of null. NaN is also handled unexpectedly.

The `bugSolution.js` file shows a corrected version using strict comparison (===) to avoid the pitfalls of loose comparison.

## How to reproduce

1. Clone the repository
2. Run `node bug.js` to see the unexpected behavior
3. Run `node bugSolution.js` to see the corrected output

## Lesson learned

Always use strict comparison (===) in JavaScript to avoid unexpected behavior related to type coercion, especially when dealing with null and NaN values.