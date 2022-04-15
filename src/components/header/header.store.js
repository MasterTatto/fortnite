import {API} from "../../API/getUserInfo";

const initialState = {
    isUserLogin: false
}

export const headerStore = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USER' : {
            return {
                ...state,
                user: action.user,
                battlePass: action.battlePass,
                image: action.image
            }
        }
        case 'TOGGLE_LOGIN' : {
            return {
                ...state,
                isUserLogin: action.login
            }
        }

        default: {
            return state
        }
    }
}

export const toggleLoginAC = (login) => {
    return {
        type: 'TOGGLE_LOGIN', login
    }
}
const getUserAC = (user, battlePass, image) => {
    return {
        type: 'GET_USER', user, battlePass, image
    }
}


export const getUserTC = (name) => async (dispatch) => {
    try {
        const user = await API.getUserInfo(name)
        dispatch(toggleLoginAC(true))
        dispatch(getUserAC(user?.data?.data?.account, user?.data?.data?.battlePass,user?.data?.data?.image))

    } catch (err) {
        dispatch(toggleLoginAC(false))
    }


}