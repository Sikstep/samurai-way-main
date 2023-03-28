import React from 'react';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ReduxStoreType} from '../../redux/redux-store';


type ProfileType = {


}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    )
}