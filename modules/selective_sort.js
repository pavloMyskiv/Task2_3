/** @format */

export const selectiveSort = (inputArray) => {
  for (let i = 0; i < inputArray.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] < inputArray[minIndex]) {
        minIndex = j;
      }
    }
    const template = inputArray[i];
    inputArray[i] = inputArray[minIndex];
    inputArray[minIndex] = template;
  }
  return inputArray;
};
