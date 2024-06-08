import { useState } from 'react';
import MyContext from './MyContext';

type Props = {
    children: React.ReactNode
}

function Provider({ children }: Props) {
    const [token, setToken] = useState("");

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
