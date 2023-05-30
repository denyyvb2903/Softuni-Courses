function rotateArray (arr, num) {
    let collection = [...arr];

    for( let i = 0; i < num; i++) {
        let lastNum = collection.pop();
        collection.unshift(lastNum)
    }

    console.log(collection.join(" "));
}