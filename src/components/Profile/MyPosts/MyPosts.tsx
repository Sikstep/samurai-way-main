import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {postType} from '../Profile';

type MyPostsType = {
    postDate: postType[]
}
export const MyPosts = (props: MyPostsType) => {

    const mappedPostData = props.postDate.map( el => {
        return (
            <Post id={el.id} title={el.title} likeCount={el.likeCount} />
        )
    })

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { mappedPostData }
            </div>
        </div>


    )
}