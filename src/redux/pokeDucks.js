import axios from "axios"

// CONSTANTES
const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

// TYPES
const OBTENER_POKEMONES_EXITO = 'OBTENER POKEMONOS EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const ANTERIORES_POKEMONES_EXITO = 'ANTERIORES_POKEMONES_EXITO'
const INFO_POKEMONES_EXITO = 'INFO_POKEMONES_EXITO'

// REDUCERS
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
          return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
          return {...state, ...action.payload}
        case ANTERIORES_POKEMONES_EXITO:
        return {...state, ...action.payload}
        case INFO_POKEMONES_EXITO:
        return {...state, unPokemon: action.payload}

        default:
          return state
    }
}

// ACCIONES

// DETALLE POKEMON (CARD)
export const unPokeDetalleAccion = (url = "https://pokeapi.co/api/v2/pokemon/1/") => async (dispatch) =>{

  if(localStorage.getItem(url)){

     dispatch({
      type: INFO_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(url))
    })
    return
  }

  try {
    const res = await axios.get(url)
    console.log(res.data)
    dispatch({
      type: INFO_POKEMONES_EXITO,
      payload: {
        nombre : res.data.name,
        ancho: res.data.weight,
        alto: res.data.height,
        foto: res.data.sprites.front_default
      }
    })
    localStorage.setItem(url, JSON.stringify({
      nombre : res.data.name,
      ancho: res.data.weight,
      alto: res.data.height,
      foto: res.data.sprites.front_default
    }))

  }catch(error) {
    console.log(error)

  }

}



// 1 - OBTENER LISTADO DE 20 POKEMONES
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

  if(localStorage.getItem('offset=0')){
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem('offset=0'))
    })
    console.log("Los datos guardados")
    return
  }

  try{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      dispatch({
        type: OBTENER_POKEMONES_EXITO,
        payload: res.data
      })
      localStorage.setItem('offset=0', JSON.stringify(res.data))

  }catch(error){
    console.log(error)
  }
}

// ACCIONES
// 2 - SIGUIENTE LISTADO DE 20 POKEMONES
export const siguientePokemonAccion = (numero) => async (dispatch, getState) => {

  const next = getState().pokemones.next

  if(localStorage.getItem(next)){
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(next))
    })
    console.log("Datos guardados")
    return
  }

      try {
          console.log("Datos desde la API")
          const res = await axios.get(next);
          dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
          })
        localStorage.setItem(next, JSON.stringify(res.data))

      } catch (error) {
          console.log(error);
      }
}

// ACCIONES
// 3 - ANTERIORES LISTADO DE 20 POKEMONES
export const anterioresPokemonAccion = () => async (dispatch, getState) => {

  const previous = getState().pokemones.previous

  if(localStorage.getItem(previous)){
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(previous))
    })
    console.log("Datos guardados")
    return
  }

  try {
      console.log("Datos desde la API")
      const res = await axios.get(previous);
      dispatch({
        type: ANTERIORES_POKEMONES_EXITO,
        payload: res.data
      })

  } catch (error) {
      console.log(error);
  }
}