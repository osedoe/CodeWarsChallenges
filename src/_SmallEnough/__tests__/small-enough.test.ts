import { smallEnough } from '../small-enough';

describe('Small Enough', () => {
    test('should return true if the elements in the array are lower than the given limit', () => {
        const array = [66, 101];
        const limit = 200;
        expect(smallEnough(array, limit)).toBeTruthy();
    });
});

// Test.describe("Example tests",_=>{
//     Test.assertEquals(smallEnough([66, 101], 200), true);
//     Test.assertEquals(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
//     Test.assertEquals(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
//     Test.assertEquals(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
// })