import {combineReducers, createStore} from 'redux';
import DialogReducer from './Dialog-reducer';
import ProfileReducer from './Profile-reducer';
import SidebarReducer from './Sidebar-reducer';

const reducers = combineReducers({
    profilePage: DialogReducer,
    dialogsPage: ProfileReducer,
    sidebar: SidebarReducer,
})
export let store = createStore(reducers);



