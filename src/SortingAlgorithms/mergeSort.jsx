export function mergeSort(array) {
    var step = 1;
    while (step < array.length) {
      var left = 0;
      while (left + step < array.length) {
        merge(array, left, step);
        left += step * 2;
      }
      step *= 2;
    }
    return array;
  }
  function merge(array, left, step) {
    var right = left + step;
    var end = Math.min(left + step * 2 - 1, array.length - 1);
    var leftMoving = left;
    var rightMoving = right;
    var temp = [];
  
    for (var i = left; i <= end; i++) {
      if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
          leftMoving < right) {
        temp[i] = array[leftMoving];
        leftMoving++;
      } else {
        temp[i] = array[rightMoving];
        rightMoving++;
      }
    }
  
    for (var j = left; j <= end; j++) {
      array[j] = temp[j];
    }
  }


// export function mergeSort(array){
//     if (array.length === 1){
//         return array
//     }
//     let low = 0;
//     let high = array.length - 1;

//     for (let m = 1; m <= high - low; m = 2*m){
//         for (let i = low; i < high; i += 2*m){
//             let from = i;
//             let mid = i + m - 1;
//             let to = Math.min(i + 2 * m - 1, high)
//             merge(array, from, mid, to);
//         }
//     }
        
//     return array
// }


// function merge(array, left, mid, right){
//     let n1 = mid - left + 1
//     let n2 = right - mid
//     let leftArray = Array(n1).fill(0)
//     let rightArray = Array(n2).fill(0)
//     for (let i = 0; i < n1; i++){
//         leftArray[i] = array[left + i]
//     }

//     for (let i = 0; i < n2; i++){
//         rightArray[i] = array[mid + i + 1]
//     }

//     let i = 0
//     let j = 0
//     let k = left

//     while (i < n1 && j < n2){
//         if (leftArray[i] > rightArray[j]){
//             array[k] = rightArray[j]
//             j += 1
//         }
//         else{
//             array[k] = leftArray[i]
//             i += 1
//         }
//     }

//     while (i < n1){
//         array[k] = leftArray[i]
//         i += 1
//         k += 1
//     }

//     while (j < n2){
//         array[k] = rightArray[j]
//         j += 1
//         k += 1
//     }

// }