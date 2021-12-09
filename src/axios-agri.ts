import axios from 'axios'
import { backend_local_url } from './constants';

const axiosInstance = axios.create({
    baseURL: backend_local_url
});

export default axiosInstance;