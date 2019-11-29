import React from 'react';
import Cell from './cell/cell';

class board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(81).fill(null),
        }
        this.renderSquare = this.renderSquare.bind(this);
        this.renderArray = this.renderArray.bind(this);
    }

    // componentDidMount(){
    //     this.renderArray();
    // }

    renderSquare(i){
        console.log("Hello World", i);
        return(
            <Cell value={i} />
        );
    }

    renderArray(){
        let squares = this.state.squares;
        var row,col,rowHtml,tableHtml,colHtml;
        rowHtml = '';
        tableHtml = '';

        let arrayHtml = [];
        for(row = 0 ; row < 9; row++){
            rowHtml = [];
            for(col = 0 ; col < 9 ; col++){
                rowHtml.push(
                    <td className = {col} key={9*row+col}>
                        {this.renderSquare(9*row + col)}
                    </td>
                );                
            }
            arrayHtml.push(<tr className = {row}>{rowHtml}</tr>);
        }
        return (
            <table id = 'board'>{arrayHtml}</table>
        );
    }


    render(){
        return(
            <div id='hello'>
                {this.renderArray()}
            </div>
        );
    }
}

export default board;