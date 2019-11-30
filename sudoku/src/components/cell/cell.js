import React from 'react';
import './cell.css';
import $ from 'jquery';

function cell(props){

    return(
        <button className = 'square' onClick={props.onClick} value={props.value}>{props.value}</button>
    );
}

export default cell;