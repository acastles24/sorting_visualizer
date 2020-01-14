import {swap, animationScaledTimeout, highlightSwappedElements} from './utilities'

/**
 * Bubble sort class.
 */
export class bubbleSort{
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
            let swapped = true;
            while (swapped){
                swapped = false;
                for(let i = 0; i < array.length; i++){
                    if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
                        await highlightSwappedElements(array, i, i+1, this.sortingSpeed)
                        swap(array, i, i + 1);
                        swapped = true
                    }
                }
            }
            await animationScaledTimeout()
            resolve()
        })
    }
}