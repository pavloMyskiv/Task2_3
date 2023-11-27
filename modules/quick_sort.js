/** @format */

export const quickSort = (
  inputArray,
  left = 0,
  right = inputArray.length - 1
) => {
  if (left < right) {
    let pivotIndex = partition(inputArray, left, right);
    quickSort(inputArray, left, pivotIndex - 1);
    quickSort(inputArray, pivotIndex + 1, right);
  }
  return inputArray;
};

const partition = (inputArray, left, right) => {
  let pivotIndex = Math.floor((left + right) / 2);
  let pivot = inputArray[pivotIndex];
  let i = left;
  let j = right;
  while (i <= j) {
    while (inputArray[i] < pivot) {
      i++;
    }
    while (inputArray[j] > pivot) {
      j--;
    }
    if (i <= j) {
      let template = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = template;
      i++;
      j--;
    }
  }
  return i;
};
