export const UserTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export const setCurrentUSer = (user: any) => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: user
})

export const authReducer = (state = {currentUser : {}}, action: any) => {
    switch (action.type) {
        case UserTypes.SET_CURRENT_USER: {
            return { ...state, currentUser: action.payload }
        }
        default:
            return state;
    }
}