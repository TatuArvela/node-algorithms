# node-algorithms

Studying search and sort algorithms in Node.js

## Search algorithms

### Linear search

Checks each element of the list one by one until a match is found or the end of the list is reached.

| Worst: O(n) | Usual: O(n) | Best: O(1) |
| ----------- | ----------- | ---------- |

### Binary search

Requires sorted data. Finds the middle element and checks it for a match. If a match is not found, the search is repeated on the half of the data in which the value could be in.

```text
Searching for 7

Array
[0][1][2][3][4][5][6][7][8][9]
Length = 10

Low = 0
High = Length - 1 = 9

Middle
= floor((Low + High) ÷ 2)
= floor(4.5)
= 4

       Middle ↓
[0][1][2][3] [4] [5][6][7][8][9]
    Left              Right

Middle < 7
Discard left and middle, reiterate on right
[0][1][2][3][4] → X, [5][6][7][8][9]

Array
[5][6][7][8][9]

Middle ↓
[5][6][7][8][9]

Middle equals 7
```

| Worst: O(log n) | Usual: O(log n) | Best: O(1) |
| --------------- | --------------- | ---------- |

## Sorting algorithms

| Algorithm              | Worst        | Usual        | Best         | Space complexity | Stable    |
| ---------------------- | ------------ | ------------ | ------------ | ---------------- | --------- |
| Bubble sort            | O(n^2)       | O(n^2)       | O(n)         | O(1)             | Yes       |
| Counting sort          | O(n+k)       | O(n+k)       | O(n+k)       | O(n+k)           | Yes       |
| Insertion sort         | O(n^2)       | O(n^2)       | O(n)         | O(n)             | Yes       |
| Merge sort             | O(n log n)   | O(n log n)   | O(n log n)   | O(n)             | Yes       |
| Quicksort              | O(n^2)       | O(n log n)   | O(n log n)   | O(n)             | No        |
| Selection sort         | O(n^2)       | O(n^2)       | O(n^2)       | O(1)             | Sometimes |
| Shellsort (Ciura gaps) | O(n log^2 n) | O(n log^2 n) | O(n log^2 n) | O(n)             | No        |
| Timsort                | O(n log n)   | O(n log n)   | O(n)         | O(n)             | Yes       |
