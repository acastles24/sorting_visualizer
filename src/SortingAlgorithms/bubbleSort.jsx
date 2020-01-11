import {swap, animationScaledTimeout} from './utilities'


export class bubbleSort{
    constructor(sortingSpeed){
      this.sortingSpeed = sortingSpeed
    }

    bubbleSortStart(array){
        return new Promise(async (resolve) => {
            let swapped = true;
            while (swapped){
                swapped = false;
                for(let i = 0; i < array.length; i++){
                    if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
                        await swap(array, i, i + 1, this.sortingSpeed);
                        swapped = true
                    }
                }
            }
            await animationScaledTimeout()
            resolve()
        })
    }
}