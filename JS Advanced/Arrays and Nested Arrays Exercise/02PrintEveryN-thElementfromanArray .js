function printAnyN (arr, n) {

    const output = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(i % n === 0) {
            output.push(element);
        }
    }

    return output;
}
printAnyN(['5',
'20',
'31',
'4',
'20'],
2
);