// https://projecteuler.net/problem=6

import { listPrimes } from '../util';

(() => {
  const primes = listPrimes(1_000_000);
  console.log(primes[10_000]);
})();
