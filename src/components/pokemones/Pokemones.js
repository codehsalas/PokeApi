import React from 'react'

//useDispatch es para consumir nuestra Accion
//useSelector es para leer el array o state principal
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anterioresPokemonAccion,unPokeDetalleAccion} from '../../redux/pokeDucks'

//Material UI
import {Button, Icon} from '@material-ui/core'
import Container from '@material-ui/core/Container';

//components
import Detalle from '../detalle/Detalle';

import './pokemones.css'



const Pokemones = () => {
  const dispatch = useDispatch()
  const pokemones = useSelector(store => store.pokemones.results)
  const next = useSelector(store => store.pokemones.next)
  const previous = useSelector(store => store.pokemones.previous)


  return (
    <>
    <Container className="container-pokemones">
      <h2>Listado pokemones</h2>
      <div className="listado-pokemones">
        <ul className="lista-pokemones">

          {
            pokemones.map(item => (
            <li key={item.name}>
            {item.name}
              <button
                onClick={() =>dispatch(unPokeDetalleAccion(item.url))}
                className="boton-detalle"
                color="primary"
                >
                  Ver detalle</button>
            </li>)
            )
          }
        </ul>

          <div className="botones-listado">
            {
              pokemones.length === 0 && //&& es la respuesta positiva
              <Button onClick = {() => dispatch(obtenerPokemonesAccion())} variant="contained" color="primary">
                <Icon>add</Icon>Obtener Pokemones
              </Button>
            }

            {
              next &&
              <Button onClick = {() => dispatch(siguientePokemonAccion(20))} variant="contained" color="primary">
                <Icon>add</Icon>Siguiente
              </Button>
            }

            {
              previous &&
              <Button onClick = {() => dispatch(anterioresPokemonAccion(20))} variant="contained" color="primary">
                <Icon>add</Icon>Anterior
              </Button>
            }

          </div>

      </div>

      <div classname="detalles-pokemones">
        <div classname="card-detalles">
          <Detalle />

        </div>

      </div>

    </Container>
    </>
  )
}

export default Pokemones
