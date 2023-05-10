function trackCoffee(input) {
    let coffees = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {
        let [command, ...value] = input[i].split(" ");

        if (command === "Include") {
            coffees.push(value.join(" "));
        } else if (command === "Remove") {
            let [direction, count] = value;
            count = Number(count);
            if (direction === "first") {
                coffees.splice(0, count);
            } else {
                coffees.splice(-count, count);
            }
        } else if (command === "Prefer") {
            let [index1, index2] = value.map(Number);
            if (index1 >= 0 && index1 < coffees.length && index2 >= 0 && index2 < coffees.length) {
                [coffees[index1], coffees[index2]] = [coffees[index2], coffees[index1]];
            }
        } else if (command === "Reverse") {
            coffees.reverse();
        }
    }

    console.log(`Coffees:\n${coffees.join(" ")}`);
}





trackCoffee([
    'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
    '5',
    'Include TurkishCoffee',
    'Remove first 2',
    'Remove last 1',
    'Prefer 3 1',
    'Reverse'
]);

