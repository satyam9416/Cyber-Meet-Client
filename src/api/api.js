import axios from 'axios'
axios.defaults.withCredentials = true

const API = axios.create({
    baseURL: 'https://cybermeet-server.onrender.com'
})

export default API;