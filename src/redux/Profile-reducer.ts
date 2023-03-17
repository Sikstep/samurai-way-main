import {v1} from 'uuid';
import {StateType, TsarType} from './Types';

export const ProfileReducer = (state: StateType, action: TsarType): StateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                title: state.profilePage.newPostText,
                likeCount: 0,
            };
            state.profilePage.posts.unshift(newPost);
            state.profilePage.newPostText = ''

          return state

        case 'CHANGE-NEW-TEXT':
            state.profilePage.newPostText = action.message;

            return state

        case 'CHANGE-NEW-DIALOG-MESSAGE':
            state.dialogsPage.newMessage = action.newMessage;

            return state

        case 'ADD-DIALOGMESSAGE':
            let newDialogMessage = {id: v1(), message: state.dialogsPage.newMessage};
            state.dialogsPage.messages.push(newDialogMessage);
            state.dialogsPage.newMessage = '';

            return state

        default:
            return state;
    }
};

