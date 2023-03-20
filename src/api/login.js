import axios from "@/api/axios";

const login = user => {
    return axios.post('/login', user)
}

export default {
    login
}