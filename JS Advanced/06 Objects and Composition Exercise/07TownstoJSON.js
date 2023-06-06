function townsToJSON(input) {
    let result = []
    input.shift()
    input.forEach(x => {
        let [_, town, latitude, longitude] = x.split(/\s*\|\s*/g).map(y => isNaN(y) ? y : Number(y).toFixed(2))
        obj = { Town: town, Latitude: +latitude, Longitude: +longitude, }
        result.push(obj)
    })
    console.log(JSON.stringify(result))
}
townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
);
