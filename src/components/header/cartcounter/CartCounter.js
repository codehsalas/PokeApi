import React from 'react'
import './cartcounter.css'

//Material UI
import Button from '@material-ui/core/Button';
import {Icon, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyle = makeStyles({
  btnstyle:{
    background: '#FF8E53',
    border: 0,
    color: 'white',
    padding: '10px 30px'
  }

})


const CartCounter = ( {stock} ) => {
  return (
    <div className="cart-counter">
        <Button variant="contained" color="secondary">
          <Icon>add</Icon>Carrito: {stock}
        </Button>
        <p></p>
    </div>
  )
}

export default CartCounter
