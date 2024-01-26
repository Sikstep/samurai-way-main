import React from 'react';
import {connect} from 'react-redux';
import {changeFriendUserStatusAC, initialUsersType, setCurrentPageAC, setUserAC} from '../../redux/User-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {UserType} from '../../redux/Types';
import {Users} from './UsersClass';


export type mapStateToPropsType = {
    users: initialUsersType
    pageSize: number
    totalCount: number
    currentPage: number

}
export type mapDispatchToProps = {
    changeFriendUserStatus: (userID: number, newStatus: boolean) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
}
export type UsersTypeFromContainer = mapStateToPropsType & mapDispatchToProps;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    } 
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        changeFriendUserStatus: (userID, newStatus) => {
            dispatch(changeFriendUserStatusAC(userID, newStatus))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


