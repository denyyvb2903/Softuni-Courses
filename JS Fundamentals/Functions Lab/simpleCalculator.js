function simpleCalculator (num1, num2, operator) {

    let isOperator = ``;

    switch (operator) {


        case `multiply` : isOperator = num1 * num2; break;
        case `divide` : isOperator = num1 / num2; break;
        case `add` : isOperator = num1 + num2; break;
        case `subtract` : isOperator = num1 - num2; break;
        default: break;

    }

    console.log(isOperator);

}
 simpleCalculator(5, 5, `multiply`)