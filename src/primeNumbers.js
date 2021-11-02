let numbers = [];
let getNumbers = (numbers) => {
    for (let i = 0; i <= 1000; i++) {
        numbers.push(i);
    }
    return numbers;
}
getNumbers(numbers);

let checkPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
checkPrime(numbers);

numbers.forEach(number => {
    let isPrime = checkPrime(number);

    if (isPrime) {
        console.log(number + " is a prime number.")
    }
})