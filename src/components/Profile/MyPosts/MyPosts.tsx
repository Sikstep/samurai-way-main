import React from 'react';
import classes from './MyPosts.module.css';
import {Post, postType} from './Post/Post';


export const MyPosts = () => {

    let postData: postType[] = [
        {id: 1, title: 'Hi, how are you?', likeCount: 15},
        {id: 2, title: `It's my first post`, likeCount: 10},
        {id: 3, title: 'Third post', likeCount: 7},
        {id: 4, title: 'Fourth post', likeCount: 19},
        {id: 5, title: 'Fifth post', likeCount: 2},

    ]
    const mappedPostData = postData.map( el => {
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