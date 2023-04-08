/** @format */

const array = [];
for (let i = 0; i < 10000; i++) {
  array.push(Math.floor(Math.random() * 10000));
}

const sortArrayBy = (inputArray, func) => {
  let resultArray = inputArray.slice(0);
  func(resultArray);
  return resultArray;
};

const bubleSort = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      let template;
      if (inputArray[j] > inputArray[j + 1]) {
        template = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = template;
      }
    }
  }
  return inputArray;
};
const selectiveSort = (inputArray) => {
  for (let i = 0; i < inputArray.length - 1; i++) {
    let minIndex = i;
    for (j = i + 1; j < inputArray.length; j++) {
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
const insertionSort = (inputArray) => {
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
const quickSort = (inputArray, left = 0, right = inputArray.length - 1) => {
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
const mergeSort = (inputArray) => {
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
function merge(leftArray, rightArray) {
  const mergedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  return mergedArray.concat(leftArray, rightArray);
}

console.time('bubleSort');
sortArrayBy(array, bubleSort);
console.timeEnd('bubleSort');
console.time('SortByChoice');
sortArrayBy(array, selectiveSort);
console.timeEnd('SortByChoice');
console.time('insertionSort');
sortArrayBy(array, insertionSort);
console.timeEnd('insertionSort');
console.time('quickSort');
sortArrayBy(array, quickSort);
console.timeEnd('quickSort');
console.time('mergeSort');
sortArrayBy(array, mergeSort);
console.timeEnd('mergeSort');
