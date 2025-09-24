import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


const theme = (mode) => createTheme({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
        // palette values for light mode

        secondary: {
          main: "#4ADE80", // أخضر بارز
        },
        text: {
          primary: "#2B3445",
        },
        neutral: {
          main: "#64748B",
          secondary: '#035186',
        },
        background: {
          default: "#FFFFFF", // خلفية أساسية
          // paper: "#E5E7EB", // خلفية الكروت
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
        background: {
          default: "#111827", // خلفية أساسية داكنة
          paper: "#1F2937", // خلفية الكروت/الأقسام
        },
        text: {
          primary: "#fff",
        },
        light: {
          main: '#000'
        },
        primary: {
          main: "#60A5FA", // أزرق فاتح بارز
        },
        secondary: {
          main: "#4ADE80", // أخضر بارز
        },
      }),

  },
  components: {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: '#035186'
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: '#035186'
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: '#035186',
        "&.Mui-focused": {
          color: '#035186'
        },
      },
    },
  },
},
});

export default theme;