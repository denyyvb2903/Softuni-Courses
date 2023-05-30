function arrayOperations(arr) {

    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    console.log(sum);

    let invSum = arr.reduce((acc, curr) => acc + 1 / curr, 0);

    console.log(invSum);

    let strConcat = arr.join("");

    console.log(strConcat);
}
