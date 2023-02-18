function calculateFactorialDivision(num1, num2) {

    let factorial1 = 1;
    let factorial2 = 1;
    for (let i = 1; i <= num1; i++) {
      factorial1 *= i;
    }
    for (let j = 1; j <= num2; j++) {
      factorial2 *= j;
    }
    

    let divisionResult = factorial1 / factorial2;
    let formattedResult = divisionResult.toFixed(2);
    

    console.log(formattedResult);
  }
  calculateFactorialDivision(5, 2); 
  
