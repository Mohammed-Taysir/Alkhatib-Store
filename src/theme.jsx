import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


const theme = (mode)=> createTheme({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445" , 
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
            secondry: grey[250]
          },
          light: {
            main: '#fff'
          }
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
            
          },
          text: {
            primary: "#fff",
          },
          light: {
            main: '#000'
          }
        }),
  },
});

export default theme;