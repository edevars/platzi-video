import React from 'react' //Crear nuestros componenetes
import ReactDOM, {render} from 'react-dom' //Renderizar los componentes
// import Playlist from './src/playlist/components/playlist.js'
import data from '../api.json'
import Home from '../pages/containers/home';
//console.log('Hola mundo!');
const home_container = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré)
// const holaMundo = <h1> ¡Hola mundo! </h1>;

render(<Home data={data}/>, home_container);
