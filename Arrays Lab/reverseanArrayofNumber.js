function solve(n, arr) {

    let newArr = [];
    for (let i = n - 1; i >= 0; i--) {

        let el = arr[[i]];
        newArr.push(el);
    }

    console.log(newArr.join(` `));

}
solve(3, [10, 20, 30, 40, 50]);