import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import { Characters } from './components/Characters';
import { Pagination } from './components/Pagination';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const [abrirFiltro, setAbrirFiltro] = useState(false);
  const [nombre, setNombre] = useState('');

  const url = "https://rickandmortyapi.com/api/character";

  const abrirCerrarFiltro = () => {
    setAbrirFiltro(!abrirFiltro);
  }

  const obtenerDatos = async (url) => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    setPersonajes(datos.results);
    setInfo(datos.info);
    
  }
  const filtrarPorStatus = (status) => {
    const url = `https://rickandmortyapi.com/api/character/?status=${status}`;
    obtenerDatos(url);
  }
  const filtrarPorEspecie = (especie) => {
    const url = `https://rickandmortyapi.com/api/character/?species=${especie}`;
    obtenerDatos(url);
  }
  const filtrarPorGenero = (genero) => {
    const url = `https://rickandmortyapi.com/api/character/?gender=${genero}`;
    obtenerDatos(url);
  }
  const onPrevius = () => {
    obtenerDatos(info.prev)
  }
  const onNext = () => {
    obtenerDatos(info.next)
  }
  const buscarPorNombre = (nombre) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`;
    obtenerDatos(url);
  }


  const handleNombre = (e) => {
    e.preventDefault();
    buscarPorNombre(e.target.value);
    setNombre(e.target.value);
  }

  
  useEffect(() => {
    obtenerDatos(url);
  }, [])

  return (
    <div>
      
      <Navbar titulo={"Rick & Morty"} />
      
      <button onClick={abrirCerrarFiltro} className='btn btn-primary'>Filtrar</button>
      {
        abrirFiltro ?
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title text-center'>Filtrar</h5>
                    <hr />
                    <p className='card-text clase1'>Filtrar por estado</p>
                    <ul className='listaEstado'>
                      <li onClick={() => filtrarPorStatus("alive")} >Vivos</li>
                      <li onClick={() => filtrarPorStatus("dead")} >Muertos</li>
                      <li onClick={() => filtrarPorStatus("unknown")} >Desconocido</li>
                    </ul>
                    <p className='card-text'>Filtrar por especie</p>
                    <ul className='listaEstado'>
                      <li onClick={() => filtrarPorEspecie("Human")} >Humanos</li>
                      <li onClick={() => filtrarPorEspecie("Alien")} >Aliens</li>
                    </ul>
                    <p className='card-text'>Filtrar por género</p>
                    <ul className='listaEstado'>
                    <li onClick={()=>filtrarPorGenero("female")} > Mujeres</li>
                    <li onClick={()=>filtrarPorGenero("male")} > Hombres</li>
                    <li onClick={()=>filtrarPorGenero("genderless")} > Sin género </li>
                    <li onClick={()=>filtrarPorGenero("unknown")} > Desconocido</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          null
      }
      <br/>
      
      <input type="text" placeholder="Buscar personaje" className="form-control" value={nombre} onChange={handleNombre} style={{width:500, margin:"auto"}} />        

      <br/>   
      

      
      
      {
        personajes === undefined ?
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title text-center'>No hay personajes</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className='container'>
            <Pagination 
                prev={info.prev} 
                next={info.next} 
                onPrevius={onPrevius} 
                onNext={onNext}>    
            </Pagination>
            <Characters characters={personajes} />
            <Pagination 
                prev={info.prev} 
                next={info.next} 
                onPrevius={onPrevius} 
                onNext={onNext}>    
            </Pagination>
          </div>
      }

      
      
    </div>
  )
}

export default App
