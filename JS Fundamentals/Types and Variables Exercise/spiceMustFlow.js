function mineSpice(startingYield) {
    let totalSpice = 0;
    let days = 0;
    let currentYield = startingYield;
    while (currentYield >= 100) {
      days++;
      totalSpice += currentYield;
      currentYield -= 10;
    }
    totalSpice -= (days + 1) * 26;
    if (totalSpice < 0) {
      totalSpice = 0;
    }
    console.log(days);
    console.log(totalSpice);
  }
  mineSpice(111);