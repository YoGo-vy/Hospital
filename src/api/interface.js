import axios from './httpService'
export default {
  getJson(name = 'test') {
    return axios.get(`hotel/static/json/${name}.json`)
  },
  getLevels() {
    return axios.get(`/api/rest/patient/levels`)
  },
  // 查询房间列表
  getRooms() {
    return axios.get(`/api/rest/patient/rooms`)
  },
  // 转诊
  Referral(){
    return axios.post(`/api/rest/patient/room`)
  }
}
