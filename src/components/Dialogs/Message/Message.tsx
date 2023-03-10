import React from 'react';
import classes from './../Dialogs.module.css';
import {MessageType} from '../../../redux/Types';



export const Message = (props: MessageType) => {
    return (
        <div className={classes.message} key={props.id}>{props.message}</div>
    );
};

