import React from 'react';
import './cell.css';

function cell(props){
    return(
        <button className = 'square'>{props.value}</button>
    );
}

export default cell;