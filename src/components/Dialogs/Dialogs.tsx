import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItemType, MessageType} from '../../index';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

type DialogsType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}

export const Dialogs = (props: DialogsType) => {



    const mappedDialogsData = props.dialogs.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })
    const mappedMessageData = props.messages.map(el => {
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