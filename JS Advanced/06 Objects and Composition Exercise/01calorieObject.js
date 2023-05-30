function calorieObject(arr) {

    const resulut = {};

    for (let i = 0; i < arr.length; i += 2) {
        resulut[arr[i]] = Number([arr[i+1]]);
    }
    
    
    return resulut;
    
}

calorieObject(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'])