import React, {ChangeEvent} from 'react';

import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {postType} from '../../../redux/Types';


type MyPostsType = {
    postDate: postType[]
    postValue: string
    updateNewPostText: (text: string) => void
    addPost: () => void

}
export const MyPosts = (props: MyPostsType) => {

    const mappedPostData = props.postDate.map(el => {
        return (
            <Post key={el.id} id={el.id} title={el.title} likeCount={el.likeCount}/>
        )
    })
    const addPost = () => {
        props.addPost()
    }
    const onChangeHandlerTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.postValue} onChange={onChangeHandlerTextArea}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {mappedPostData}
            </div>
        </div>


    )
}