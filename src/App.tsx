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
import {DispatchType, StateType} from './redux/Types';


type AppType = {
    state: StateType
    dispatch: (action: DispatchType) => void
}

function App(props: AppType) {


    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs
                    state={props.state.dialogsPage} newDialogMessage={props.state.dialogsPage.newMessage} dispatch={props.dispatch}/>}/>
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
