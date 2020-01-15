/**
 * Highlights and changes height of bar corresponding to array element being changed.
 * @param {int} index - index in array of element being changed
 * @param {int} value - new value of array element
 * @param {int} speed - speed (delay) of operation in ms
 */
export function highlightBar(index, value, speed){
    return new Promise((resolve) => {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-element');
        const barStyle = arrayBars[index].style
        barStyle.backgroundColor = 'red';
        barStyle.height = `${value}%`;
        resolve()
      }, speed)
    })
}

/**
 * Resets bar color to black.
 * @param {int} index - index in array of element being changed
 * @param {int} speed - speed (delay) of operation in ms
 */
export function resetBarColor(index, speed){
    return new Promise((resolve) => {
        setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-element');
        const barStyle = arrayBars[index].style
        barStyle.backgroundColor = 'black';
        resolve()
    }, speed)
    })
}

/**
 * Changes class of HTML elements to sorted type which starts 2 sec color change animation.
 */
export function animationScaledTimeout(){
    return new Promise((resolve) => {
        let elements = document.getElementsByClassName("array-element")
            for (var i = elements.length - 1; i >= 0; --i) {
                elements[i].className = "array-element array-element-sorted"
            }
        setTimeout(() => {
        resolve()
        }, 2000)
    })
}


/**
 * Highlights and resets two elements that are being swapped during sorting.
 * @param {array} array - current array during sorting
 * @param {int} i - first index being swapped
 * @param {int} j - second index being swapped
 * @param {int} sortingSpeed - speed (delay) of operation in ms
 */
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

/**
 * Swaps two elements in array
 * @param {array} array - current element being sorted
 * @param {int} i  - first element being swapped
 * @param {int} j - second element being swapped
 */
export function swap(array, i, j){
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp
}

 /**
  * Resets existing elements to original class name.
  * render does not change class of visible elements back to array-element.
  */
export function resetExistingElements(){
    let elements = document.getElementsByClassName("array-element array-element-sorted")
      for (var i = elements.length - 1; i >= 0; --i) {
        elements[i].className = "array-element"
      }
}

/**
 * Changes buttons to active with 'Y' or inactive with 'N'.
 * @param {str} yesOrNo 
 */
export function areButtonsActive(yesOrNo){
    let bool_ = false
    if (yesOrNo === 'N'){
        bool_ = true
        document.getElementById("sliderLabel").style.color = "grey"
    }
    else{
      document.getElementById("sliderLabel").style.color = "black"
    }
    let buttons = document.getElementsByTagName("button");
        for (var i = 0; i <= buttons.length - 1; ++i) {
            buttons[i].disabled = bool_
            buttons[i].style.backgroundColor = 'rgb(0, 255, 157)'
          }
    document.getElementById("arrayLengthSlider").disabled = bool_
}

/**
 * Calculates sorting speed (delay) by dividing current array length from slider.
 * Speed inversely proportional to length in ms.
 */
export function getSortingSpeed(){
    return 100/document.getElementById("arrayLengthSlider").value
}