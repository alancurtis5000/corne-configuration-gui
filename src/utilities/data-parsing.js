export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const isEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const addSpacingToKeyCode = (string) => {
  const maxLength = 16;
  const stringLength = string.length;
  const numberOfSpaces = maxLength - stringLength;

  let updatedString = string;
  // "\xa0" is the character for space
  for (let i = 0; i < numberOfSpaces; i++) {
    updatedString = updatedString + "\xa0";
  }
  return updatedString;
};
