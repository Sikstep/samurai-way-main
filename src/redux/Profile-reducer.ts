import {v1} from 'uuid';
import {AllACTypes, profilePageType} from './Types';

const initialPostsPageState: profilePageType = {
    posts: [
        {id: v1(), title: 'Hi, how are you?', likeCount: 15},
        {id: v1(), title: `It's my first post`, likeCount: 10},
        {id: v1(), title: 'Third post', likeCount: 7},
        {id: v1(), title: 'Fourth post', likeCount: 19},
        {id: v1(), title: 'Fifth post', likeCount: 2},
    ],
    newPostText: ''
};

const ProfileReducer = (state: profilePageType = initialPostsPageState, action: AllACTypes): profilePageType => {
    let stateCopy;
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                title: state.newPostText,
                likeCount: 0,
            };
            stateCopy = {...state, posts: [newPost, ...state.posts], newPostText: ''}
            // state.posts.unshift(newPost);    как было раньше)))
            // let stateCopy = {...state, posts: [newPost, ...state.posts], newPostText: ''}
            // state.newPostText = ''

            return stateCopy

        case 'CHANGE-NEW-TEXT':
            // let newPostTextCopy = {...state, newPostText: action.message}
            // state.newPostText = action.message; как было раньше=)
            stateCopy = {...state, newPostText: action.message};
            return stateCopy

        default:
            return state;
    }
};


export const AddPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeNewTextAC = (addPost: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        message: addPost,
    } as const
}
export default ProfileReducer;


