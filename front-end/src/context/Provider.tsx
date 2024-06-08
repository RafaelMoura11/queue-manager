import { useState, useEffect } from 'react';
import MyContext from './MyContext';

type Props = {
    children: React.ReactNode
}

function Provider({ children }: Props) {
    const [token, setToken] = useState(() => localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
        localStorage.setItem('token', token);
        } else {
        localStorage.removeItem('token');
        }
    }, [token]);

    const statesAndFunctions = {
        token,
        setToken
    };

    return (
        <MyContext.Provider value={ statesAndFunctions }>
        { children }
        </MyContext.Provider>
    );
}

export default Provider;
