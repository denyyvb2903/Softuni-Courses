function solve(day) {

    let days = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
    days = days[day - 1]

    if (day >= 1 && day <= 7) {
        console.log(days);
    } else {
        console.log(`Invalid day!`)
    }

}
solve(3);