function extractSub (arr) {

    const output = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        const currEl = arr[i];
        

        if(currEl >= biggest) {
            output.push(currEl);
            biggest = currEl;
        }
    }

    return output;


}