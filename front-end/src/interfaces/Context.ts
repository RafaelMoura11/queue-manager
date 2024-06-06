import { Dispatch } from "react";


export default interface Context {
    token: string;
    setToken: Dispatch<React.SetStateAction<string>>;
}
