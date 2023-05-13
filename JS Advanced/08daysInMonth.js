function daysInMonth(month, year) {

    let day = 0

    switch (month) {

        case 1: day = 31; break;
        case 3: day = 31; break;
        case 5: day = 31; break;
        case 7: day = 31; break;
        case 8: day = 31; break;
        case 10: day = 31; break;
        case 12: day = 31; break;
        case 4: day = 30; break;
        case 6: day = 30; break;
        case 9: day = 30; break;
        case 11: day = 30; break;
        case 2: day = 28; if (year % 4 === 0) { day += 1 } break;
        default : break;
    }

    console.log(day);

}
daysInMonth(1, 2012);