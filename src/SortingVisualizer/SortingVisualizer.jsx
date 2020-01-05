import React, {Component} from 'react'
import './SortingVisualizer.css'


export default class SortingVisualizer extends Component{
    constructor(){
        super();
        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray()
    }

    resetArray(){
        const array = []
        for (let i = 0; i < 100; i ++){
            array.push(this.getRandomInt(10, 500))
        this.setState({array})
        }
    }

    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render(){
        const {array} = this.state
        const width = (1000-array.length-1)/(array.length)
        return(
            <div className = 'array-container'>
                {array.map((value, idX) => (
                <div className = "array-element" key = {idX} style = {{backgroundColor: 'black', width: `${width}px`, height: `${value}px`}}>
                </div>
                ))}
            </div>
            );
    }
}