function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetExpenses = Math.floor(lostFights / 2) * helmetPrice;
    let swordExpenses = Math.floor(lostFights / 3) * swordPrice;
    let shieldExpenses = 0;
    let armorExpenses = 0;
    let shieldBroken = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            shieldBroken++;
            if (shieldBroken % 2 === 0) {
                armorExpenses += armorPrice;
            }
            shieldExpenses += shieldPrice;
        }
    }

    let totalExpenses = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
solve(7,
    2,
    3,
    4,
    5
)