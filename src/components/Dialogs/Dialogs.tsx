import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsTypesFromContainer} from './DialogsContainer';

export const Dialogs = (props: DialogsTypesFromContainer) => {

    const mappedDialogsData = props.state.dialogs.map(el => {
        return (
            <DialogItem key={el.id} name={el.name} id={el.id}/>
        )
    })
    const mappedMessageData = props.state.messages.map(el => {
        return (
            <Message key={el.id} message={el.message} id={el.id}/>
        )
    })

    const addNewMessage = () => {
        props.addNewMessage()
    }

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newMessageText(e.currentTarget.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {mappedDialogsData}
            </div>
            <div className={classes.messages}>
                {mappedMessageData}
                <div className={classes.messagesInput}>
                    <textarea value={props.state.newMessage} onChange={newMessageText}></textarea>
                    <button onClick={addNewMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};