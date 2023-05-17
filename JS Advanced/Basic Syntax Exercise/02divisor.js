function divisor(num1, num2) {

    let greatestNum = 0;

    for (let i = 1; i < 100; i++) {
        if (num1 % i == 0 && num2 % i == 0) {

            if (i > greatestNum) {
                greatestNum = i;
            }
        }
    }
    console.log(greatestNum);
}
divisor(5, 15);
divisor(2154, 458);