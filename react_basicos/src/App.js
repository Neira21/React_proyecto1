import React from 'react';

import logo from './logo.svg';
import './App.css';

import Componente from './componentes/Componente';
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicional';
import RenderizadoElementos from './componentes/RenderizadoElementos';
import { EventosES6 , EventosES7, MasSobreEventos } from './componentes/Eventos';
import ComunicacionComponentes from './componentes/ComunicacionComponentes';
//import CicloVida from './componentes/CicloVida';
import AjaxApis from './componentes/AjaxApis';
import ContadorHooks from './componentes/ContadorHooks';
import ScrollHooks from './componentes/ScrollHooks';
import RelojHooks from './componentes/RelojHooks';
import AjaxHooks from './componentes/AjaxHooks';
import HooksPersonalizados from './componentes/HooksPersonalizados';
import ReferenciasHooks from './componentes/ReferenciasHooks';

function App() {
  //let estaciones = ['Verano', 'Otoño', 'Invierno', 'Primavera'];
  return (
    <div className="App">
      
        <header className="App-header">
        
          <section>
            <img   src={logo} className="App-logo" alt="logo" />
            <p>
              Editar <code>src/App.js</code> and save to reload.
            </p>
            {/* <ul>{estaciones.map((estacion,index) => (<li key={index}>{estacion}</li>))}</ul> */}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          
        </section>
        <section>
          <Componente mensaje = "Hola soy un componente desde una prop"></Componente>
          <hr/>
          <Propiedades 
          cadena = "Esto es una cadena"
          numero = {10}
          booleano = {true}
          arreglo = {[1,2,3,4,5]}
          objeto = {{nombre: "Juan", edad: 30}}
          funcion = {num => num*num}
          elementoReact = {<h1>Hola soy un elemento React</h1>}
          componenteReact = {<Componente mensaje="Soy un componente pasado como props"/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/> 
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          {/* <CicloVida/>
          <hr/> */}
          <AjaxApis/>
          <hr/>
          <ContadorHooks/>
          <hr/>
          <ScrollHooks/>
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksPersonalizados/>
          <hr/>
          <ReferenciasHooks/>
        </section>
           
      </header>
    </div>

  );
}

export default App;
