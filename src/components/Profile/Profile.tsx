import React from 'react';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {profilePageType} from '../../redux/state';

type ProfileType = {
    state: profilePageType
    addPost: () => void
    postValue: string
    newPostText: string
    writeTextPost: (message: string) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postDate={props.state.posts} writeTextPost={props.writeTextPost} newPostText={props.newPostText} addPost={props.addPost} postValue={props.postValue}/>
        </div>

    )
}