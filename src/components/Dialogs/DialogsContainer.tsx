import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {AllACTypes, messagesPageType} from '../../redux/Types';
import {addNewDialogMessageAC, newDialogMessageAC} from '../../redux/Dialog-reducer';
import {ReduxStoreType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';


type DialogsType = {
    store: ReduxStoreType

}

export const DialogsContainer = (props: DialogsType) => {

    let state = props.store.getState();
      const addNewMessage = () => {
        props.store.dispatch(addNewDialogMessageAC())
    }

    const newMessageText = (text: string) => {
        props.store.dispatch(newDialogMessageAC(text))
    }

    return (
        <Dialogs state={state.dialogsPage} addNewMessage={addNewMessage} newMessageText={newMessageText}/>
    );
};