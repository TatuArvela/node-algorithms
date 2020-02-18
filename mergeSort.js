function sort1(left, right) {
  const arr = [];
  // Using indexes is faster than shifting arrays
  let leftIndex = 0;
  let rightIndex = 0;

  // Sort elements into result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr.push(left[leftIndex]);
      leftIndex++;
    } else {
      arr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements
  return arr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function sort2(left, right) {
  // Using indexes is faster than shifting arrays
  let arr = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    // Checking for last elements can shave off 40% from execution time
    if (leftIndex === left.length) {
      arr.push(right[rightIndex]);
      rightIndex++;
    } else if (rightIndex === right.length) {
      arr.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] < right[rightIndex]) {
      arr.push(left[leftIndex]);
      leftIndex++;
    } else {
      arr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return arr;
}

function mergeSort(array) {
  // Search branch is done, return value
  if (array.length <= 1) {
    return array;
  }

  // Find the middle element (rounded down)
  const middleIndex = Math.floor(array.length / 2);

  // Split array into two halves
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  // Merge and sort array halves
  return sort2(mergeSort(left), mergeSort(right));
}

export default mergeSort;
