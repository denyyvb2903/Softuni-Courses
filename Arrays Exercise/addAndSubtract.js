function solve(arr) {

    let sum = 0
    let newSum = 0

    for (let i = 0; i < arr.length; i++) {

        let currentNumber = arr[i];
        sum += currentNumber
        if (currentNumber % 2 === 0) {
            currentNumber += i;
            arr[i] = currentNumber;
        } else {
            currentNumber -= i;
            arr[i] = currentNumber;
        }
        newSum+=currentNumber
    }

    console.log(arr);
    console.log(sum);
    console.log(newSum);


}
solve([5, 15, 23, 56, 35]);