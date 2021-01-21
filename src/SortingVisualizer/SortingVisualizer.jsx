import React, {Component} from 'react'
import MetaTags from 'react-meta-tags'
import './SortingVisualizer.css'
import {mergeSort} from '../SortingAlgorithms/mergeSort'
import {quickSort} from '../SortingAlgorithms/quickSort'
import {bubbleSort} from '../SortingAlgorithms/bubbleSort'
import {insertionSort} from '../SortingAlgorithms/insertionSort'
import {resetExistingElements, areButtonsActive, getSortingSpeed} from '../SortingAlgorithms/utilities'
import {getRandomInt} from '../SortingVisualizer/utilities'


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
            array.push(getRandomInt(5, 100))
        }
        this.setState({array})
    }
    render(){
        const {array} = this.state;
        const width = ((90 - 0.2 - (array.length*0.2))/(array.length));
        return(
            <div>
                <MetaTags>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </MetaTags>
                <div id = 'arrayContainer' className = 'array-container'>
                    <div className = 'array-wrapper'>
                        {array.map((value, idX) => (
                        <div className = 'array-element'  key = {idX} style = {{width: `${width}%`, height: `${value}%`}}></div>
                        ))}
                    </div>
                </div>
                <div className = 'button-bar'>
                    <div className = 'button-container'>
                        <button id='mergeSortButton' className = 'sorting-button active' onClick={() => {this.mergeSortButton(this.state.array); document.getElementById('mergeSortButton').className = "sorting-button selected"}}>Merge Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='quickSortButton' className='sorting-button active' onClick={() => { this.quickSortButton(this.state.array); document.getElementById('quickSortButton').className = "sorting-button selected"}}>Quick Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='bubbleSortButton' className='sorting-button active' onClick={() => { this.bubbleSortButton(this.state.array); document.getElementById('bubbleSortButton').className = "sorting-button selected"}}>Bubble Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='insertionSortButton' className='sorting-button active' onClick={() => { this.insertionSortButton(this.state.array); document.getElementById('insertionSortButton').className = "sorting-button selected"}}>Insertion Sort</button>
                    </div>
                    <div className = 'button-container'>
                        <button id='randomButton' className = 'sorting-button active' onClick={() => this.resetArray(this.state.array.length)}>Generate Random Array</button>
                    </div>
                    <div className = 'button-container'>
                        <div id = 'sliderLabel' className = 'slider-label'>Array Size</div>
                        <input className = 'slider slider-active' type = "range" name = "length" id = "arrayLengthSlider" min = "10" max = "200" step = "5" 
                            defaultValue = {100} onInput = 
                            {() => this.resetArray(document.getElementById("arrayLengthSlider").value)}></input>
                    </div>
                </div>
                <div className = 'bottom-rectangle'></div>
            </div>
            );
    }
}