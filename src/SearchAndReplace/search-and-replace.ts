export function myReplace(str, before, after): string {
    const index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    str = str.replace(before, after);
    return str;
}