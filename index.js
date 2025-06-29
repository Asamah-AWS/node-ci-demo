// index.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export so tests can import them
module.exports = { add, subtract };
