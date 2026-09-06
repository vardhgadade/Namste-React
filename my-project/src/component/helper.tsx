export const findPrime = (num: number): number => {
    if (num <= 0) {
        return 0;
    }

    const primes: number[] = [2, 3];
    let n = 5;

    const isPrime = (n: number): boolean => {
        const limit = Math.sqrt(n);

        for (let i = 0; i < primes.length; i++) {
            const prime = primes[i];

            if (prime > limit) {
                break;
            }

            if (n % prime === 0) {
                return false;
            }
        }

        return true;
    };

    while (primes.length < num) {
        if (isPrime(n)) {
            primes.push(n);
        }

        n += 2;
    }

    return primes[num - 1];
};