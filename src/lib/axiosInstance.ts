import axios from 'axios';
import {storeTokenInCookie, getTokenFromCookie} from "./cookiesServices";

const baseURL = `${process.env.API_URL}`;

export const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = getTokenFromCookie();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});