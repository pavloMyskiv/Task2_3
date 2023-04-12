/** @format */

export const mergeSort = (inputArray) => {
  if (inputArray.length <= 1) {
    return inputArray;
  }
  const midIndex = Math.floor(inputArray.length / 2);
  const leftArray = inputArray.slice(0, midIndex);
  const rightArray = inputArray.slice(midIndex);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
};

const merge = (leftArray, rightArray) => {
  const mergedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  return mergedArray.concat(leftArray, rightArray);
};
