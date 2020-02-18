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
[0,1,2,3,4,5,6,7,8,9]
Length = 10

Low = 0
High = Length - 1 = 9

Middle (index)
= floor((Low + High) ÷ 2)
= floor(4.5)
= 4

    Middle ↓
[0,1,2,3] [4] [5,6,7,8,9]
   Left          Right

Middle < 7
Discard left and middle, reiterate on right
[0,1,2,3,4] → X, [5,6,7,8,9]

Array
[5,6,7,8,9]

     ↓ Middle
[5,6,7,8,9]

Middle equals 7
Search is done, 7 was found
```

| Worst: O(log n) | Usual: O(log n) | Best: O(1) |
| --------------- | --------------- | ---------- |

## Sorting algorithms

In Node.js, the default sorting algorithm (Array.sort()) is Timsort

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

### Merge sort

```text
Array
[2,1,3,7,8,9,6,0,4,5]
Length = 10

Middle (index)
= floor((Length) ÷ 2)
= floor(5)
= 5

  Middle ↓
[2,1,3,7,8] [9,6,0,4,5]
   Left        Right

---

Recurse until chunks are 1 item long, then merge and sort them
          [2,1,3,7,8,9,6,0,4,5]
    [2,1,3,7,8]         [9,6,0,4,5]
  [2,1,3]    [7,8]    [9,6,0]    [4,5]
 [2,1]  [3] [7] [8]  [9,6]  [0] [4] [5]
[2] [1] [3] [7] [8] [9] [6] [0] [4] [5]
 [1,2]  [3] [7] [8]  [6,9]  [0] [4] [5]
  [1,2,3]    [7,8]    [0,6,9]    [4,5]
    [1,2,3,7,8]         [0,4,5,6,9]
          [1,2,3,4,5,6,7,8,9]

---
Left = [6,9]
Right = [0]

Result = [],
Left index = 0,
Right index = 0;

 ↓      ↓
[6,9]  [0]
[]
Left > 0
Push right to result
Right index ++

 ↓       ↓
[6,9]  [0]
[0]
Right index === Right length
Push left to result
Left index ++

   ↓     ↓
[6,9]  [0]
[0,6]
Right index === Right length
Push left to result
Left index ++

    ↓    ↓
[6,9]  [0]
[0,6,9]
Right index === Right length
Left index === Left length
Return result
```
