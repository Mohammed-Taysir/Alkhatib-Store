import { Children, createContext, useState } from "react";


export const LoginContext = createContext(null);

const LoginContextProvider = ({children}) => {
    const [isLoggedin, setIsLoggedin] = useState(!!localStorage.getItem('userToken'));

    return <LoginContext.Provider value = {{isLoggedin, setIsLoggedin}}>
        {children}
    </LoginContext.Provider>

}

export default LoginContextProvider;