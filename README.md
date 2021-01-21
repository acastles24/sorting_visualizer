# [Sorting Algorithm Visualizer](https://acastles24.github.io/sorting_visualizer/ "Link to Visualizer")
*An interactive web application in React to visualize execution of popular sorting algorithms.* [Live link to visualizer.](https://acastles24.github.io/sorting_visualizer/ "Link to Visualizer")

<img src="/images/main_operation_gif.gif" width="800">

Current supported algorithms:
 - Merge Sort - divide array into subarrays, sort, then merge back into whole array.
 - Quick Sort - rearrange elements around selected pivot element, repeat for smaller subarrays.
 - Bubble Sort - compare adjacent elements and swap them if necessary.
 - Insertion Sort - insert each element in correct order within whole array.

## Technologies
* JavaScript
* React
* HTML/CSS

## Code

### Array Sorting with Asynchronous Functions
When a sorting button is clicked a copy of the React component state array is created to avoid immediate re-rendering. The sorting speed is calculated based on array size for a consistent visual experience. The sortStart function of the sorting method object is then called. Once the sorting is completed the state array is updated. The buttons are also deactivated during sorting.

```javascript
async sort(sortingMethod, array){
        resetExistingElements()
        areButtonsActive('N')
    
        let arrayCopy = array.slice()
        const sortingSpeed = getSortingSpeed()
        
        let sortMethodInit = new sortingMethod(sortingSpeed)
        await sortMethodInit.sortStart(arrayCopy)
        this.setState({array: arrayCopy})
        areButtonsActive('Y')
    }
```

### Object-oriented Sorting Functions
Sorting functions are created as classes, as shown below by merge sort, so the sorting operation above can be adaptable to future functions.

```javascript
export class mergeSort{
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
    let step = 1;
    while (step < array.length) {
      let left = 0;
      while (left + step < array.length) {
        await this.merge(array, left, step);
        left += step * 2;
      }
      step *= 2;
  }
  await animationScaledTimeout()
  resolve()
  })
}

/**
 * Merges (sorts) portion of array using left bound and step amount for right bound.
 * @param {*} array 
 * @param {*} left 
 * @param {*} step 
 */
merge(array, left, step) {
  return new Promise(async (resolve) => {
    let right = left + step;
    let end = Math.min(left + step * 2 - 1, array.length - 1);
    let leftMoving = left;
    let rightMoving = right;
    let temp = [];

    for (let i = left; i <= end; i++) {
      if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
          leftMoving < right) {
        temp[i] = array[leftMoving];
        leftMoving++;
      } else {
        temp[i] = array[rightMoving];
        rightMoving++;
      }
    }
    for (let j = left; j <= end; j++) {
      array[j] = temp[j];
      await highlightBar(j, temp[j], this.sortingSpeed)
      await resetBarColor(j, this.sortingSpeed)
    }
    resolve()
  })
 }
}
```

### Array Bar Highlighting
During sorting the individual array bars under operation are highlighted via JavaScript promise for a more acute visual of the sorting process.

```javascript
export function highlightSwappedElements(array, i, j, sortingSpeed){
  return new Promise(async(resolve) => {
  const temp = array[i];
  
  await highlightBar(i, array[j], sortingSpeed)
  await resetBarColor(i, sortingSpeed)

  await highlightBar(j, temp, sortingSpeed)
  await resetBarColor(j, sortingSpeed)

  resolve()
 })
}
```
