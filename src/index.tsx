import React from 'react';
import './index.css';
import {addPost, state, StateType, subscribe, writeTextPost} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} newPostText={state.profilePage.newPostText} writeTextPost={writeTextPost} addPost={addPost} postValue={state.profilePage.posts[state.profilePage.posts.length - 1].title}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree();

subscribe(rerenderEntireTree);