import React, {LegacyRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {messagesPageType} from '../../redux/state';

type DialogsType = {
    state: messagesPageType
}

export const Dialogs = (props: DialogsType) => {

    const newTestAreaMessage = React.createRef<HTMLTextAreaElement>();

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
        alert(newTestAreaMessage.current?.value)
    }

    return (
        <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    {mappedDialogsData}
                </div>
                <div className={classes.messages}>
                    {mappedMessageData}
                </div>
            <textarea ref={newTestAreaMessage}></textarea>
            <button onClick={addNewMessage}>Add message</button>
        </div>
    );
};