const arr = [1, 2, 3, [4, [5], 6], 7, 8, [9, 10, [11, [12, 13], 14], 15]];
console.log(arr.flat(3));

function customFlat(arr, depth = 1) {
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth != 0) {
      customFlat(ar, depth - 1);
    } else {
      result.push(ar);
    }
  });
  return result;
}
const result = [];
console.log(customFlat(arr, 3));
