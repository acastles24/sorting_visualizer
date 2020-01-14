import {swap, animationScaledTimeout, highlightSwappedElements} from './utilities'


export class bubbleSort{
    constructor(sortingSpeed){
      this.sortingSpeed = sortingSpeed
    }

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