export class mergeSort {
  constructor(array){
  this.arrayBars = document.getElementsByClassName('array-element');
  this.sortIdx = 1
  }
  mergeSortStart(array){
    let step = 1;
    while (step < array.length) {
      let left = 0;
      while (left + step < array.length) {
        this.merge(array, left, step);
        left += step * 2;
      }
      step *= 2;
  }
  this.animationScaledTimeout()
  return array
  }

  merge(array, left, step) {
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
      const barStyle = this.arrayBars[j].style;
      this.doScaledTimeoutDuringSorting(barStyle, temp[j], this.sortIdx)
      this.sortIdx += 2
      array[j] = temp[j];
    }
  }    

  doScaledTimeoutDuringSorting(barStyle, value){
      setTimeout(() => {
        barStyle.backgroundColor = 'red';
        barStyle.height = `${value}px`
      }, this.sortIdx * 10)

      setTimeout(() => {
        barStyle.backgroundColor = 'black';
      }, (this.sortIdx + 1) * 10)
  }

  animationScaledTimeout(){
    setTimeout(() => {
      let elements = document.getElementsByClassName('array-element')
      for(let i = elements.length - 1; i >= 0; --i){
        elements[i].className = "array-element array-element-sorted"
      }
    }, this.sortIdx * 10)
  }
}