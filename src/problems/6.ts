// https://projecteuler.net/problem=6

import { } from '../util';

(() => {
  const max = 100;

  let sumOfSquares = 0;
  let squareOfSum = 0;

  for (let i = 1; i <= max; i++) {
    sumOfSquares += i ** 2;
    squareOfSum += i;
  }

  console.log(squareOfSum ** 2 - sumOfSquares)
})();
