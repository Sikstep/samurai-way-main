import {StoreType, TsarType} from './Types';
import {v1} from 'uuid';
import ProfileReducer from './Profile-reducer';
import DialogReducer from './Dialog-reducer';

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

    dispatch(action: TsarType) {
        DialogReducer(this._state.dialogsPage, action);
        ProfileReducer(this._state.profilePage, action);
        this._callSubscriber();
    },
}

