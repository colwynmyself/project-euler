// Among the first 231 thousand square numbers, what is the sum of all the odd squares?

(() => {
  const highestSquare = 231_000;

  let sum = 0;

  for (let i = 1; i <= highestSquare; i++) {
    const square = i * i;
    if (square % 2 === 1) {
      sum += square;
    }
  }

  console.log(sum);
})();
