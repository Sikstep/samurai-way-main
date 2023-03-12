import exp from 'constants';

export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
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
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (callBack: () => void) => void
    getState: () => StateType
    dispatch: (action: DispatchType) => void

}

export type DispatchType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof newDialogMessageAC>
    | ReturnType<typeof addNewDialogMessageAC>;

export const AddPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeNewTextAC = (addPost: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        message: addPost,
    } as const
}

export const newDialogMessageAC = (newMessage: string) => {
    return {
        type: 'CHANGE-NEW-DIALOG-MESSAGE',
        newMessage: newMessage,
    } as const
}

export const addNewDialogMessageAC = () => {
    return {
        type: 'ADD-DIALOGMESSAGE',
    } as const
}

