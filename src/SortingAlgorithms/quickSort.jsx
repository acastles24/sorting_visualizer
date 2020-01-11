import {animationScaledTimeout, swap} from './utilities'


export class quickSort{
  constructor(sortingSpeed){
    this.sortingSpeed = sortingSpeed
  }

  sortStart(array){
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
                await swap(array, i, pIdx, this.sortingSpeed);
                pIdx++;
            }
        }
        await swap(array, pIdx, end, this.sortingSpeed);
        resolve(pIdx);
      })
  }
}