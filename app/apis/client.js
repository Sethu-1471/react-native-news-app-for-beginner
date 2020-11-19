import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.8.104:3000/api/'
})