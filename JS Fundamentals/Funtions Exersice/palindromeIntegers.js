function palindromeInteger(input) {

    for (let i = 0; i < input.length; i++) {

        let numAsString = String(input[i]);
        let buff = ``;
        for (let j = numAsString.length - 1; j >= 0; j--) {
            buff += numAsString[j];
        }
        console.log(buff === numAsString);

    }



}
palindromeInteger();