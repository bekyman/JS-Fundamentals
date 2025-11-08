function factorial(n) {
  // Check for NaN or non-positive numbers (0, negative, or missing/invalid input)
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  
  // Recursive case
  return n * factorial(n - 1);
}

// Get and parse the argument
const num = parseInt(process.argv[2]);

console.log(factorial(num));
