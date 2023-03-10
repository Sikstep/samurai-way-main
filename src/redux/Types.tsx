
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
    id: number
    title: string
    likeCount: number
}
export type DialogItemType = {
    name: string
    id: number
}
export type MessageType = {
    id: number
    message: string
}
export type StoreType = {
    _state: StateType
    writeTextPost:(message: string) => void
    addPost: () => void
    _callSubscriber: () => void
    subscribe: (callBack: () => void) => void
    getState: () => StateType
    dispatch: (action: any) => void

}