/** @format */

export const bubleSort = (inputArray) => {
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
