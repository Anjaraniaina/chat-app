import React, { createContext, useState } from 'react';
import {User} from "@/interfaces/interfaces";

interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};