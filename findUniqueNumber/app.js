let findUniq = arr => {
    let lng = arr.length;
    let sortedArr = arr.sort( (a,b) => a - b);
    if (sortedArr[0] === sortedArr[lng-2]) {
        sortedArr.splice(0, lng-1);
        return sortedArr[0];
    } else if (sortedArr[1] === sortedArr[lng-2]) {
        sortedArr.splice(1, lng-1);
        return sortedArr[0];
    }
};

// Clever solution found in Code Wars after solving it.
// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
//   }
  

findUniq([ 0, 1, 0 ]);
findUniq([ 1, 1, 1, 2, 1, 1 ]);
findUniq([ 3, 10, 3, 3, 3 ]);