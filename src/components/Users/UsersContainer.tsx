import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {changeFriendUserStatusAC, initialUsersType} from '../../redux/User-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';

type mapStateToPropsType = {
    state: initialUsersType
}
type mapDispatchToProps = {
    changeFriendUserStatus: (userID: string, newStatus: boolean) => void
}
export type UsersTypeFromContainer = mapStateToPropsType & mapDispatchToProps;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        changeFriendUserStatus: (userID: string, newStatus: boolean) => {
            dispatch(changeFriendUserStatusAC(userID, newStatus))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

