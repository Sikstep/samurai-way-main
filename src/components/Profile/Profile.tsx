import React from 'react';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {AllACTypes, profilePageType} from '../../redux/Types';


type ProfileType = {
    state: profilePageType

    postValue: string
    dispatch: (action: AllACTypes) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postDate={props.state.posts} postValue={props.postValue} dispatch={props.dispatch}/>
        </div>

    )
}