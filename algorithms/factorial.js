let number = 5;

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return factorial(x - 1);
  }
}

console.log(factorial(number));
