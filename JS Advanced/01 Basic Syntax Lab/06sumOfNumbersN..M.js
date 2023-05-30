function sumOfNum(num1, num2) {

    let total = 0

    for (let i = Number(num1); i <= Number(num2); i++) {
        total += i
    }
    console.log(total);

}
sumOfNum(`1`, `5`);