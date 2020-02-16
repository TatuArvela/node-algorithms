// Recursive version
function binarySearch1(array, value) {
  function search(array, value, low, high) {
    if (low > high) return false;
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === value) return true;
    if (array[mid] < value) return search(array, value, mid + 1, high);
    return search(array, value, low, mid - 1);
  }

  return search(array, value, 0, array.length - 1);
}

// Loop version
function binarySearch2(array, value) {
  let low = 0;
  let high = array.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] === value) return true;
    if (array[mid] < value) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}

export default binarySearch2;
