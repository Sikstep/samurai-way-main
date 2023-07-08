import React from 'react';
import s from './Users.module.css';


export class Users extends React.Component<any, any>{
    mappedUsers = () => {
        this.props.state.users.map(user => {
            const onClickHandlerUnfollow = () => {
                this.props.changeFriendUserStatus(user.id, false)
            }
            const onClickHandlerFollow = () => {
                this.props.changeFriendUserStatus(user.id, true)
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
    }
    render() {
        return (
            <div className={s.users}>
                <button onClick={onClickSetUsersHandler}>Get users
                </button>
                {mappedUsers}
            </div>
        );
    }
}

