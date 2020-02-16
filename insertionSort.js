const insertionSort = _array => {
  const array = _array.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    }
  }
  return array;
};

export default insertionSort;
