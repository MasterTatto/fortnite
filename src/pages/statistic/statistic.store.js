import {API} from "../../API/getUserInfo";

const initialState = {}

export const statisticStore = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USER_STATISTIC' : {
            return {
                ...state,
                userStatistic: action.userStatistic,
                images: action.images
            }
        }

        default: {
            return state
        }
    }
}

const getUserStatisticAC = (userStatistic, images) => {
    return {
        type: 'GET_USER_STATISTIC', userStatistic, images
    }
}


export const getUserStatisticTC = (name, timeWindow = 'lifetime', device, typeGame, image = 'keyboardMouse') => async (dispatch) => {
    try {
        const information = await API.getUserStatistic(timeWindow, image, name)
        dispatch(getUserStatisticAC(information.data.data.stats[device][typeGame] || [], information.data.data.image))
    } catch (e) {
        console.log(e)
    }
}