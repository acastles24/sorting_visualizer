export function mergeSort(array) {
  let step = 1;
  while (step < array.length) {
    let left = 0;
    while (left + step < array.length) {
      merge(array, left, step);
      left += step * 2;
    }
    step *= 2;
  }
  return array
}

function merge(array, left, step) {
  let right = left + step;
  let end = Math.min(left + step * 2 - 1, array.length - 1);
  let leftMoving = left;
  let rightMoving = right;
  let temp = [];

  for (let i = left; i <= end; i++) {
    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
        leftMoving < right) {
      temp[i] = array[leftMoving];
      leftMoving++;
    } else {
      temp[i] = array[rightMoving];
      rightMoving++;
    }
  }

  for (let j = left; j <= end; j++) {
    array[j] = temp[j];
  }
}    