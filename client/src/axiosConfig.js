import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'http://localhost:5500',
});

export default axiosBase;
