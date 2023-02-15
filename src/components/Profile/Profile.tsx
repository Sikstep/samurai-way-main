import React from 'react';
import {postType} from '../../index';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';

type ProfileType = {
    posts: postType[]
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postDate={props.posts}/>
        </div>

    )
}