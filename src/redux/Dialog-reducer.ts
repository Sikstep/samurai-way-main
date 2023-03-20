import {v1} from 'uuid';
import {messagesPageType, profilePageType, TsarType} from './Types';

const DialogReducer = (state: messagesPageType, action: TsarType): messagesPageType => {
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

export default DialogReducer;

