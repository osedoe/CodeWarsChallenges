function find_average(array) {
    
    let sum = 0;
    let length = array.length;
    array.filter((number)=>{
        sum += number;
        
    });
    console.log(`suma: ${sum}`);
    console.log(`largo: ${length}`);
    let avg = sum/array.length;
    console.log(`media: ${avg}`);
    return avg;
  }

  find_average([1, 2, 3]);