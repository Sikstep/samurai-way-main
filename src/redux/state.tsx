import {DispatchType, StoreType, TsarType} from './Types';
import {v1} from 'uuid';

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), title: 'Hi, how are you?', likeCount: 15},
                {id: v1(), title: `It's my first post`, likeCount: 10},
                {id: v1(), title: 'Third post', likeCount: 7},
                {id: v1(), title: 'Fourth post', likeCount: 19},
                {id: v1(), title: 'Fifth post', likeCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(callBack) {
        this._callSubscriber = callBack
    },
    getState() {
        return this._state;
    },

    dispatch(action:TsarType) {
        debugger
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: v1(),
                    title: this._state.profilePage.newPostText,
                    likeCount: 0,
                };
                this._state.profilePage.posts.unshift(newPost);
                this._state.profilePage.newPostText = ''
                this._callSubscriber();
                break;


            case 'CHANGE-NEW-TEXT':
                this._state.profilePage.newPostText = action.message;
                this._callSubscriber();
                break;

            case 'CHANGE-NEW-DIALOG-MESSAGE':
                this._state.dialogsPage.newMessage = action.newMessage;
                this._callSubscriber();
                break;

            case 'ADD-DIALOGMESSAGE':
                let newDialogMessage = {id: v1(), message: this._state.dialogsPage.newMessage};
                this._state.dialogsPage.messages.push(newDialogMessage);
                this._state.dialogsPage.newMessage = '';
                this._callSubscriber()
                break;

            default:
                return this._state;
        }
    },
}


// export let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, title: 'Hi, how are you?', likeCount: 15},
//             {id: 2, title: `It's my first post`, likeCount: 10},
//             {id: 3, title: 'Third post', likeCount: 7},
//             {id: 4, title: 'Fourth post', likeCount: 19},
//             {id: 5, title: 'Fifth post', likeCount: 2},
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'},
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'},
//         ],
//     },
// };
//
// export const subscribe = (callBack: () => void) => {
//     rerenderEntireTree = callBack
// }
// export let addPost = () => {
//
//     let newPost = {id: state.profilePage.posts.length + 1, title: state.profilePage.newPostText, likeCount: 0};
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = ''
//     rerenderEntireTree();
// }
//
// export const writeTextPost = (message: string) => {
//
//     state.profilePage.newPostText = message;
//     rerenderEntireTree();
// }
