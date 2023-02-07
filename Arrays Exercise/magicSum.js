function magicSum(array, num) {
    let sum = 0;
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        sum = array[i] + array[j];
        if (sum === num) {
          console.log(array[i] + " " + array[j]);
        }
      }
    }
  }
  solve();