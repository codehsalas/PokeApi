import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function MediaCard() {
  //const classes = useStyles();

  const pokemones = useSelector(store => store.pokemones.array)
  console.log(pokemones)

  return (


      <ul> { pokemones.map(item => ( <li key={item.name}>{item.name}</li>)) } </ul>

  );
}