import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import i18n from './i18n.jsx';



const direction  = i18n.dir()

const theme = (mode) => createTheme({
  direction: direction,
  typography: {
    direction: direction
  },
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
          default: "#fff" , // خلفية أساسية'rgba(0,0, 0, .1)'
          // paper: "#E5E7EB", // خلفية الكروت
        },

        favColor: {
          main: grey[300],
          secondary: grey[250]
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

export const createCacheWithDirection = (direction) => createCache({
  key: direction === "rtl" ? "muirtl" : "muiltr",
  stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [],
});

export default theme;

