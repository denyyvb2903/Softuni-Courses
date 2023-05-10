function solve(people, type, day) {

    let price = 0

    if (day === `Friday` && type === `Students`) {

        price = 8.45

    } else if (day === `Friday` && type === `Business`) {

        price = 10.90

    } else if (day === `Friday` && type === `Regular`) {

        price = 15

    }

    if (day === `Saturday` && type === `Students`) {

        price = 9.80

    } else if (day === `Saturday` && type === `Business`) {

        price = 15.60

    } else if (day === `Saturday` && type === `Regular`) {

        price = 20

    }

    if (day === `Sunday` && type === `Students`) {

        price = 10.46

    } else if (day === `Sunday` && type === `Business`) {

        price = 16

    } else if (day === `Sunday` && type === `Regular`) {

        price = 22.50

    }

    if (type === `Students` && people >= 30) {

        price = (price * 0.85) * people


    } else if (type === `Business` && people >= 100) {

        price = price * (people - 10)

    } else if (type === `Regular` && people >= 10 && people <= 20) {


        price = (price * 0.95) * people

    } else

        price = price * people

    console.log(`Total price: ${price.toFixed(2)}`);

}
solve(40, `Regular`, `Saturday`)