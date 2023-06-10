export interface User {
    name: string;
    bio: string;
    email: string;
    password: string;
}

export interface UserRegister {
    name: string,
    bio: string,
    email: string,
    password: string,
}

export interface UserLogin {
    email: string,
    password: string,
}