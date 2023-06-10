import Cookies from 'js-cookie';

export const storeTokenInCookie = (token: string) => {
    Cookies.set('jwt_token', token, { expires: 7 });
};

export const getTokenFromCookie = () => {
    return Cookies.get('jwt_token');
};

