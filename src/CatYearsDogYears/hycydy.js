module.exports = hycydy = (human) => {
    let humanYears,
        catYears,
        dogYears;
    if (human === 1) {
        humanYears = human;
        catYears = 15;
        dogYears = 15;
      } else if (human === 2) {
        humanYears = human;
        catYears = 15 + 9;
        dogYears = 15 + 9;
      } else if (human > 2) {
        humanYears = human;
        catYears = 24 + (4 * (human - 2));
        dogYears = 24 + (5 * (human - 2));
      }
      const arr = [humanYears, catYears, dogYears];
    console.log(arr.constructor);
    return arr;
};

// Solved

hycydy(1); // [1,15,15]

hycydy(2); // [2,24,24]

hycydy(10); // [10,56,64]