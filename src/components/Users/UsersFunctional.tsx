import React from 'react';
import s from './Users.module.css';
import {UsersTypeFromContainer} from './UsersContainer';
import axios from 'axios';


export const UsersFunctional = (props: UsersTypeFromContainer) => {
    const onClickSetUsersHandler = () => {
        if (props.state.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
                props.setUsers(respons.data.items)
            });
        }

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
                            <img src={user.photos.small ? user.photos.small : '/Upload_Photo.jpg'} alt="Error"/>
                        </div>
                        {user.followed ?
                            <button onClick={onClickHandlerUnfollow}>Unfollow</button> :
                            <button onClick={onClickHandlerFollow}>Follow</button>}
                    </div>
                    <div className={s.userInfoBlock}>
                        <div className={s.userName}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={s.userLocation}>
                            <div>{'user.location.country'},</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>


            </div>
        )
    })
    return (
        <div className={s.users}>
            <button onClick={onClickSetUsersHandler}>Get users
            </button>
            {mappedUsers}
        </div>
    );
};

