import {v1} from 'uuid';
import {messagesPageType, AllACTypes} from './Types';

const initialMessagesPageState: messagesPageType = {
        dialogs: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Viktor'},
            {id: v1(), name: 'Valera'},
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-kamasutra?'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
        ],
        newMessage: '',
    }

const DialogReducer = (state: messagesPageType = initialMessagesPageState, action: AllACTypes): messagesPageType => {
    switch (action.type) {
        case 'CHANGE-NEW-DIALOG-MESSAGE':
            state.newMessage = action.newMessage;
            return state;

        case 'ADD-DIALOGMESSAGE':
            let newDialogMessage = {id: v1(), message: state.newMessage};
            state.messages.push(newDialogMessage);
            state.newMessage = '';
            return state;

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

