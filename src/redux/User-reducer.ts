import {AllACTypes, UserType} from './Types';

export type initialUsersType = {
    users: UserType[]
}

const initialUsers: initialUsersType = {
    users: [
        // {
        //     followed: true,
        //     id: 123,
        //     name: 'Dmitry K.',
        //     photos: {
        //         small: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
        //         large: null,
        //     },
        //     status: `I'm looking for a job right now`,
        //     uniqueUrlName: null,
        //     location: {country: 'Belarus', city: 'Minsk'},
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
                    followed: action.payload.newStatus
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

export const changeFriendUserStatusAC = (userID: number, newStatus: boolean) => {
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

