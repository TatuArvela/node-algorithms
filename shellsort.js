const gaps = [701, 301, 132, 57, 23, 10, 4, 1]; // Ciura sequence

// Shell sort uses a gap sequence for optimization
// Start with the largest gap and work down to the smallest gap
function shellSort(_array) {
  const array = _array.slice();

  // Do a gapped insertion sort for this gap size
  // The first gap elements are already in gapped order, keep adding
  // One more element until the entire array is gap sorted
  for (let gap of gaps) {
    for (let i = gap; i < array.length; i++) {
      // Add array[i] to the elements that have been gap sorted
      // Save array[i] in temp and make a hole at position i
      const temp = array[i];

      // Shift earlier gap-sorted elements up until the correct location for
      // array[i] is found
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      // Put the original array[i] in its correct location
      array[j] = temp;
    }
  }
  return array;
}

export default shellSort;
