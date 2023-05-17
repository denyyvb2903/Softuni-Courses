function sameNum(input) {

    let total = 0
    let state = true
    
    let arr = input.toString().split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            state = false
        } 

        total += Number(arr[i])

    }
    console.log(state)
    console.log(total)
   
}
sameNum(2222222);
sameNum(1234);