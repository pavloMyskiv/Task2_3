/** @format */

export const insertionSort = (inputArray) => {
  for (let i = 1; i < inputArray.length; i++) {
    let current = inputArray[i];
    let j = i - 1;
    while (j >= 0 && inputArray[j] > current) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }
    inputArray[j + 1] = current;
  }
  return inputArray;
};
