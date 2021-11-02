let checkPerfect = () => {
    for (let i = 1; i < 1000; i++) {
        let total = 0;
        for (let z = 1; z < i; z++) {
            if (i % z == 0) {
                total += z;
            }
        }
        if (total == i) {
            console.log(i + " is a perfect number.");
        }

    }
}

checkPerfect();

console.log("-------")