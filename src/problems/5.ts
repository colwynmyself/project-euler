// https://projecteuler.net/problem=5

import { } from '../util';

(() => {
  const maxDenominator = 20;

  let current = maxDenominator;
  while (true) {
    let failure = false;
    for (let i = 1; i <= maxDenominator; i++) {
      if (current % i !== 0) {
        failure = true;
        break;
      }
    }

    if (failure) {
      current++;
      continue;
    }

    break;
  }

  console.log(current);
})();
