import React from 'react';
import './App.css';


function App() {

    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div>
                ava + discription
                <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt=""/>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default App;
