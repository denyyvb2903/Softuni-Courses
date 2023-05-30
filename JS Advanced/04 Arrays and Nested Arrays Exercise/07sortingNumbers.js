function sortingNumbers (arr) {

    let newArr = arr.sort((a, b) => a - b) 
    const result = [];

    while(newArr.length !==0) {
        const firstEl = newArr.shift();
        const secondEl = newArr.pop();
        result.push(firstEl, secondEl)
    }

    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56] );