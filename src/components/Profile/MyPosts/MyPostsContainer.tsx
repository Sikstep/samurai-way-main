import React from 'react';
import {AddPostAC, changeNewTextAC} from '../../../redux/Profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().profilePage
                const addPost = () => {
                    store.dispatch(AddPostAC())
                }
                const onChangePostHandler = (text: string) => {
                    store.dispatch(changeNewTextAC(text))
                }
                return (
                    <MyPosts postDate={state.posts} postValue={state.newPostText} updateNewPostText={onChangePostHandler}
                             addPost={addPost}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}