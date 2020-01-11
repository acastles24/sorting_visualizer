import {animationScaledTimeout} from './utilities'


export class insertionSort{
    constructor(sortingSpeed){
      this.sortingSpeed = sortingSpeed
    }

    insertionSortStart(array){
        return new Promise(async (resolve) => {
            for (let i = 0; i < array.length; i++){
                let temp = array[i];
                let j = i - 1;
                while (j >= 0 && array[j] > temp){
                    array[j + 1] = array[j];
                    j--;
                }
                array[j + 1] = temp;
            }
            await animationScaledTimeout()
            resolve()
        })
    }
}