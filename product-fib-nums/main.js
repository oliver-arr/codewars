function productFib(prod) {
  let a = 0;
  let b = 1;
  let fib = 1;

  for (let i = 2; i <= prod; i++) {
    f = a + b;
    a = b;
    b = f;

    let sum = a * b;
    if (sum >= prod) {
      return [a, b, sum === prod];
    }
  }
}

console.log(productFib(4895)); // [55, 89, true]
console.log(productFib(5895)); // [89, 144, false]
console.log(productFib(74049690)); // [6765, 10946, true]
