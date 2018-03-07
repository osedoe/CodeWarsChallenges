let humanYearsCatYearsDogYears = h => {
    if (h===1) return [1, 15, 15];
    else if (h===2) return [2, 24, 25];
    else return [h, (h-2)*4+24, (h-2)*5+24];
};

humanYearsCatYearsDogYears(1); // [1,15,15] 
humanYearsCatYearsDogYears(2); // [2,24,24]
humanYearsCatYearsDogYears(10); // [10,56,64] 

// Execution time went down from 1600ms to 300ms.