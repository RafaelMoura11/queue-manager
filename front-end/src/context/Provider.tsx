import MyContext from './MyContext';

function Provider({ children }) {

    const statesAndFunctions = {};

    return (
        <MyContext.Provider value={ statesAndFunctions }>
        { children }
        </MyContext.Provider>
    );
}

export default Provider;
