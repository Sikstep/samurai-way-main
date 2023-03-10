
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

export type DispatchType = AddPostTypeDispatch | ChangeTextPostType;

type AddPostTypeDispatch = {
    type: 'ADD-POST',
}
type ChangeTextPostType = {
    type: 'CHANGE-NEW-TEXT',
    message: string
}

export const AddPostAC = (): AddPostTypeDispatch => {
        return {
            type: 'ADD-POST'
        }
}

export const AddMessageAC = (addPost: string): ChangeTextPostType => {
        return {
            type: 'CHANGE-NEW-TEXT',
            message: addPost,
        }
}

