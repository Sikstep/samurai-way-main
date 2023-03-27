import {combineReducers, createStore} from 'redux';
import DialogReducer from './Dialog-reducer';
import ProfileReducer from './Profile-reducer';
import SidebarReducer from './Sidebar-reducer';

const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SidebarReducer,
})
export type AppStateType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store

export let store = createStore(reducers);





