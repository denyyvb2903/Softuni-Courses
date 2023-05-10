function repeatedString (string, repeatCount) {

    total = ``;

    for (let i = 0; i < repeatCount; i++) {
        total+=string;
    }

    console.log(total);
    
}
repeatedString(`abc`, 3);