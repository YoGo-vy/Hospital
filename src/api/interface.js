import axios from './httpService'
export default {
  getJson(name = 'test') {
    return axios.get(`hotel/static/json/${name}.json`)
  },
  getLevels() {
    return axios.get(`/api/rest/patient/levels`)
  },
  getRooms() {
    return axios.get(`/api/rest/patient/rooms`)
  },
}
