import React, {Component} from 'react'
import './SortingVisualizer.css'
import {mergeSort} from '../SortingAlgorithms/mergeSort'
import {quickSort} from '../SortingAlgorithms/quickSort'
import {bubbleSort} from '../SortingAlgorithms/bubbleSort'
import {insertionSort} from '../SortingAlgorithms/insertionSort'
import {resetExistingElements, areButtonsActive, getSortingSpeed} from '../SortingAlgorithms/utilities'
import {getRandomInt} from '../SortingVisualizer/utilities'

const BUTTON_SELECT_COLOR = 'rgb(15, 175, 224)'

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

    insertionSortButton(array){
        this.sort(insertionSort, array)
    }

    bubbleSortButton(array){
        this.sort(bubbleSort, array)
    }

    quickSortButton(array){
        this.sort(quickSort, array)
    }

    mergeSortButton(array){
        this.sort(mergeSort, array)
    }
    
    /**
     * Sorts array using chosen method. Creates copy of array to avoid re-rendering.
     * @param {class} method - class of clicked sorting method
     * @param {*} array - current array to be sorted
     */
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

    /**
     * Creates random array of given length and sets state.
     * @param {int} len_ - length of random array
     */
    resetArray(len_){
        resetExistingElements()
        const array = []
        for (let i = 0; i < len_; i ++){
            array.push(getRandomInt(10, 500))
        }
        this.setState({array})
    }
    render(){
        const {array} = this.state;
        const width = ((1200 - 2 - (array.length*2))/(array.length));
        return(
            <div>
                <div className = 'array-container'>
                    {array.map((value, idX) => (
                    <div className = 'array-element'  key = {idX} style = {{backgroundColor: 'black', width: `${width}px`, height: `${value}px`}}>
                    </div>
                    ))}
                </div>
                <div className = 'button-bar'>
                    <div className = 'button-container'>
                        <button id='mergeSortButton' className = 'sorting-button' onClick={() => {this.mergeSortButton(this.state.array); document.getElementById('mergeSortButton').style.backgroundColor = BUTTON_SELECT_COLOR}}>Merge Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='quickSortButton' className = 'sorting-button' onClick={() => {this.quickSortButton(this.state.array); document.getElementById('quickSortButton').style.backgroundColor = BUTTON_SELECT_COLOR}}>Quick Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='bubbleSortButton' className = 'sorting-button' onClick={() => {this.bubbleSortButton(this.state.array); document.getElementById('bubbleSortButton').style.backgroundColor = BUTTON_SELECT_COLOR}}>Bubble Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='insertionSortButton' className = 'sorting-button' onClick={() => {this.insertionSortButton(this.state.array); document.getElementById('insertionSortButton').style.backgroundColor = BUTTON_SELECT_COLOR}}>Insertion Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='randomButton' className = 'sorting-button' onClick={() => this.resetArray(this.state.array.length)}>Generate Random Array</button>
                    </div>
                    <div className = 'button-container'>
                        <div style = {{position: 'relative',  fontSize: '14px'}}>Array Size</div>
                        <input className = 'slider' type = "range" name = "length" id = "arrayLengthSlider" min = "10" max = "200" step = "5" 
                            defaultValue = {100} onInput = 
                            {() => this.resetArray(document.getElementById("arrayLengthSlider").value)}></input>
                    </div>
                </div>
                <div className = 'bottom-rectangle'></div>
            </div>
            );
    }
}