import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../Others/StatesController';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const Counter: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    // Funcs

    // Vars

    // JSX

    return (
        <div>
            <p>Counter {states.counter}</p>
            <button onClick={() => {
                controller.increase()
            }}>+</button>
            <button onClick={() => {
                //
                controller.decrease()
            }}>-</button>
        </div>
    )

}

export default Counter;