let findUniq = (arr) => {
    
    for(let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1);
                arr.splice(j, 1);
            }
        }    
    }  
    console.log(arr[0]);
    return arr[0];
};

findUniq([ 0, 1, 0 ]);
findUniq([ 1, 1, 1, 2, 1, 1 ]);
findUniq([ 3, 10, 3, 3, 3 ]);