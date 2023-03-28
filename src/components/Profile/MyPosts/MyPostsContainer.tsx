import React from 'react';
import {AddPostAC, changeNewTextAC} from '../../../redux/Profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {postType} from '../../../redux/Types';

type mapStateToPropsType = {
    postDate: postType[]
    postValue: string
}

type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsTypesFromContainer = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postDate: state.profilePage.posts,
        postValue: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(changeNewTextAC(text))
        },
        addPost: () => {
            dispatch(AddPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);