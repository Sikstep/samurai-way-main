import React from 'react';
import {AppStateType, ReduxStoreType, store} from './redux/redux-store';
import App from './App';

export const StoreContext = React.createContext({} as ReduxStoreType)

type ProviderType = {
    store: ReduxStoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}