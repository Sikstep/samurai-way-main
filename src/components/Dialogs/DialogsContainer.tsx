import React from 'react';
import {addNewDialogMessageAC, newDialogMessageAC} from '../../redux/Dialog-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';


type DialogsType = {

}

export const DialogsContainer = (props: DialogsType) => {


    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().dialogsPage;
                const addNewMessage = () => {
                    store.dispatch(addNewDialogMessageAC())
                }

                const newMessageText = (text: string) => {
                    store.dispatch(newDialogMessageAC(text))
                }
                return (
                    <Dialogs state={state} addNewMessage={addNewMessage} newMessageText={newMessageText}/>
                )
            }
        }

        </StoreContext.Consumer>
    );
};