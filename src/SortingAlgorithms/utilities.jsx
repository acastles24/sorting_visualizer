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