// forEach version
function countingSort1(array) {
  const counts = [];

  array.forEach((value, _index) => {
    counts[value] = (counts[value] || 0) + 1;
  });

  const output = [];
  counts.forEach((count, index) => {
    for (let i = 0; i < count; i++) output.push(index);
  });

  return output;
}

// Functional version
const countingSort2 = array =>
  array
    .reduce(
      (counts, value) => ((counts[value] = (counts[value] || 0) + 1), counts),
      []
    )
    .reduce(
      (result, count, number) => result.concat(Array(count).fill(number)),
      []
    );

export default countingSort2;
