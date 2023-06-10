import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {getTokenFromCookie} from '@/lib/cookiesServices';
import jwt, {JwtPayload} from 'jsonwebtoken';

// @ts-ignore
const Protected = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const checkToken = () => {
            const token = getTokenFromCookie();

            if (!token) {
                router.push('/login');
                return;
            }

            const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`) as JwtPayload;
            if (!decodedToken) {
                router.push('/login');
                return;
            }

            const expirationTime: number | undefined = decodedToken.exp;
            if (expirationTime && Date.now() >= expirationTime * 1000) {
                // Token expired, route to the login page
                router.push('/login');
                return;
            }
        };

        checkToken();
    }, [router]);

    return <>{children}</>;
};

export default Protected;