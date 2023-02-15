import React from 'react';

import classes from './Post.module.css';
import {postType} from '../../../../index';

export const Post = (props: postType) => {
    return (
        <div className={classes.item}>
            <img
                src="https://cdn.vox-cdn.com/thumbor/P7ahK7u4lY7afwcc7zCb18ABJL8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24291453/avatar6.jpg"
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