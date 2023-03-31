import {v1} from 'uuid';
import {AllACTypes, UserType} from './Types';

export type initialUsersType = {
    users: UserType[]
}

const initialUsers: initialUsersType = {
    users: [
        {
            id: v1(),
            userName: 'Dmitry K.',
            userStatus: `I'm looking for a job right now`,
            location: {country: 'Belarus', city: 'Minsk'},
            friendStatus: true
        },
        {
            id: v1(),
            userName: 'Svetlana D.',
            userStatus: `I'm so pretty`,
            location: {country: 'Belarus', city: 'Minsk'},
            friendStatus: false
        },
        {
            id: v1(),
            userName: 'Sergei S.',
            userStatus: `I like football!!!`,
            location: {country: 'Ukrane', city: 'Kiev'},
            friendStatus: true
        },
        {
            id: v1(),
            userName: 'Andrew T.',
            userStatus: `I'm free to help you...`,
            location: {country: 'United State', city: 'Philadelphia'},
            friendStatus: true
        },
        {
            id: v1(),
            userName: 'Kosty S.',
            userStatus: `I'm freedom`,
            location: {country: 'Belarus', city: 'Minsk'},
            friendStatus: true
        },
        {
            id: v1(),
            userName: 'Andrew T.',
            userStatus: `I'm free to help you...`,
            location: {country: 'United State', city: 'Philadelphia'},
            friendStatus: false
        },
        {
            id: v1(),
            userName: 'Andrew T.',
            userStatus: `I'm free to help you...`,
            location: {country: 'United State', city: 'Philadelphia'},
            friendStatus: false
        },
    ]
};

const usersReducer = (state: initialUsersType = initialUsers, action: AllACTypes): initialUsersType => {
    let stateCopy;
    switch (action.type) {
        case 'CHANGE-FRIENDS-STATUS':
            stateCopy = {...state,
                users: state.users.map(el => el.id === action.payload.userID ? {
                    ...el,
                    friendStatus: action.payload.newStatus
                } : el)
            }
            return stateCopy;
    }

    return state;

};

export const changeFriendUserStatusAC = (userID: string, newStatus: boolean) => {
    return {
        type: 'CHANGE-FRIENDS-STATUS',
        payload: {userID, newStatus}
    } as const
}

export default usersReducer;

