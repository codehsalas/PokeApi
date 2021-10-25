import { Typography } from '@material-ui/core';

import './App.css';
import Navbar from './components/header/navbar/Navbar';
import Home from './components/home/Home';
import Pokemones from './components/pokemones/Pokemones'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'

import { Provider } from 'react-redux'
import generateStore from './redux/store'


function App() {

  const store = generateStore()

  return (
    <ThemeProvider theme={theme}>

      <Provider  store = {store}>
        <Navbar />
        <Home />
        <div className="contenedor-general">

           <Typography variant="h3" color="initial" align="center"></Typography>
           <Pokemones />
        </div>

      </Provider>

    </ThemeProvider>
  );
}

export default App;
