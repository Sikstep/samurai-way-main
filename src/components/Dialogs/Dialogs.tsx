import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
};

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>

                <DialogItem name={'Dimych'} id={1} />
                <DialogItem name={'Andrey'} id={2} />
                <DialogItem name={'Sveta'} id={3} />
                <DialogItem name={'Sasha'} id={4} />
                <DialogItem name={'Viktor'} id={5} />
                <DialogItem name={'Valera'} id={6} />

            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};