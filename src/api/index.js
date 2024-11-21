import axios from "axios"
export default axios.create({
    baseURL: "http://bmamedov.beget.tech/api",
    withCredentials: true,
})
