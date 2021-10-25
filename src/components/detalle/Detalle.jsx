import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { unPokeDetalleAccion } from '../../redux/pokeDucks'

import './detalle.css'


const Detalle = () => {

  const dispatch = useDispatch()

  React.useEffect(() =>{
    const fetchData = () => {
      dispatch(unPokeDetalleAccion())
    }
    fetchData()
  }, [dispatch])


  const pokemon = useSelector(store => store.pokemones.unPokemon)
  console.log(pokemon)

  return pokemon ?(
    <>
      <div className="card-detalles">
        <div className="card">
          <h3>Detalle Pokemon</h3>
          <img src = {pokemon.foto} width="200"/>

          <div className="card-text">
            <h2>{pokemon.nombre}</h2>
            <h4>Alto: {pokemon.alto}</h4>
            <h4>Ancho:{pokemon.ancho}</h4>
          </div>

        </div>
      </div>
    </>
  ): null
}

export default Detalle
