function cookingByNumbers(num, com1, com2, com3, com4, com5) {

    let arr = [com1, com2, com3, com4, com5]

    let num1 = Number(num)

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case `chop`: num1 /= 2; break;
            case `dice`: num1 = Math.sqrt(num1); break;
            case `spice`: num1 += 1; break;
            case `bake`: num1 *= 3; break;
            case `fillet`: num1 *= 0.80;
        }

        if(i === arr.length - 1) {
           num1 = num1.toFixed(2);
        }
        console.log(num1);
    }

}
// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// console.log(`=======================================`)
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');