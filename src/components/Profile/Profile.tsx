import React from 'react';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {profilePageType} from '../../redux/state';

type ProfileType = {
    state: profilePageType
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postDate={props.state.posts}/>
        </div>

    )
}