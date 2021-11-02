let findPrime = (...number) => {
    number.forEach(number => {
        if (number <= 1) {
            console.log(number + " is not a prime number.")
            return;
        }
        else {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    console.log(number + " is not a prime number.")
                    return;
                }
            }
            console.log(number + " is a prime number.")
        }
    })
}
findPrime(1, 5, 6, 7, 13, 8);
findPrime(0);

console.log("-------")