import {axiosInstance} from '@/lib/axiosInstance'
import {User, UserLogin, UserRegister} from "@/interfaces/interfaces";
import {storeTokenInCookie, getTokenFromCookie} from "@/lib/cookiesServices";
export const createUser = async (userData: UserRegister) => {
    try {
        const response = await axiosInstance.post('/users', userData);
        const { user } = response.data;
        storeTokenInCookie(user.token);
        return user;
    } catch (error) {
        console.error(error);
    }
};

export const loginUser = async (credentials: UserLogin) => {
    try {
        const response = await axiosInstance.post('/users/login', credentials);
        const { user } = response.data;
        storeTokenInCookie(user.token);
        return user;
    } catch (error) {
        console.error(error);
    }
};

export const getUserProfile = async () => {
    try {
        const response = await axiosInstance.get('/user');
        const { user } = response.data;
        return user;
    } catch (error) {
        console.error(error);
    }
};

export const updateUserProfile = async (userData: User) => {
    try {
        const response = await axiosInstance.put('/user', userData);
        const { user } = response.data;
        return user;
    } catch (error) {
        console.error(error);
    }
};
