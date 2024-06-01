import MyContext from './MyContext';

type Props = {
    children: React.ReactNode
}

function Provider({ children }: Props) {

    const statesAndFunctions = {};

    return (
        <MyContext.Provider value={ statesAndFunctions }>
        { children }
        </MyContext.Provider>
    );
}

export default Provider;
