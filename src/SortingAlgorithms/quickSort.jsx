import {animationScaledTimeout, highlightSwappedElements, swap} from './utilities'


/**
 * Quick sort class.
 */
export class quickSort{
    /**
     * 
     * @param {int} sortingSpeed - sorting speed (delay) in ms
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

  /**
   * Partitions array using pivot method. Returns pivot index
   * @param {array} array - current array being sorted
   * @param {int} start - index of start of partitioned array
   * @param {int} end - end of partition array (used as initial pivot)
   */
  partition(array, start, end){
      return new Promise(async (resolve) => {
        const pivot = array[end];
        let pIdx = start;
        for (let i = start; i < end; i++){
            if (array[i] <= pivot){
                await highlightSwappedElements(array, i, pIdx, this.sortingSpeed)
                swap(array, i, pIdx);
                pIdx++;
            }
        }
        await highlightSwappedElements(array, pIdx, end, this.sortingSpeed)
        swap(array, pIdx, end);
        resolve(pIdx);
      })
  }
}