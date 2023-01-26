function solve (number, operator, number1) {

    let result = 0

    switch (operator) {

        case `+` : result = number + number1; break;
        case `-` : result = number - number1; break;
        case `*` : result = number * number1; break;
        case `/` : result = number / number1; break;

    }

    console.log(result.toFixed(2));

}
solve(5,
    '+',
    10
    );