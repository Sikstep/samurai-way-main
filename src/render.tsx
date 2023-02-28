import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {addPost, StateType, writeTextPost} from './redux/state';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} newPostText={state.profilePage.newPostText} writeTextPost={writeTextPost} addPost={addPost} postValue={state.profilePage.posts[state.profilePage.posts.length - 1].title}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};



