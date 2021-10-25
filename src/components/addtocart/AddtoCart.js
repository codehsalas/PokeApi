import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import {Icon, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
  btnstyle:{
    background: '#FF8E53',
    border: 0,
    color: 'white',
    padding: '10px 30px'
  }

})

const AddtoCart = () => {

const clases = useStyle()


  return (
    <div align="center">
     {/*  <Button variant="contained" color="primary">
        <Icon>add</Icon>Añadir
      </Button>
      <Button variant="contained" color="secondary">
        <Icon>delete</Icon>Quitar
      </Button> */}

    </div>
  )
}

export default AddtoCart