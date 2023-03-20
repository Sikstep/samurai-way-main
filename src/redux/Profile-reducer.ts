import {v1} from 'uuid';
import {profilePageType, TsarType} from './Types';

const ProfileReducer = (state: profilePageType, action: TsarType): profilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                title: state.newPostText,
                likeCount: 0,
            };
            state.posts.unshift(newPost);
            state.newPostText = ''

            return state

        case 'CHANGE-NEW-TEXT':
            state.newPostText = action.message;

            return state

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

