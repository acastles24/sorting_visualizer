import {animationScaledTimeout, highlightBar, resetBarColor} from './utilities'


export class insertionSort{
    constructor(sortingSpeed){
      this.sortingSpeed = sortingSpeed
    }

    insertionSortStart(array){
        return new Promise(async (resolve) => {
            let arrayBars = document.getElementsByClassName('array-element');
            let barStyle;
            for (let i = 0; i < array.length; i++){
                let temp = array[i];
                let j = i - 1;
                while (j >= 0 && array[j] > temp){
                    barStyle = arrayBars[j + 1].style;
                    await highlightBar(barStyle, array[j], this.sortingSpeed)
                    await resetBarColor(barStyle, this.sortingSpeed)
                    array[j + 1] = array[j];
                    j--;
                }
                barStyle = arrayBars[j + 1].style;
                await highlightBar(barStyle, temp, this.sortingSpeed)
                await resetBarColor(barStyle, this.sortingSpeed)
                array[j + 1] = temp;
            }
            await animationScaledTimeout()
            resolve()
        })
    }
}