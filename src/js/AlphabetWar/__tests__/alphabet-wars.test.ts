import { alphabetWar } from '../alphabet-wars';

describe('Alphabet Wars', () => {
  test('should win right side', () => {
    expect(alphabetWar('z')).toBe("Right side wins!");
  });
  test('should be a draw', () => {
    expect(alphabetWar('zdqmwpbs')).toBe('Let\'s fight again!');
  });
  test('should win the right side', () => {
    expect(alphabetWar('zzzzs')).toBe('Right side wins!');
  });
  test('should win the left side', () => {
    expect(alphabetWar('wwwwww')).toBe('Left side wins!');
  });
});