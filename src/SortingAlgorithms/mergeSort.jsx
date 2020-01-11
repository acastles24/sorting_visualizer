import {highlightBar, resetBarColor, animationScaledTimeout} from './utilities'


export class mergeSort{
  constructor(sortingSpeed){
    this.sortingSpeed = sortingSpeed
  }

  mergeSortStart(array){  
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
  resolve(array)
  })
}

merge(array, left, step) {
  return new Promise(async (resolve) => {
    let arrayBars = document.getElementsByClassName('array-element');
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
      const barStyle = arrayBars[j].style;
      array[j] = temp[j];
      await highlightBar(barStyle, temp[j], this.sortingSpeed)
      await resetBarColor(barStyle, this.sortingSpeed)
    }
    resolve()
  })
}
}