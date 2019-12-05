import React from 'react';
import Board from './board.component';
import './game.component.css';
import $ from 'jquery';
import {randomSudoku} from '../algorithm/random.sudoku.js'
import {solveSudoku} from '../algorithm/sudoku.js'
import {removeSudoku} from '../algorithm/removeSudoku.component.js'

class game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [
                {squares: new Array(9).fill().map(() => new Array(9).fill(0))}
            ],
            solved: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.whenKey = this.whenKey.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
    }

    handleSolve(){
        let history = this.state.history;
        let current = history[history.length-1];
        console.log(current.squares);
        console.log('his: ',history[0]);
        let ans = solveSudoku(current.squares);
        if(!this.state.solved){
            this.setState({
                history: history.concat([
                    {
                        squares: ans
                    }
                ]),
                solved: true
            });
        }
        console.log(history)
    }

    handleRandom(){
        let history = this.state.history;
        let mat;
        while(true){
            mat = randomSudoku();
            mat = solveSudoku(mat);
            if(mat) break
        }
        mat = removeSudoku(mat,4);
        this.setState({
            history: history.concat([
                {
                    squares: mat
                }
            ]),
            solved: false
        });
        console.log(history.length,history);
    }

    whenKey(e,row,col){
        let history = this.state.history;
        let current = history[history.length -1];
        let squares = current.squares.slice();

        let number = ['1','2','3','4','5','6','7','8','9','10'];
        let isNumber = number.indexOf(e.key)
        if(isNumber < 0){
            console.log('Noooo')
            return;
        }
        squares[row][col] = parseInt(e.key);
        console.log('whenKey: ',row,col,e.key);
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ])
        })
    }

    handleClick(i,row,col){
        var _ = this
        $(document).ready(function(){
            $(':focus').keypress(e => {
                console.log(e.target)
                _.whenKey(e,row,col)
            })
        })
        // document.addEventListener('keypress',e => _.whenKey(e,row,col));
        // console.log(row,col)
    }
    render(){
        let history = this.state.history;
        let current = history[history.length-1];
        console.log(current)
        return(
            <div className='cover'>
                <Board
                 squares = {current.squares}
                 onClick = {(i,row,col) => this.handleClick(i,row,col)}
                 />
                 <button onClick={() => this.handleRandom()}>Random Number</button>
                 <button onClick={() => this.handleSolve()}>Solve Sudoku!</button>
            </div>
        );
    }
}

export default game;