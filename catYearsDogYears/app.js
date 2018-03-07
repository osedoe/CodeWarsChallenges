function humanYearsCatYearsDogYears(human) {
    // Your code here!
    let humanYears = 0,
        catYears = 0,
        dogYears = 0;
    let arr = [humanYears, catYears, dogYears];

    for (let i=0; i<=humanYears; i++) {
      humanYears++;
      if (humanYears === 1) {
        catYears += 15;
        dogYears += 15;
      } else if (humanYears === 2) {
        catYears += 9;
        dogYears += 9;
      } else if (humanYears > 2) {
        catYears += 4;
        dogYears += 5;
      }
    }
    console.log(arr);
    return arr;
}


humanYearsCatYearsDogYears(1); // [1,15,15]
  
humanYearsCatYearsDogYears(2); // [2,24,24]

humanYearsCatYearsDogYears(10); // [10,56,64] 