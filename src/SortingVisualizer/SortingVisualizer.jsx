import React, {Component} from 'react'
import './SortingVisualizer.css'
import {mergeSort} from '../SortingAlgorithms/mergeSort'
import {quickSort} from '../SortingAlgorithms/quickSort'
import {bubbleSort} from '../SortingAlgorithms/bubbleSort'
import {insertionSort} from '../SortingAlgorithms/insertionSort'
import {resetExistingElements, areButtonsActive, getSortingSpeed} from '../SortingAlgorithms/utilities'


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

    async sort(method, array){
        resetExistingElements()
        areButtonsActive('N')
    
        let arrayCopy = array.slice()
        const sortingSpeed = getSortingSpeed()
        
        let sortMethodInit = new method(sortingSpeed)
        await sortMethodInit.sortStart(arrayCopy)
        this.setState({array: arrayCopy})
        areButtonsActive('Y')
    }

    resetArray(len_){
        resetExistingElements()
        const array = []
        for (let i = 0; i < len_; i ++){
            array.push(this.getRandomInt(10, 500))
        }
        this.setState({array})
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
        return(
            <div>
                <div className = 'array-container'>
                    {array.map((value, idX) => (
                    <div className = 'array-element'  key = {idX} style = {{backgroundColor: 'black', width: `${width}px`, height: `${value}px`}}>
                    </div>
                    ))}
                </div>
                <div className = 'button-bar'>
                    <div className = 'slider-container'>
                        <button className = 'sorting-button' onClick={() => this.mergeSortButton(this.state.array)}>Merge Sort</button>
                    </div>
                    <button className = 'sorting-button' onClick={() => this.quickSortButton(this.state.array)}>Quick Sort</button>
                    <button className = 'sorting-button' onClick={() => this.bubbleSortButton(this.state.array)}>Bubble Sort</button>
                    <button className = 'sorting-button' onClick={() => this.insertionSortButton(this.state.array)}>Insertion Sort</button>
                    <button className = 'sorting-button' onClick={() => this.resetArray(this.state.array.length)}>Generate Random Array</button>
                    <div className = 'slider-container'>
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