import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Display = props => {

    useEffect(() => {
        console.log(props.count)
    })

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Badge badgeContent={props.count.strike} color="primary">
            <MailIcon />
            </Badge>
            <Badge badgeContent={props.count.ball} color="secondary">
            <MailIcon />
            </Badge>
            {/* <Badge badgeContent={4} color="error">
            <MailIcon />
            </Badge> */}
        </div>    
    )
}
export default Display;