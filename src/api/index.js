import axios from "axios"
const instance = axios.create({
    baseURL: "http://bmamedov.beget.tech/api",
    withCredentials: true,
})

instance.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = '*'; // CORS için izin
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'; // Yöntemlere izin
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'; // Başlıklara izin
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default instance;