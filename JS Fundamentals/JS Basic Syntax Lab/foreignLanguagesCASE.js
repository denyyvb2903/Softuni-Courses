function demo(country) {

    switch (country) {

        case `USA`:
        case `England`: console.log(`English`); break;
        case `Mexico`:
        case `Argentina`:
        case `Spain`: console.log(`Spanish`); break;
        default: console.log(`unknown`); break;
    }


}