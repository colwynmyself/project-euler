// https://projecteuler.net/problem=4

import { isPalindrome } from '../util';

(() => {
  const max = 999;
  let largest = 0;

  for (let i = max; i > 0; i--) {
    for (let j = max; j > 0; j--) {
      const product = i * j;
      if (isPalindrome(product) && product > largest) {
        largest = product;
      }
    }
  }

  console.log(largest);
})();
