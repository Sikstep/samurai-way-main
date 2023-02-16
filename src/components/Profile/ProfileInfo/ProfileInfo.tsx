import classes from './ProfileInfo.module.css';
import React from 'react';


export const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.preview}>
                <img alt={'snow'}
                    src="https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?w=1800&t=st=1676541432~exp=1676542032~hmac=dd3ab1ac2df1e1e9c30523b506777d377a164a6a01b91bc315d1b039b89fcf36"/>
            </div>
            <div className={classes.description_block}>
                ava + discription
            </div>
        </div>
    )
        ;
};