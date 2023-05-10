function solve(arr) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let biggestNumberIndex = -1;
    let maxNumber = [];

    while (maxNumber.length !== 3) {
        for (let i = biggestNumberIndex + 1; i < arr.length; i++) {
            if (biggestNumber <= arr[i]) {
                biggestNumber = arr[i];
                biggestNumberIndex = i;
            }
        }
        if (biggestNumber === undefined) {
            break;
        }
        maxNumber.push(biggestNumber);
        biggestNumber = arr[biggestNumberIndex + 1];
    }
    console.log(maxNumber.join(" "));
}
solve([1, 4, 3, 2]);