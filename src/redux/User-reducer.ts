import {v1} from 'uuid';
import {AllACTypes, UserType} from './Types';

export type initialUsersType = {
    users: UserType[]
}

const initialUsers: initialUsersType = {
    users: [
        // {
        //     id: v1(),
        //     photoUrl: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
        //     userName: 'Dmitry K.',
        //     userStatus: `I'm looking for a job right now`,
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     friendStatus: true
        // },
        // {
        //     id: v1(),
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAC0WbcnGFLSj2WVDq7Ale1VtrekDlKA7cg&usqp=CAU',
        //     userName: 'Svetlana D.',
        //     userStatus: `I'm so pretty`,
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     friendStatus: false
        // },
    ]
};

const usersReducer = (state: initialUsersType = initialUsers, action: AllACTypes): initialUsersType => {
    let stateCopy;
    switch (action.type) {
        case 'CHANGE-FRIENDS-STATUS': {
            stateCopy = {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {
                    ...el,
                    friendStatus: action.payload.newStatus
                } : el)
            }
            return stateCopy;
        }
        case 'SET-USERS': {
            stateCopy = {...state, users: [...state.users, ...action.payload]}
            return stateCopy
        }
    }

    return state;

};

export const changeFriendUserStatusAC = (userID: string, newStatus: boolean) => {
    return {
        type: 'CHANGE-FRIENDS-STATUS',
        payload: {userID, newStatus}
    } as const
}
export const setUserAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: users
    } as const
}

export default usersReducer;

