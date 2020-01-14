export function highlightBar(index, value, speed){
    return new Promise((resolve) => {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-element');
        const barStyle = arrayBars[index].style
        barStyle.backgroundColor = 'red';
        barStyle.height = `${value}px`;
        resolve()
      }, speed)
    })
}

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


export function swap(array, i, j){
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp
}

 // render does not change class of visible elements back to array-element.
export function resetExistingElements(){
    let elements = document.getElementsByClassName("array-element array-element-sorted")
      for (var i = elements.length - 1; i >= 0; --i) {
        elements[i].className = "array-element"
      }
}

export function areButtonsActive(yesOrNo){
    let bool_ = false
    if (yesOrNo === 'N'){
        bool_ = true
    }
    let buttons = document.getElementsByTagName("button");
        for (var i = 0; i <= buttons.length - 1; ++i) {
            buttons[i].disabled = bool_
            buttons[i].style.backgroundColor = 'rgb(0, 255, 157)'
          }
        document.getElementById("arrayLengthSlider").disabled = bool_
}


export function getSortingSpeed(){
    return 100/document.getElementById("arrayLengthSlider").value
}