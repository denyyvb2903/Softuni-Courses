function negativePositive(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element < 0) {
            result.unshift(element)
        } else {
            result.push(element)
        }
    }

    for (let element of result) {
        console.log(element);
    }

}
negativePositive([7, -2, 8, 9]);