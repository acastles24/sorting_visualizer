export function mergeSort(array) {
  let step = 1;
  let sortIdx = 1;
  while (step < array.length) {
    let left = 0;
    while (left + step < array.length) {
      sortIdx = merge(array, left, step, sortIdx);
      left += step * 2;
    }
    step *= 2;
  }
  animationScaledTimeout(sortIdx)
  return array
}

function merge(array, left, step, sortIdx) {
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
    const arrayBars = document.getElementsByClassName('array-element');
    const barStyle = arrayBars[j].style;
    doScaledTimeoutDuringSorting(barStyle, temp[j], sortIdx)
    sortIdx += 2
    array[j] = temp[j];
  }
  return sortIdx
}    

function doScaledTimeoutDuringSorting(barStyle, value, i){
    setTimeout(() => {
      barStyle.backgroundColor = 'red';
      barStyle.height = `${value}px`
    }, i * 10)

    setTimeout(() => {
      barStyle.backgroundColor = 'black';
    }, (i + 1) * 10)
}

function animationScaledTimeout(i){
  setTimeout(() => {
    let elements = document.getElementsByClassName('array-element')
    for(var i = elements.length - 1; i >= 0; --i){
      elements[i].className = "array-element array-element-sorted"
    }
  }, i * 10)
}