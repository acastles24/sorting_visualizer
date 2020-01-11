import React, {Component} from 'react'
import './SortingVisualizer.css'
import {mergeSort} from '../SortingAlgorithms/mergeSort'
import {quickSort} from '../SortingAlgorithms/quickSort'
import {bubbleSort} from '../SortingAlgorithms/bubbleSort'
import {insertionSort} from '../SortingAlgorithms/insertionSort'


export default class SortingVisualizer extends Component{
    constructor(){
        super();
        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray(100)
    }

    async insertionSortButton(array){
        this.resetExistingElements()
        this.areButtonsActive('N')

        let arrayCopy = array.slice()
        const sortingSpeed = this.getSortingSpeed()
        
        let insertionSortInit = new insertionSort(sortingSpeed)
        await insertionSortInit.insertionSortStart(arrayCopy)
        this.setState({array: arrayCopy})
        this.areButtonsActive('Y')
    }

    async bubbleSortButton(array){
        this.resetExistingElements()
        this.areButtonsActive('N')

        let arrayCopy = array.slice()
        const sortingSpeed = this.getSortingSpeed()

        let bubbleSortInit = new bubbleSort(sortingSpeed)
        await bubbleSortInit.bubbleSortStart(arrayCopy)
        this.setState({array: arrayCopy})
        this.areButtonsActive('Y')
    }

    async quickSortButton(array){
        this.resetExistingElements()
        this.areButtonsActive('N')

        let arrayCopy = array.slice()
        const sortingSpeed = this.getSortingSpeed()

        let quickSortInit = new quickSort(sortingSpeed)
        await quickSortInit.quickSortStart(arrayCopy)
        this.setState({array: arrayCopy})
        this.areButtonsActive('Y')
    }

    async mergeSortButton(array){
        this.resetExistingElements()
        this.areButtonsActive('N')

        let arrayCopy = array.slice()
        const sortingSpeed = this.getSortingSpeed()

        let mergeSortInit = new mergeSort(sortingSpeed)
        await mergeSortInit.mergeSortStart(arrayCopy)
        this.setState({array: arrayCopy})
        this.areButtonsActive('Y')
    }

    resetArray(len_){
        this.resetExistingElements()
        const array = []
        for (let i = 0; i < len_; i ++){
            array.push(this.getRandomInt(10, 500))
        }
        this.setState({array})
    }

    areButtonsActive(yesOrNo){
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

    getSortingSpeed(){
        return 100/document.getElementById("arrayLengthSlider").value
    }

    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render(){
        const {array} = this.state;
        const width = ((1200 - 2 - (array.length*2))/(array.length));
        const class_ = 'array-element';
        return(
            <div>
                <div className = 'array-container'>
                    {array.map((value, idX) => (
                    <div className = {class_}  key = {idX} style = {{backgroundColor: 'black', width: `${width}px`, height: `${value}px`}}>
                    </div>
                    ))}
                </div>
                <button onClick={() => this.resetArray(this.state.array.length)}>Generate Random Array</button>
                <button onClick={() => this.mergeSortButton(this.state.array)}>Merge Sort</button>
                <button onClick={() => this.quickSortButton(this.state.array)}>Quick Sort</button>
                <button onClick={() => this.bubbleSortButton(this.state.array)}>Bubble Sort</button>
                <button onClick={() => this.insertionSortButton(this.state.array)}>Insertion Sort</button>
                <input type = "range" name = "length" id = "arrayLengthSlider" min = "10" max = "200" step = "5" 
                defaultValue = {100} onInput = 
                {() => this.resetArray(document.getElementById("arrayLengthSlider").value)}></input>
            </div>
            );
    }
    
    // render does not change class of visible elements back to array-element.
    resetExistingElements(){
        let elements = document.getElementsByClassName("array-element array-element-sorted")
          for (var i = elements.length - 1; i >= 0; --i) {
            elements[i].className = "array-element"
          }
    }

}