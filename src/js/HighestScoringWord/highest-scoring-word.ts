export function high(str: string): string {
    const wordsArray: string[] = str.split(' ');
    const lettersArray: string[][] = wordsArray.map(word => word.split(""));

    let scoresArray = lettersArray.map(word => word.map(letter =>
      letter.charCodeAt(0)- 96).reduce((total, amount) => total + amount));

    const scoreTable = wordsArray.reduce((object, key, index) => {
        return {
            ...object,
            [key]: scoresArray[index]
        };
    }, {});
    const highestScore = Math.max(...scoresArray);
    return Object.keys(scoreTable).find(word => scoreTable[word] === highestScore) || '';
}