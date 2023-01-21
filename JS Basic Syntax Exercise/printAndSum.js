function solve (n,m) {

    let sum = 0;
    let buffNum = ``;

    for (n; n <= m; n++) {

        buffNum += n + ` `
        sum+=n
       
    }
    
    console.log(buffNum)
    console.log(`Sum: ${sum}`)

}
solve(5,10)