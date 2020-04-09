export const dashatize = (number: number): string => {
  const result = number
    .toString()
    .split('')
    .map(elem => +elem % 2 === 0 ? `${ elem }-` : elem)
    .map((elem, index, array) => {
      if (array.indexOf(elem) === 0 || array.lastIndexOf(elem) === array.length-1) {
        return false;
      }
      return elem;
    })
    .join('');
    // .replace(/^-/);
  console.log('🍓', result);

  return '';

};
