export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
}
export type profilePageType = {
    posts: postType[]
    newPostText: string

}
export type messagesPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}

export type postType = {
    id: number
    title: string
    likeCount: number
}
export type DialogItemType = {
    name: string
    id: number
}
export type MessageType = {
    id: number
    message: string
}
export type StoreType = {
    _state: StateType
    writeTextPost:(message: string) => void
    addPost: () => void
    _callSubscriber: () => void
    subscribe: (callBack: () => void) => void
    getState: () => StateType
    dispatch: (action) => void

}
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, title: 'Hi, how are you?', likeCount: 15},
                {id: 2, title: `It's my first post`, likeCount: 10},
                {id: 3, title: 'Third post', likeCount: 7},
                {id: 4, title: 'Fourth post', likeCount: 19},
                {id: 5, title: 'Fifth post', likeCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
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

    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            title: this._state.profilePage.newPostText,
            likeCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber();
    },
    writeTextPost(message) {
        this._state.profilePage.newPostText = message;
        this._callSubscriber();
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                title: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber();
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
