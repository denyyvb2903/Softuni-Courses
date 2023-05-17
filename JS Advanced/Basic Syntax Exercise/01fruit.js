function fruit(fruits, grams, price){

    let kilo = grams / 1000
    let total = kilo * price
    console.log(`I need $${total.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruits}.`)

}
fruit('orange', 2500, 1.80);




