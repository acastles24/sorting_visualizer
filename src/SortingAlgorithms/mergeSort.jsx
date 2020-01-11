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
  await this.animationScaledTimeout()
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
      await this.highlightBar(barStyle, temp[j])
      await this.resetBarColor(barStyle, temp[j])
    }
    resolve()
  })
}


  highlightBar(barStyle, value){
    return new Promise((resolve) => {
      setTimeout(() => {
        barStyle.backgroundColor = 'red';
        barStyle.height = `${value}px`;
        resolve()
      }, this.sortingSpeed)
    })
  }

  resetBarColor(barStyle){
    return new Promise((resolve) => {
      setTimeout(() => {
        barStyle.backgroundColor = 'black';
        resolve()
      }, this.sortingSpeed)
    })
  }


  animationScaledTimeout(){
    return new Promise((resolve) => {
      let elements = document.getElementsByClassName("array-element")
            for (var i = elements.length - 1; i >= 0; --i) {
              elements[i].className = "array-element array-element-sorted"
            }
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }
}