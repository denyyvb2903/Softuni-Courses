function checkPerfectNumber(number) {
    
    let divisorSum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisorSum += i;
        }
    }

    if (divisorSum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}