import React from 'react';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {DispatchType, profilePageType} from '../../redux/Types';


type ProfileType = {
    state: profilePageType

    postValue: string
    dispatch: (action: DispatchType) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postDate={props.state.posts} postValue={props.postValue} dispatch={props.dispatch}/>
        </div>

    )
}