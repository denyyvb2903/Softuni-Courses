function simpleCalculator(numOne, numTwo, operator) {
    let operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
    return operations[operator](numOne, numTwo);
}