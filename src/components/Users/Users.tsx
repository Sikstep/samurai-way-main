import React from 'react';
import s from './Users.module.css';
import {UsersTypeFromContainer} from './UsersContainer';

export const Users = (props: UsersTypeFromContainer) => {
    const mappedUsers = props.state.users.map(user => {
        const onClickHandlerUnfollow = () => {
            props.changeFriendUserStatus(user.id, false)
        }
        const onClickHandlerFollow = () => {
            props.changeFriendUserStatus(user.id, true)
        }

        return (
            <div>
                {user.friendStatus ?
                    <button onClick={onClickHandlerUnfollow}>Unfollow</button> :
                    <button onClick={onClickHandlerFollow}>Follow</button>}
                <ul>
                    <li key={user.id}>
                        <div>{user.userName}</div>
                        <div>{user.userStatus}</div>
                        <div>{user.location.country},</div>
                        <div>{user.location.city}</div>
                    </li>
                </ul>
            </div>
        )
    })
    return (
        <div className={s.users}>
            {mappedUsers}
        </div>
    );
};

