function find_average(array) {
  let sum = array.reduce( (a,b) => a+b, 0);
  let answer = sum / array.length;
  return answer;
  }

  find_average([1, 2, 3]);


  describe("Example Tests", function() {
    it("Example Test Case", function() {
      Test.assertEquals(find_average([1,1,1]), 1);
      Test.assertEquals(find_average([1,2,3]), 2);
    });
});
