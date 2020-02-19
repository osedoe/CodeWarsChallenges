interface NameObject {
  name: string;
}

export const formatAString = (namesList: NameObject[]): string => {
  const regExp = {
    lastComma: /,(?=[^,]*$)/,
    allCommas: /,+/g,
    ampersand: /&/
  };

  return namesList
    .map(object => object.name)
    .join(',')
    .replace(regExp.lastComma, '&')
    .replace(regExp.allCommas, ', ')
    .replace(regExp.ampersand, ' & ');
};
