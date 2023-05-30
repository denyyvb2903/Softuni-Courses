function diagonalSums (matrix) {

    let innerArr = matrix[0];
    let sumMain = 0;
    let sumSecond = 0;

    for (let i = 0, j = innerArr.length - 1; i < matrix.length; i++, j--) {
        let mainDiagonalEl = matrix[i][i];
        let secondDiagonalEl = matrix[i][j];
        sumMain+= mainDiagonalEl;
        sumSecond+=secondDiagonalEl;
    }

    let result = (`${sumMain} ${sumSecond}`)

    console.log(result);

}
diagonalSums([[20, 40],[10, 60]]);