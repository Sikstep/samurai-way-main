import {AllACTypes, UserType} from './Types';

export type initialUsersType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
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
    ],
    pageSize: 5,
    totalCount: 20,
    currentPage: 2

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
        case 'SET-CURRENT-PAGE': {
            stateCopy = {...state, currentPage: action.currentPage}
        }
        return  stateCopy
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

export default usersReducer;

