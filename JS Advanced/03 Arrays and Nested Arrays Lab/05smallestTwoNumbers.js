function smallestTwoNumbers (arr) {

    let result = arr.sort((a, b) => a-b)    

    console.log(result[0], result[1]);
}
smallestTwoNumbers([30, 15, 50, 5]);