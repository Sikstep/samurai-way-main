import React from 'react';
import {addNewDialogMessageAC, newDialogMessageAC} from '../../redux/Dialog-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {messagesPageType} from '../../redux/Types';
import {Dispatch} from 'redux';


type mapStateToPropsType = {
    state: messagesPageType
}

type mapDispatchToPropsType = {
    addNewMessage: () => void
    newMessageText: (text: string) => void
}

export type DialogsTypesFromContainer = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewMessage: () => {
            dispatch(addNewDialogMessageAC())
        },
        newMessageText: (text: string) => {
            dispatch(newDialogMessageAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);