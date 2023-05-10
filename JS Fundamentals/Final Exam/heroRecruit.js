function heroRecuit(input) {
    let heroes = {};
  
    for (let i = 0; i < input.length; i++) {
      let [action, heroName, spellName] = input[i].split(" ");
  
      if (action === "Enroll") {
        if (!heroes.hasOwnProperty(heroName)) {
          heroes[heroName] = [];
        } else {
          console.log(`${heroName} is already enrolled.`);
        }
      } else if (action === "Learn") {
        if (!heroes.hasOwnProperty(heroName)) {
          console.log(`${heroName} doesn't exist.`);
        } else if (heroes[heroName].includes(spellName)) {
          console.log(`${heroName} has already learnt ${spellName}.`);
        } else {
          heroes[heroName].push(spellName);
        }
      } else if (action === "Unlearn") {
        if (!heroes.hasOwnProperty(heroName)) {
          console.log(`${heroName} doesn't exist.`);
        } else if (!heroes[heroName].includes(spellName)) {
          console.log(`${heroName} doesn't know ${spellName}.`);
        } else {
          let index = heroes[heroName].indexOf(spellName);
          heroes[heroName].splice(index, 1);
        }
      } else if (action === "End") {
        let heroStrings = [];
  
        for (let hero in heroes) {
          let spells = heroes[hero].join(", ");
          heroStrings.push(`== ${hero}: ${spells}`);
        }
  
        console.log("Heroes:");
        console.log(heroStrings.join("\n"));
        return;
      }
    }
  }

heroRecuit([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"
]);
console.log(`==========`)
heroRecuit(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"])
console.log(`==========`)
heroRecuit(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"])


