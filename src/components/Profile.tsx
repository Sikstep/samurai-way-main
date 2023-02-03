import React from 'react';
import classes from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
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
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>

    )
}