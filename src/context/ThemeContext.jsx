import { Children, createContext, useState } from "react";
import theme from "../theme";
import { ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";


export const ThemeContext = createContext(null);


const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const currentTheme = theme(mode);

    

    const toggleMode = () => {
        setMode((prev) => prev === 'light' ? 'dark' : 'light');
        console.log(mode)
    }

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }} >
            <ThemeProvider theme = {currentTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;