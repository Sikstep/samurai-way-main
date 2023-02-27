import React from 'react';

import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {postType} from '../../../redux/state';


type MyPostsType = {
    postDate: postType[]
    addPost: (newMessage: string) => void
}
export const MyPosts = (props: MyPostsType) => {

    const mappedPostData = props.postDate.map(el => {
        return (
            <Post key={el.id} id={el.id} title={el.title} likeCount={el.likeCount}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {

        if (newPostElement.current !== null) {
            let text = newPostElement.current.value;
            props.addPost(text)
            console.log(text)
        }


    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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