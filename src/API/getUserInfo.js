import axios from "axios";

const config = {
    headers: {
        authorization: '2a3e66eb-9036-4c0a-986d-c1c67c0313e4'
    }
}

export const API = {
    getUserInfo: (name) => {
        return axios.get(`https://fortnite-api.com/v2/stats/br/v2/?name=${name}`, config)
    },
    getUserStatistic: (timeWindow, image, name) => {
        return axios.get(`https://fortnite-api.com/v2/stats/br/v2/?timeWindow=${timeWindow}&image=${image}&name=${name}`, config)
    },
}