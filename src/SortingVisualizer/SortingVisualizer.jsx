import React, {Component} from 'react'
import './SortingVisualizer.css'


export default class SortingVisualizer extends Component{
    constructor(){
        super();
        this.state = {
            array: [],
            arrayLen: 10,
        };
    }

    componentDidMount(){
        this.resetArray(this.state.arrayLen)
    }

    resetArray(len_){
        const array = []
        for (let i = 0; i < len_; i ++){
            array.push(this.getRandomInt(10, 500))
        }
        this.setState({array})
        this.setState({arrayLen: len_})
    }

    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render(){
        const {array} = this.state
        const width = ((1200 - 2 - (array.length*2))/(array.length))
        return(
            <div>
                <div className = 'array-container'>
                    {array.map((value, idX) => (
                    <div className = "array-element" key = {idX} style = {{backgroundColor: 'black', width: `${width}px`, height: `${value}px`}}>
                    </div>
                    ))}
                </div>
                <button onClick={() => this.resetArray(this.state.arrayLen)}>Generate Random Array</button>
                <input type = "range" name = "length" id = "arrayLengthSlider" min = "10" max = "200" step = "10" defaultValue = {this.state.arrayLen} onInput = {() => this.resetArray(document.getElementById("arrayLengthSlider").value)}></input>
            </div>
            );
    }
}