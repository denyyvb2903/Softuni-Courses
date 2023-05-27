function magic(matrix) {

    let total = matrix[0].reduce((acc, curr) => acc + curr, 0);

    for (let i = 0; i < matrix.length; i++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumRow += matrix[i][j];
            sumCol += matrix[j][i];
        }
        
        if (total !== sumRow || total !== sumCol) {
            return false;
        }

    }

    return true;

}
magic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);