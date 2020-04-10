// TODO: Find out how to make tests in Python

// Test.assert_equals(likes([]), 'no one likes this')
// Test.assert_equals(likes(['Peter']), 'Peter likes this')
// Test.assert_equals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
// Test.assert_equals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
// Test.assert_equals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')

import { likes } from "../whoLikesIt";

describe('Who likes it', () => {
  test('should prompt that no one likes it', () => {
    expect(likes([])).toBe('no one likes it');
  });

  test('should prompt that one person likes it', () => {
    expect(likes([])).toBe('no one likes it');
  });
});
