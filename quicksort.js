function partition(array, low, high) {
  let pivot = array[Math.floor((high + low) / 2)];
  let i = low;
  let j = high;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}

function quicksort(array, low, high) {
  let index;

  if (array.length > 1) {
    index = partition(array, low, high);
    if (low < index - 1) {
      quicksort(array, low, index - 1);
    }
    if (index < high) {
      quicksort(array, index, high);
    }
  }

  return array;
}

const quicksortWrapper = (_array) => {
  const array = _array.slice();
  return quicksort(array, 0, array.length);
}

export default quicksortWrapper;
