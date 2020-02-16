const selectionSort = _array => {
  const array = _array.slice();
  for (let i = 0; i < array.length; i++) {
    let jMin = i; // Jimin

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[jMin]) {
        jMin = j;
      }
    }

    if (jMin != i) {
      [array[i], array[jMin]] = [array[jMin], array[i]];
    }
  }
  return array;
};

export default selectionSort;
