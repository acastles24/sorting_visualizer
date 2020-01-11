import {highlightBar, resetBarColor, animationScaledTimeout} from './utilities'


export class quickSort{
  constructor(sortingSpeed){
    this.sortingSpeed = sortingSpeed
  }

  quickSortStart(array){
      let stack = [];
      let start = 0;
      let end = array.length - 1;

      stack.push([start, end]);

      while (stack.length !== 0){
          let currIdx = stack.pop()
          start = currIdx[0];
          end = currIdx[1];

          let pivot = this.partition(array, start, end);
          console.log(pivot)

          if (pivot - 1 > start){
              stack.push([start, pivot - 1]);
          }

          if (pivot + 1 < end){
              stack.push([pivot + 1, end]);
          }
          console.log(array)
      }
  }

  partition(array, start, end){
      const pivot = array[end];
      let pIdx = start;
      for (let i = start; i < end; i++){
          if (array[i] <= pivot){
              this.swap(array, i, pIdx);
              pIdx++;
          }
      }
      this.swap(array, pIdx, end)
      return pIdx
  }

  swap(array, i, j){
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp
  }
}