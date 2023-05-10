function theHuntingGames(arr) {

    let days = Number(arr.shift());
    let people = Number(arr.shift());
    let energy = Number(arr.shift());
    let waterPerDayPerPerson = Number(arr.shift());
    let foodPerDayPerPerson = Number(arr.shift());
    let dayCounter = 0;

    let totalWater = days * people * waterPerDayPerPerson
    let totalFood = days * people * foodPerDayPerPerson

    for (let i = 0; i < arr.length; i++) {

        let energyLost = Number(arr[i]);
        dayCounter++;
        energy = energy - energyLost;


        if (dayCounter % 2 === 0) {

            let waterEnergyBoost = energy * 0.05;
            energy = energy + waterEnergyBoost;
            let drinkWater = totalWater * 0.3;
            totalWater = totalWater - drinkWater;

        }

        if (dayCounter % 3 === 0) {

            let foodEnergyBoost = energy * 0.1;
            energy = energy + foodEnergyBoost;
            let eatFood = totalFood / people
            totalFood = totalFood - eatFood

        }


        if (energy <= 0) {

            let waterLeft = totalWater.toFixed(2);
            let foodLeft = totalFood.toFixed(2);
            console.log(`You will run out of energy. You will be left with ${foodLeft} food and ${waterLeft} water.`)
            return;
        }

    }

    let energyLeft = energy.toFixed(2);
    console.log(`You are ready for the quest. You will be left with - ${energyLeft} energy!`)

}

theHuntingGames((["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"])

);

console.log(`=====================`)

theHuntingGames((["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])


);