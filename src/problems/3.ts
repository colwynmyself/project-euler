// https://projecteuler.net/problem=3

import { listPrimes, isPrime } from '../util';

(() => {
  const num = 600_851_475_143;
  const maxFactor = Math.floor(Math.sqrt(num));

  for (let i = maxFactor; i >= 2; i--) {
    if (num % i === 0 && isPrime(i)) {
      console.log(i);
      break;
    }
  }
})();
