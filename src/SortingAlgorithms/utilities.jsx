export function highlightBar(barStyle, value, speed){
    return new Promise((resolve) => {
      setTimeout(() => {
        barStyle.backgroundColor = 'red';
        barStyle.height = `${value}px`;
        resolve()
      }, speed)
    })
  }

export function resetBarColor(barStyle, speed){
    return new Promise((resolve) => {
        setTimeout(() => {
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


export function swap(array, i, j, sortingSpeed){
    return new Promise(async(resolve) => {
      let arrayBars = document.getElementsByClassName('array-element');
      const temp = array[i];

      const barStyleI = arrayBars[i].style;
      const barStyleJ = arrayBars[j].style;

      await highlightBar(barStyleI, array[j], sortingSpeed)
      await resetBarColor(barStyleI, sortingSpeed)

      await highlightBar(barStyleJ, temp, sortingSpeed)
      await resetBarColor(barStyleJ, sortingSpeed)

      array[i] = array[j];
      array[j] = temp

      resolve()
    })
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
          }
        document.getElementById("arrayLengthSlider").disabled = bool_
}


export function getSortingSpeed(){
    return 100/document.getElementById("arrayLengthSlider").value
}