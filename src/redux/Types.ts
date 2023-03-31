import {addNewDialogMessageAC, newDialogMessageAC} from './Dialog-reducer';
import {AddPostAC, changeNewTextAC} from './Profile-reducer';
import {changeFriendUserStatusAC} from './User-reducer';

export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
    sidebar: any
}
export type profilePageType = {
    posts: postType[]
    newPostText: string

}
export type messagesPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    newMessage: string
}

export type postType = {
    id: string
    title: string
    likeCount: number
}
export type DialogItemType = {
    name: string
    id: string
}
export type MessageType = {
    id: string
    message: string
}
export type UserType = {
    id: string
    userName: string
    userStatus: string
    location: UserLocationType
    friendStatus: boolean

}
export type UserLocationType = {
    country: string
    city: string
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (callBack: () => void) => void
    getState: () => StateType
    dispatch: (action: AllACTypes) => void

}

export type AllACTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof newDialogMessageAC>
    | ReturnType<typeof addNewDialogMessageAC>
    | ReturnType<typeof changeFriendUserStatusAC>;






