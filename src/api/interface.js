import axios from './httpService'
export default {
    getJson(name = 'test') {
        return axios.get(`hotel/static/json/${name}.json`)
    },
}