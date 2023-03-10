import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import { DialogItemType } from '../../../redux/Types';



export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
};
