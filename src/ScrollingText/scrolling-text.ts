// FIXME: Check error
export function scrollingText(text: string) {
    text.toUpperCase();
    let answer = [];
    let arr = text.split("");
    answer.push(text);
    arr.forEach(element => {
        let num = arr.shift();
        arr.push(num);
        let text2 = arr.join("");
        text2 = text2.toUpperCase();
        answer.push(text2);
    });
    answer.pop();
    return answer;
}