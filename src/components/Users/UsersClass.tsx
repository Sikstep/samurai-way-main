import React from 'react';
import s from './Users.module.css';
import {UsersTypeFromContainer} from './UsersContainer';
import axios from 'axios';

export class Users extends React.Component<UsersTypeFromContainer> {
    //  onClickSetUsersHandler = () => {
    //     if (this.props.state.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 this.props.setUsers(response.data.items);
    //             });
    //     }
    // };

    onClickHandlerUnfollow = (userId: number) => {
        this.props.changeFriendUserStatus(userId, false);
    };

    onClickHandlerFollow = (userId: number) => {
        this.props.changeFriendUserStatus(userId, true);
    };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const mappedUsers = this.props.users.users.map(user => (
            <div key={user.id} className={s.users}>
                <div className={s.user_container}>
                    <div className={s.users_imgBlock}>
                        <div className={s.user_img}>
                            <img src={user.photos.small ? user.photos.small : '/Upload_Photo.jpg'} alt="Error" />
                        </div>
                        {user.followed ? (
                            <button onClick={() => this.onClickHandlerUnfollow(user.id)}>Unfollow</button>
                        ) : (
                            <button onClick={() => this.onClickHandlerFollow(user.id)}>Follow</button>
                        )}
                    </div>
                    <div className={s.userInfoBlock}>
                        <div className={s.userName}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                    </div>
                </div>
            </div>
        ));

        return (
            <div className={s.users}>
                <div>
                    {pages.map(p => {
                       return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                       onClick={() => {(e: any) => {this.onPageChanged(p)}}}>{p}</span>
                    })}
                </div>
                {/*<button onClick={this.onClickSetUsersHandler}>Get users</button>*/}
                {mappedUsers}
            </div>
        );
    }
}

