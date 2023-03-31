import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {changeFriendUserStatusAC, initialUsersType, setUserAC} from '../../redux/User-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {UserType} from '../../redux/Types';

type mapStateToPropsType = {
    state: initialUsersType
}
type mapDispatchToProps = {
    changeFriendUserStatus: (userID: string, newStatus: boolean) => void
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
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

