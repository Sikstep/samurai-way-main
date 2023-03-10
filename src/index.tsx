import React from 'react';
import './index.css';
import {store} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} newPostText={store._state.profilePage.newPostText} writeTextPost={store.writeTextPost.bind(store)} addPost={store.addPost.bind(store)} postValue={store._state.profilePage.posts[store._state.profilePage.posts.length - 1].title}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree();

store.subscribe(rerenderEntireTree);