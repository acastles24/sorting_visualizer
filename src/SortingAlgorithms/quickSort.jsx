import {highlightBar, resetBarColor, animationScaledTimeout} from './utilities'


export class quickSort{
  constructor(sortingSpeed){
    this.sortingSpeed = sortingSpeed
  }

  quickSortStart(array){
      return new Promise(async (resolve) => {
      let stack = [];
      let start = 0;
      let end = array.length - 1;

      stack.push([start, end]);

      while (stack.length !== 0){
          let currIdx = stack.pop()
          start = currIdx[0];
          end = currIdx[1];

          let pivot = await this.partition(array, start, end);

          if (pivot - 1 > start){
              stack.push([start, pivot - 1]);
          }

          if (pivot + 1 < end){
              stack.push([pivot + 1, end]);
          }
      }

      await animationScaledTimeout()
      resolve();
      })
  }

  partition(array, start, end){
      return new Promise(async (resolve) => {
        const pivot = array[end];
        let pIdx = start;
        for (let i = start; i < end; i++){
            if (array[i] <= pivot){
                await this.swap(array, i, pIdx);
                pIdx++;
            }
        }
        await this.swap(array, pIdx, end);
        resolve(pIdx);
      })
  }

  swap(array, i, j){
      return new Promise(async(resolve) => {
        let arrayBars = document.getElementsByClassName('array-element');
        const temp = array[i];

        const barStyleI = arrayBars[i].style;
        const barStyleJ = arrayBars[j].style;

        await highlightBar(barStyleI, array[j], this.sortingSpeed)
        await resetBarColor(barStyleI, this.sortingSpeed)

        await highlightBar(barStyleJ, temp, this.sortingSpeed)
        await resetBarColor(barStyleJ, this.sortingSpeed)

        array[i] = array[j];
        array[j] = temp

        resolve()
      })
  }
}