import {animationScaledTimeout, highlightBar, resetBarColor} from './utilities'


export class insertionSort{
    constructor(sortingSpeed){
      this.sortingSpeed = sortingSpeed
    }

    sortStart(array){
        return new Promise(async (resolve) => {
            for (let i = 0; i < array.length; i++){
                let temp = array[i];
                let j = i - 1;
                while (j >= 0 && array[j] > temp){
                    await highlightBar(j+1, array[j], this.sortingSpeed)
                    await resetBarColor(j+1, this.sortingSpeed)
                    array[j + 1] = array[j];
                    j--;
                }
                await highlightBar(j+1, temp, this.sortingSpeed)
                await resetBarColor(j+1, this.sortingSpeed)
                array[j + 1] = temp;
            }
            await animationScaledTimeout()
            resolve()
        })
    }
}