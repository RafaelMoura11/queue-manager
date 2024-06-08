import { createContext } from 'react';
import ContextInterface from '../interfaces/Context';

const MyContext = createContext<ContextInterface>({
    token: "",
    setToken: () => {}
});

export default MyContext;
