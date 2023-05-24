function biggerHalf(arr) {

    let newArr = arr.sort((a, b) => a - b)

    let middle = Math.floor(newArr.length / 2);

    return newArr.slice(middle);

}
biggerHalf([4, 7, 2, 5]);