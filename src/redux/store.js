import { compose } from "@mui/system";
import { createStore, combineReducers, composed, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//importo mi reducer. Si tubiese otros reducers como usuarioReducer, los debo importar
import pokeReducer from './pokeDucks'


const rootReducer = combineReducers({
  //ingreso los reducers que voy a usar
  pokemones : pokeReducer
  //Ejemplo
  /*
  usuario : usersReducer
  pass : passReducer
  */
})

//Pregunto si tenemos la extension de Redux Developer Tools y en caso contrario, usamos compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Exportamos la funcion y configuramos el middleware
export default function generateStore(){

  /* a la constante store, le paso mi  rootReducer el cual combina todos mis reducers,
  luego le paso la extension de Chrome a la cual le paso el middleware que voy a usar
  que en este caso sera THUNK*/
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ));
  return store;

}