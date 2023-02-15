import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {messagesPageType} from '../../redux/state';

type DialogsType = {
    state: messagesPageType
}

export const Dialogs = (props: DialogsType) => {



    const mappedDialogsData = props.state.dialogs.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })
    const mappedMessageData = props.state.messages.map(el => {
        return (
            <Message message={el.message} id={el.id}/>
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                { mappedDialogsData }
            </div>
            <div className={classes.messages}>
                { mappedMessageData }
            </div>
        </div>
    );
};