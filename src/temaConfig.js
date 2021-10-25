import { createMuiTheme } from '@material-ui/core/styles'
import { lightGreen, purple } from '@mui/material/colors'

const theme = createMuiTheme({
  palette:{
    primary:{
      main: lightGreen[300]
    },
    secondary:{
      main: purple[200]
    }
  }

})

export default theme;