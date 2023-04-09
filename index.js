/** @format */
import { bubleSort } from './modules/buble_sort.js';
import { selectiveSort } from './modules/selective_sort.js';
import { insertionSort } from './modules/insertion_sort.js';
import { quickSort } from './modules/quick_sort.js';
import { mergeSort } from './modules/merge_sort.js';

const arrayLenght = 10000;
const arrayElementRange = 100;

const array = generateRandomNumArray(arrayLenght, arrayElementRange);

function generateRandomNumArray(lenght, range) {
  const array = [];
  for (let i = 0; i < lenght; i++) {
    array.push(Math.floor(Math.random() * range));
  }
  return array;
}
const sortArrayBy = (inputArray, func) => {
  let resultArray = inputArray.slice(0);
  const timeSart = performance.now();
  func(resultArray);
  const timeEnd = performance.now();
  console.log(
    `Araay was sorted by ${func.name} during ${timeEnd - timeSart} miliseconds`
  );
};

sortArrayBy(array, bubleSort);
sortArrayBy(array, selectiveSort);
sortArrayBy(array, insertionSort);
sortArrayBy(array, quickSort);
sortArrayBy(array, mergeSort);
