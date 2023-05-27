function fromJSONToHTML(jsonString) {

    let arr = JSON.parse(jsonString);
    let output = '<table>\n';
    let firstObj = arr[0];

    output += '<tr>';

    for (const key in firstObj) {

        output += `<th>${key}</th>`;

    }

    // output += '</tr>\n';

    for (const obj of arr) {
        output += '</tr>\n';

        for (const key in obj) {
            output += `<tr><td>${obj[key]}</td>`;

        }
    }
    output += '</tr>\n';

    output += '</table>';

    console.log(output);
}
fromJSONToHTML(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);