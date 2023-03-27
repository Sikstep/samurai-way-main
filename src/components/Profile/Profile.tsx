import React from 'react';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {AllACTypes, profilePageType} from '../../redux/Types';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {AppStateType, ReduxStoreType} from '../../redux/redux-store';


type ProfileType = {
    store: ReduxStoreType

}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer postDate={props.store}/>
        </div>

    )
}