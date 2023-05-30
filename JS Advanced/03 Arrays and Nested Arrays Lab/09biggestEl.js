function biggestEl(matrix) {

    let biggestElement = matrix[0][0];

    for (let row of matrix) {

        for (let element of row) {

            if (element > biggestElement) {

                biggestElement = element;
            }
        }
    }

    return biggestElement

}

biggestEl(

    [
        [20, 50, 10],
        [8, 33, 145]
    ]
)