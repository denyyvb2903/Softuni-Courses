function wordsUppercase (sentance) {

    let pattern = /\w+/g;
    let output = sentance.match(pattern).join(", ").toUpperCase();
    console.log(output);
}
wordsUppercase(`Hi, how are you?`);