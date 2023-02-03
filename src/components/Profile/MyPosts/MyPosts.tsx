import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
              <Post title={'Hi, how are you?'} likeCount={15}/>
              <Post title={`It's my first post`} likeCount={10}/>
              <Post title={'Third post'} likeCount={7}/>
              <Post title={'Fourth post'} likeCount={19}/>
              <Post title={'Fifth post'} likeCount={23}/>
                <Post title={'Fifth post'} likeCount={2}/>
            </div>
        </div>


)
}