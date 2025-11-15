export function listPrimes(max: number) {
  if (!Number.isInteger(max)) {
    max = Math.ceil(max);
  }
  // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  const primes = [];
  // 0 and 1 are not primes
  const sieve = new Array(max).fill(true, 2);

  for (let i = 2; i <= max; i++) {
    const isPrime = sieve[i];
    if (!isPrime) {
      continue;
    }

    primes.push(i);

    // Mark all multiples as not prime
    for (let j = i * 2; j <= max; j += i) {
      sieve[j] = false;
    }
  }

  return primes;
}

export function isPrime(n: number) {
  if (!Number.isInteger(n)) {
    return false;
  }

  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  // Brute force, very slow but fast enough for now
  const maxFactor = Math.sqrt(n);
  for (let i = 2; i <= maxFactor; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export function isPalindrome(n: number) {
  const nString = n.toString();
  for (let i = 0; i <= nString.length; i++) {
    if (nString[i] !== nString[nString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
