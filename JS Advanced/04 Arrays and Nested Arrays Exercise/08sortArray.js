function sortArray (arr) {

    let sortedArr = arr.sort((a, b) => {
        let firstCrit = a.length - b.length;
        let secondCrit = a.localeCompare(b);
        return firstCrit || secondCrit;
        
    })

    console.log(sortedArr.join("\n"));
}
sortArray();