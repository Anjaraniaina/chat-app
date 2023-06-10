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

export interface ChannelCreate {
    name: string;
    type: string;
    members: Array<User>
}