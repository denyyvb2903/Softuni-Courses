function sumFirstLast (arr) {

    let firstEl = Number(arr.shift());
    let secondEl = Number(arr.pop());

    console.log(firstEl + secondEl);

}
sumFirstLast(['20', '30', '40']);