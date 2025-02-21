function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else if (Number.isNaN(x)){
    return -2; // Handle NaN explicitly
  } else {
    return x; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(5));   // Output: 5
console.log(foo(NaN)); // Output: -2