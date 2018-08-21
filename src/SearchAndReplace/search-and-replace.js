function myReplace(str, before, after) {
    const index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    str = str.replace(before, after);
    return str;
}

module.exports = myReplace;

myReplace('Let us go to the store', 'store', 'mall');