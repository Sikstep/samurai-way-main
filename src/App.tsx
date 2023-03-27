import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings.';
import {AllACTypes, StateType} from './redux/Types';
import {AppStateType} from './redux/redux-store';


type AppType = {
    state: AppStateType
    dispatch: (action: AllACTypes) => void
}

function App(props: AppType) {


    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs
                    state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           state={props.state.profilePage}
                           postValue={props.state.profilePage.newPostText}
                           dispatch={props.dispatch}
                       />
                }/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
