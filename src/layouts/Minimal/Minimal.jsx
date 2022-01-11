import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {}
}));

const Minimal = (props) => {
    const classes = useStyles();
    const { children } = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};

export default Minimal;
