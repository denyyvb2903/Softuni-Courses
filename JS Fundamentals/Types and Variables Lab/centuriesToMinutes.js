function solve(centuries) {

    let years = 100 * centuries;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24
    let minutes = hours * 60

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
solve(2);