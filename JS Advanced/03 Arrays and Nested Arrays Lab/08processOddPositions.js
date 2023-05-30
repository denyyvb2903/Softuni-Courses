function processOddPositions(arr) {

    let result = arr
        .filter((x, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(` `)
    console.log(result);
}
processOddPositions([10, 15, 20, 25]);