import {highlightBar, resetBarColor, animationScaledTimeout} from './utilities'

/**
 * Merge sort class.
 */
export class mergeSort{
  /**
   * 
   * @param {int} sortingSpeed - sorting speed (delay) in ms.
   */
  constructor(sortingSpeed){
    this.sortingSpeed = sortingSpeed
  }

  /**
   * Main method for sort class.
   * @param {array} array - array to sort
   */
  sortStart(array){  
    return new Promise(async (resolve) => {
    let step = 1;
    while (step < array.length) {
      let left = 0;
      while (left + step < array.length) {
        await this.merge(array, left, step);
        left += step * 2;
      }
      step *= 2;
  }
  await animationScaledTimeout()
  resolve()
  })
}

/**
 * Merges (sorts) portion of array using left bound and step amount for right bound.
 * @param {*} array 
 * @param {*} left 
 * @param {*} step 
 */
merge(array, left, step) {
  return new Promise(async (resolve) => {
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
      await highlightBar(j, temp[j], this.sortingSpeed)
      await resetBarColor(j, this.sortingSpeed)
    }
    resolve()
  })
}
}