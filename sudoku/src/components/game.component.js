import React from 'react';
import Board from './board.component';
import './game.component.css';
import $ from 'jquery';

class game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [
                {squares: new Array(9).fill().map(() => new Array(9).fill(2))}
            ]
        };
        this.handleClick = this.handleClick.bind(this);
        this.whenKey = this.whenKey.bind(this);
    }

    whenKey(e,row,col){
        let history = this.state.history;
        let current = history[history.length -1];
        let squares = current.squares.slice();

        squares[row][col] = e.key;
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
        return(
            <div className='cover'>
                <Board
                 squares = {current.squares}
                 onClick = {(i,row,col) => this.handleClick(i,row,col)}
                 />
            </div>
        );
    }
}

export default game;