import axios from "@/api/axios";

const register = user => {
    return axios.post('/signup', user)
}

export default {
    register
}