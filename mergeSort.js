function sort(left, right) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  /*
    Sort elements into result array
  */
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort(array) {
  /*
    Search branch is done, return value
  */
  if (array.length <= 1) {
    return array;
  }

  /*
    Find the middle element
    If the array length is even, select the first of the two middle elements by rounding
    [📦📦📦📦📦📦📦📦📦📦📦📦📦📦📦📦] 16 elements total, even length
    📦📦📦📦📦📦📦[📦📦]📦📦📦📦📦📦📦 Two middle elements
    📦📦📦📦📦📦📦[📦]📦📦📦📦📦📦📦📦 First middle element
  */
  const middleIndex = Math.floor(array.length / 2);

  /*
    Split array into two halves
    [📦📦📦📦📦📦📦📦] <- Left (includes middle element)
           Right -> [📦📦📦📦📦📦📦📦]
  */
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  /*
    Merge and sort array halves
  */
  return sort(mergeSort(left), mergeSort(right));
}

export default mergeSort;
