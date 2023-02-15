import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';

export const Dialogs = () => {

    let dialogsData: DialogItemType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]


    let messageData: MessageType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ];

    const mappedDialogsData = dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })
    const mappedMessageData = messageData.map(el => {
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