function printAnArray (arr, delimeter) {

    for(el of arr) {
        console.log(arr.join(delimeter));
        break;
    }

}
printAnArray(['One',
'Two',
'Three',
'Four',
'Five'], `-`);