import React, {ChangeEvent} from 'react';

import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {AllACTypes, postType} from '../../../redux/Types';
import {AddPostAC, changeNewTextAC} from '../../../redux/Profile-reducer';
import {MyPosts} from './MyPosts';


type MyPostsContainerType = {
    postDate: postType[]
    postValue: string
    dispatch: (action: AllACTypes) => void

}
export const MyPostsContainer = (props: MyPostsContainerType) => {

    const mappedPostData = props.postDate.map(el => {
        return (
            <Post key={el.id} id={el.id} title={el.title} likeCount={el.likeCount}/>
        )
    })
    const addPost = () => {
        props.dispatch(AddPostAC())
    }
    const onChangePostHandler = (text: string) => {
        props.dispatch(changeNewTextAC(text))
    }
    return (
        <MyPosts postDate={props.postDate} postValue={props.postValue} updateNewPostText={onChangePostHandler} addPost={addPost}/>
    )
}