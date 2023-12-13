import {v1} from 'uuid';
import {AllACTypes, messagesPageType} from './Types';

const initialMessagesPageState: messagesPageType = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Vasia'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Hi man!'},
    ],
    newMessage: '',
};

const DialogReducer = (state: messagesPageType = initialMessagesPageState, action: AllACTypes): messagesPageType => {
    let stateCopy;
    switch (action.type) {
        case 'ADD-DIALOGMESSAGE':
            // let newDialogMessage = {id: v1(), message: state.newMessage};
            // let newState = {...state, messages: [...state.messages, newDialogMessage], newMessage: ''}
            // state.messages.push(newDialogMessage);
            // state.newMessage = '';
            stateCopy = {...state, messages: [...state.messages, {id: v1(), message: state.newMessage}], newMessage: ''}
            return stateCopy;

        case 'CHANGE-NEW-DIALOG-MESSAGE':
            // let newMessageCopy = {...state, newMessage: action.newMessage}
            // state.newMessage = action.newMessage;
            stateCopy = {...state, newMessage: action.newMessage}
            return stateCopy;

        default:
            return state;

    }
};

export const newDialogMessageAC = (newMessage: string) => {
    return {
        type: 'CHANGE-NEW-DIALOG-MESSAGE',
        newMessage: newMessage,
    } as const
}

export const addNewDialogMessageAC = () => {
    return {
        type: 'ADD-DIALOGMESSAGE',
    } as const
}

export default DialogReducer;

