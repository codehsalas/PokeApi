import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles({
  minHeight: 56
})

const Navbar = () => {

  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6">
            Detalles Pokemon
          </Typography>
           {/*Contador del carrito de compras*/}
           {/* <div className="counterStyle"><Cartcounter stock={1}/></div> */}
        </Toolbar>
      </AppBar>
      <div className={classes.minHeight}></div>

    </div>
  )
}

export default Navbar
