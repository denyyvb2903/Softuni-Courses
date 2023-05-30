function pieceOfPie(arr, string1, string2) {

    let firstPie = arr.indexOf(string1);
    let secondPie = arr.indexOf(string2);

    let result = arr.slice(firstPie, secondPie + 1);

    return result

}
pieceOfPie(
    [   'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'   ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);