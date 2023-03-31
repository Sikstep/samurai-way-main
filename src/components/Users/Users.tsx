import React from 'react';
import s from './Users.module.css';
import {UsersTypeFromContainer} from './UsersContainer';
import {v1} from 'uuid';

export const Users = (props: UsersTypeFromContainer) => {

    const onClickSetUsersHandler = () => {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
                userName: 'Dmitry K.',
                userStatus: `I'm looking for a job right now`,
                location: {country: 'Belarus', city: 'Minsk'},
                friendStatus: true
            },
            {
                id: v1(),
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAC0WbcnGFLSj2WVDq7Ale1VtrekDlKA7cg&usqp=CAU',
                userName: 'Svetlana D.',
                userStatus: `I'm so pretty`,
                location: {country: 'Belarus', city: 'Minsk'},
                friendStatus: false
            },
        ])
    }
    const mappedUsers = props.state.users.map(user => {
        const onClickHandlerUnfollow = () => {
            props.changeFriendUserStatus(user.id, false)
        }
        const onClickHandlerFollow = () => {
            props.changeFriendUserStatus(user.id, true)
        }

        return (
            <div key={user.id} className={s.users}>
                <div className={s.user_container}>
                    <div className={s.users_imgBlock}>
                        <div className={s.user_img}>
                            <img src={user.photoUrl} alt="Error"/>
                        </div>
                        {user.friendStatus ?
                            <button onClick={onClickHandlerUnfollow}>Unfollow</button> :
                            <button onClick={onClickHandlerFollow}>Follow</button>}
                    </div>
                    <div className={s.userInfoBlock}>
                        <div className={s.userName}>
                            <div>{user.userName}</div>
                            <div>{user.userStatus}</div>
                        </div>
                        <div className={s.userLocation}>
                            <div>{user.location.country},</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>


            </div>
        )
    })
    return (
        <div className={s.users}>
            <button onClick={onClickSetUsersHandler}>Get users</button>
            {mappedUsers}
        </div>
    );
};

