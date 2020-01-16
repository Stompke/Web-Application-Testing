import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
let strike = 'strike';

const ButtonContainer = props => {


    const onClickHandler = e => {
        props.swing(e.target.value)
        console.log(e.target.value)
    }



    return (
        <div>
            <button value='strike' onClick={onClickHandler} variant="contained" color="primary">
            Strike
            </button>
            <button value='ball' onClick={onClickHandler} variant="contained" color="primary">
            Ball 
            </button>
            <button value='foul' onClick={onClickHandler}  variant="contained" color="primary">
            Foul
            </button>
            <button  value='hit' onClick={onClickHandler}  variant="contained" color="primary">
            Hit
            </button>
        </div>
    )
}

export default ButtonContainer;