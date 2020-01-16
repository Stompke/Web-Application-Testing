import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ButtonContainer = () => {

    return (
        <div>
            <Button  variant="contained" color="primary">
            Strike
            </Button>
            <Button variant="contained" color="primary">
            Ball 
            </Button>
            <Button variant="contained" color="primary">
            Foul
            </Button>
            <Button variant="contained" color="primary">
            Hit
            </Button>
        </div>
    )
}

export default ButtonContainer;