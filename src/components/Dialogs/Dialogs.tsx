import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {addNewDialogMessageAC, DispatchType, messagesPageType, newDialogMessageAC} from '../../redux/Types';


type DialogsType = {
    state: messagesPageType
    newDialogMessage: string
    dispatch: (action: DispatchType) => void
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

    const addNewMessage = () => {
        props.dispatch(addNewDialogMessageAC())
    }

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(newDialogMessageAC(e.currentTarget.value))
    }

    return (
        <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    {mappedDialogsData}
                </div>
                <div className={classes.messages}>
                    {mappedMessageData}
                </div>
            <textarea value={props.newDialogMessage} onChange={newMessageText}></textarea>
            <button onClick={addNewMessage}>Add message</button>
        </div>
    );
};