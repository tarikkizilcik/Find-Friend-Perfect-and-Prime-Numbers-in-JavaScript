let findFriendsNumber = (friendNumbers) => {
    let toplam = 0;
    let toplamArray = [];
    for (let i = 0; i < friendNumbers.length; i++) {
        for (let x = 1; x < friendNumbers[i]; x++) {
            if (friendNumbers[i] % x == 0) {
                toplam = toplam + x;
            }
        }
        toplamArray.push(toplam);
    }
    let firstNumber = friendNumbers[0];
    let secondNumber = friendNumbers[1];

    if (toplamArray[0] == secondNumber && toplamArray[1] - toplamArray[0] == firstNumber) {
        console.log(firstNumber + " ve " + secondNumber + " durun siz kardessiniz!");
    }
    else {
        console.log(firstNumber + " ve " + secondNumber + " kardes sayi degilsiniz!");
    }
}
let friendNumbers = [220, 284];

findFriendsNumber(friendNumbers);

console.log("-------")