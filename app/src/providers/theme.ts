import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"`
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#e1e1e1de'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#e1e1e1de'
        },
        notchedOutline: {
          borderColor: '#e1e1e1de',
          '&:hover': {
            borderColor: '#e1e1e1de'
          }
        }
      }
    }
  }
})
