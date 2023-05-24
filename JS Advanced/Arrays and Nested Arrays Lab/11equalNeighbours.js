function equalNeighbours(matrix) {

    let pairCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        let innerArr = matrix[i];
        for (let j = 0; j < innerArr.length; j++) {
            if (i - 1 >=  0 && matrix[i][j] == matrix[i - 1][j]) {
                pairCount++;
            }

            if (j - 1 >= 0 && matrix[i][j] == matrix[i][j - 1]) {
                pairCount++;

            }
        }
    }
    console.log(pairCount);
}