import 'regenerator-runtime/runtime';
import {mergeSort} from '../SortingAlgorithms/mergeSort'
import {quickSort} from '../SortingAlgorithms/quickSort'
import {bubbleSort} from '../SortingAlgorithms/bubbleSort'
import {insertionSort} from '../SortingAlgorithms/insertionSort'
import * as utilities from '../SortingAlgorithms/utilities'

// it("adds correctly", () => {
//     expect(1+1).toEqual(2);
//  });

describe('mergeSort', () => {
    it('should return sorted array', async () => {
        utilities.highlightBar = jest.fn();
        const mergeSortInit = new mergeSort(1);
        const array = [5,3,2,4,1];
        const arrayCopy = array.slice()
        await mergeSortInit.sortStart([5,3,2,4,1]);
        expect(arrayCopy).toBe([1,2,3,4,5]);
    });
})