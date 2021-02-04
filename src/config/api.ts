import axios from 'axios'

const apiJeager = 'https://api.jeager.io'

const jeagerInstance = axios.create({
  baseURL:apiJeager,
  timeout: 10000
})
// api trial request
type BodyTrial = {};
type HeaderTrial = {};

export default jeagerInstance;

export const requestTrialApi = (body:BodyTrial, headers:HeaderTrial) => jeagerInstance.post('/login',body,{headers})