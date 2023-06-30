
function findCombinations(array, target) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Math.abs(Math.abs(array[i] + array[j])) === target) {
        result.push([array[i], array[j]]);

        array.splice(j, 1);
        array.splice(i, 1);

        j--;
        i--;
      }
    }
  }

  return result;
}

function margeAndSort(array) {
  const result = [];
  array.forEach((ele) => {
    result.push(...ele);
  });
  result.sort((a, b) => a - b);
  return result;
}

function findDoubleCombinations(array, newTarget) {
   const result = [];
  const sortedArray = array.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length - 3; i++) {
    for (let j = i + 1; j < sortedArray.length - 2; j++) {
      let left = j + 1;
      let right = sortedArray.length - 1;

      while (left < right) {
        const sum = sortedArray[i] + sortedArray[j] + sortedArray[left] + sortedArray[right];

        if (sum === newTarget) {
          result.push([sortedArray[i], sortedArray[j], sortedArray[left], sortedArray[right]]);
          left++;
          right--;
        } else if (sum < newTarget) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

const array = [1, 3, 2, 2, -4, -6, 2, 8];
const target = 4;
const combinations = findCombinations(array, target);
console.log(combinations);
const margeAndSortArray = margeAndSort(combinations);
console.log(margeAndSortArray);
const newTarget = target * 2;
const combinationsDouble = findDoubleCombinations(margeAndSortArray, newTarget);
console.log(combinationsDouble);
