function solve (text) {

    let type = typeof text

    if (type === `number`) {

        console.log(`number`)
        console.log(text);


    } else if (type === `string`) {

        console.log(`string`)
        console.log(text);

    } else {

        console.log(typeof text)
        console.log(`Parameter is not suitable for printing`)

    }
    
}
solve (null)