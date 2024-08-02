import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/admin',
});

api.interceptors.request.use(
    (config) => {
        const token = "1|vL1VcQXsc2Xrwx7klkc2Z3uf7jmPbeF2woTr2E4U00f52628";
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
