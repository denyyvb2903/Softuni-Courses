function orders(order, amount) {

    let price = order;

    switch (order) {

        case `coffee`: price = 1.50; break;
        case `water`: price = 1; break;
        case `coke`: price = 1.40; break;
        case `snacks`: price = 2; break;
        default: break;

    }

    let total = price * amount;

    console.log(total.toFixed(2));

}
orders("water", 5);