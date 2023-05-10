function stringManipulator(input) {
    let str = input.shift();
    for (let i = 0; i < input.length; i++) {
        let value = input[i].split(' ');
        let command = value.shift();

        if (command === 'Translate') {
            let [char, replace] = value;
            str = str.split(char).join(replace);
            console.log(str);
        } else if (command === 'Includes') {
            let sub1 = value.join(' ');
            console.log(str.includes(sub1) ? 'True' : 'False');
        } else if (command === 'Start') {
            let sub2 = value.join(' ');
            console.log(str.startsWith(sub2) ? 'True' : 'False');
        } else if (command === 'Lowercase') {
            str = str.toLowerCase();
            console.log(str);
        } else if (command === 'FindIndex') {
            let charIndex = value[0];
            console.log(str.lastIndexOf(charIndex));
        } else if (command === 'Remove') {
            let [startIndex, count] = value;
            str = str.slice(0, startIndex) + str.slice(parseInt(startIndex) + parseInt(count));
            console.log(str);
        } else if (command === 'End') {
            return;
        }
    }
}

stringManipulator((["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
)
console.log(`===========================`)
stringManipulator((["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])
)

