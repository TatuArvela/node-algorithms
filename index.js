import shellsort from "./shellsort.js";
import mergeSort from "./mergeSort.js";
import insertionSort from "./insertionSort.js";
import countingSort from "./countingSort.js";
import selectionSort from "./selectionSort.js";
import bubbleSort from "./bubbleSort.js";
import quicksort from "./quicksort.js";

const inputData = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000)
);
const numberComparison = function(a, b) {
  return a - b;
};
const expectedData = Array.from(inputData).sort(numberComparison);

const useSortingAlgorithm = id => {
  switch (id) {
    case 0: // Timsort
      return (array) => array.sort(numberComparison);
    case 1: // Merge sort
      return mergeSort;
    case 2: // Insertion sort
      return insertionSort;
    case 3: // Counting sort
      return countingSort;
    case 4: // Shellsort
      return shellsort;
    case 5: // Selection sort
      return selectionSort;
    case 6: // Bubble sort
      return bubbleSort;
    case 7: // Quicksort
      return quicksort;
  }
};

function main() {
  console.log(`

// SORT ------------------------------------------------------------------------
`);
  console.time("Execution time");
  const sortedData = useSortingAlgorithm(4)(inputData);
  console.timeEnd("Execution time");
  console.log(
    sortedData.join("") === expectedData.join("")
      ? "PASS: Sorting algorithm sorted input data correctly"
      : "FAIL: Sorting algorithm did not sort input data correctly"
  );
}

main();
