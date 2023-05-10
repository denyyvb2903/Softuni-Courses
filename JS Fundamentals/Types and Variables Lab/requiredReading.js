function solve(pagesCurrentBook, pagesInAnHour, days) {

    let neededTime = pagesCurrentBook / pagesInAnHour
    let daysNeeded = neededTime / days

    console.log(daysNeeded);

}
solve(432,
    15,
    4
);