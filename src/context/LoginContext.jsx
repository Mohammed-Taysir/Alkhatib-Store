import { Children, createContext, useState } from "react";


export const LoginContext = createContext(null);

const LoginContextProvider = ({children}) => {
    const [isLoggedin, setIsLogin] = useState(!!localStorage.getItem('userToken'));

    return <LoginContext.Provider value = {{isLoggedin, setIsLogin}}>
        {children}
    </LoginContext.Provider>

}

export default LoginContextProvider;