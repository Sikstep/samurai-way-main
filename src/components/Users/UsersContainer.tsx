import React from 'react';
import {connect} from 'react-redux';
import {changeFriendUserStatusAC, initialUsersType, setUserAC} from '../../redux/User-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {UserType} from '../../redux/Types';
import {Users} from './UsersC';

export type mapStateToPropsType = {
    state: initialUsersType
}
export type mapDispatchToProps = {
    changeFriendUserStatus: (userID: number, newStatus: boolean) => void
    setUsers: (users: UserType[]) => void
}
export type UsersTypeFromContainer = mapStateToPropsType & mapDispatchToProps;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.usersPage
    } 
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        changeFriendUserStatus: (userID, newStatus) => {
            dispatch(changeFriendUserStatusAC(userID, newStatus))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


