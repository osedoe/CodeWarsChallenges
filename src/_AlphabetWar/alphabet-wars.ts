enum Answer {
  DRAW = 'Let\'s fight again!',
  LEFT = 'Left side wins!',
  RIGHT = 'Right side wins!'
}

export function alphabetWar(word: string): Answer {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };
  const wordArray = word.split("");
  const scoreTable = {
    leftScore: getScore(wordArray, leftSide),
    rightScore: getScore(wordArray, rightSide)
  };
  const { leftScore, rightScore } = scoreTable;
  if (leftScore > rightScore) {
    return Answer.LEFT;
  }
  if (rightScore > leftScore) {
    return Answer.RIGHT;
  }
  return Answer.DRAW;
}

alphabetWar('zdqmwpbs');
alphabetWar('zzzzs');

function getScore(originalArray: string[], teamArray: {}) {
  return originalArray
    .filter(char => Object.keys(teamArray).includes(char))
    .reduce((acc, val) => {
      return teamArray[val] + acc
    }, 0);
}