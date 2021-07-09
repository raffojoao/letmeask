import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss'
import './services/firebase';

//pega o <div id="root"></div> do HTML e coloca isso dentro dele
ReactDOM.render(
  <React.StrictMode>
    <App /> {/*esse App está vindo de outro arquivo */}
    {/* Seria possível trocar esse App por uma tag html diretamente */}
  </React.StrictMode>,
  document.getElementById('root')
);

