// https://projecteuler.net/problem=2

(() => {
  const max = 4_000_000;
  let sum = 0;
  let previous = null;
  let current = 1;

  while (current < max) {
    if (current % 2 === 0) {
      sum += current;
    }

    const next = current + (previous ?? 1);
    previous = current;
    current = next;
  }

  console.log(sum);
})();
