import { createTheme } from '@mui/material'

const blk = '#14171A'
const blu = '#1DA1F2'
const gre = '#657786'
const liGre = '#AAB8C2'

export default createTheme({
  palette: {
    common: {
      black: blk,
      blue: blu,
      grey: gre,
      lightGrey: liGre,
    },
    primary: {
      main: blu,
    },
    secondary: {
      main: gre,
    },
  },
})
