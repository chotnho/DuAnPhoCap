import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend-googlesheet.onrender.com/api',
    timeout: 30000, 
    headers: { 'Content-Type': 'application/json' }, 
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;
