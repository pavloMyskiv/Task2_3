/** @format */
import { bubleSort } from './modules/buble_sort.js';
import { selectiveSort } from './modules/selective_sort.js';
import { insertionSort } from './modules/insertion_sort.js';
import { quickSort } from './modules/quick_sort.js';
import { mergeSort } from './modules/merge_sort.js';

const array = [];
for (let i = 0; i < 10000; i++) {
  array.push(Math.floor(Math.random() * 10000));
}

const sortArrayBy = (inputArray, func) => {
  let resultArray = inputArray.slice(0);
  func(resultArray);
  return resultArray;
};

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
