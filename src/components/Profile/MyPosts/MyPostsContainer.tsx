import React from 'react';
import {Post} from './Post/Post';
import {AllACTypes, postType} from '../../../redux/Types';
import {AddPostAC, changeNewTextAC} from '../../../redux/Profile-reducer';
import {MyPosts} from './MyPosts';
import {AppStateType, ReduxStoreType} from '../../../redux/redux-store';


type MyPostsContainerType = {
    postDate: ReduxStoreType

}
export const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.postDate.getState()
    const addPost = () => {
        props.postDate.dispatch(AddPostAC())
    }
    const onChangePostHandler = (text: string) => {
        props.postDate.dispatch(changeNewTextAC(text))
    }
    return (
        <MyPosts postDate={state.profilePage.posts} postValue={state.profilePage.newPostText} updateNewPostText={onChangePostHandler} addPost={addPost}/>
    )
}