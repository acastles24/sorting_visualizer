import 'regenerator-runtime/runtime';
import {mergeSort} from '../SortingAlgorithms/mergeSort'
import {quickSort} from '../SortingAlgorithms/quickSort'
import {bubbleSort} from '../SortingAlgorithms/bubbleSort'
import {insertionSort} from '../SortingAlgorithms/insertionSort'
import {getRandomInt} from '../SortingVisualizer/utilities'
import * as utilities from '../SortingAlgorithms/utilities'


describe('mergeSort', () => {
    it('should return sorted array', async() => {
        utilities.highlightBar = jest.fn();
        utilities.resetBarColor = jest.fn();
        utilities.animationScaledTimeout = jest.fn();
        const mergeSortInit = new mergeSort(1);

        for (let j = 1; j < 100; j++){
            let array = []
            for (let i = 0; i < j; i ++){
                array.push(getRandomInt(10, 500))
            }
            let arrayToBeSorted = array.slice()
            array.sort(function(a, b){return(a-b)});
            await mergeSortInit.sortStart(arrayToBeSorted);
            expect(array).toStrictEqual(arrayToBeSorted);
        }
    });
})


describe('quickSort', () => {
    it('should return sorted array', async() => {
        utilities.highlightSwappedElements = jest.fn();
        utilities.animationScaledTimeout = jest.fn();
        const quickSortInit = new quickSort(1);

        for (let j = 1; j < 100; j++){
            let array = []
            for (let i = 0; i < j; i ++){
                array.push(getRandomInt(10, 500))
            }
            let arrayToBeSorted = array.slice()
            array.sort(function(a, b){return(a-b)});
            await quickSortInit.sortStart(arrayToBeSorted);
            expect(array).toStrictEqual(arrayToBeSorted);
        }
    });
})

describe('bubbleSort', () => {
    it('should return sorted array', async() => {
        utilities.highlightSwappedElements = jest.fn();
        utilities.animationScaledTimeout = jest.fn();
        const bubbleSortInit = new bubbleSort(1);

        for (let j = 1; j < 100; j++){
            let array = []
            for (let i = 0; i < j; i ++){
                array.push(getRandomInt(10, 500))
            }
            let arrayToBeSorted = array.slice()
            array.sort(function(a, b){return(a-b)});
            await bubbleSortInit.sortStart(arrayToBeSorted);
            expect(array).toStrictEqual(arrayToBeSorted);
        }
    });
})


describe('insertionSort', () => {
    it('should return sorted array', async() => {
        utilities.highlightBar = jest.fn();
        utilities.resetBarColor = jest.fn();
        utilities.animationScaledTimeout = jest.fn();
        const insertionSortInit = new insertionSort(1);

        for (let j = 1; j < 100; j++){
            let array = []
            for (let i = 0; i < j; i ++){
                array.push(getRandomInt(10, 500))
            }
            let arrayToBeSorted = array.slice()
            array.sort(function(a, b){return(a-b)});
            await insertionSortInit.sortStart(arrayToBeSorted);
            expect(array).toStrictEqual(arrayToBeSorted);
        }
    });
})