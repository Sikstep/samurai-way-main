import React from 'react';

import classes from './Post.module.css';
import {postType} from '../../../../redux/Types';



export const Post = (props: postType) => {
    return (
        <div className={classes.item}>
            <img
                src="/Avatar2.jpg"
                alt=""/>
            {props.title}
            <div>
                <span>
                    <button>Like</button>
                </span>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}