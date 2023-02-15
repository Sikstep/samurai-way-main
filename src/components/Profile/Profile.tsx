import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export type postType = {
    id: number
    title: string
    likeCount: number
}

let postData: postType[] = [
    {id: 1, title: 'Hi, how are you?', likeCount: 15},
    {id: 2, title: `It's my first post`, likeCount: 10},
    {id: 3, title: 'Third post', likeCount: 7},
    {id: 4, title: 'Fourth post', likeCount: 19},
    {id: 5, title: 'Fifth post', likeCount: 2},

]
export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postDate={postData}/>
        </div>

    )
}