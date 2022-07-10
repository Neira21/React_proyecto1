import React, {useEffect, useState} from "react";
import Navbar from "./componentsApp2/Navbar";
import { Characters } from "./componentsApp2/Characters";
import { Pagination } from "./componentsApp2/Pagination";


function App() {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    const url = "https://rickandmortyapi.com/api/character/";

    const fetchCharacter = async (url) =>{
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
        })
        .catch(error => console.log(error));
    }
    
    const onPrevius = () => {
        fetchCharacter(info.prev)
    }
    const onNext = () => {
        fetchCharacter(info.next)
    }

    useEffect(() => {
        fetchCharacter(url);
    }, [])
    

    return (
     <>
        <Navbar titulo = "Rick and Morty App"/>
        <div className="container mt-5">
            <Pagination 
                prev={info.prev} 
                next={info.next} 
                onPrevius={onPrevius} 
                onNext={onNext}>    
            </Pagination>
            <Characters characters={characters}></Characters>
            <Pagination 
                prev={info.prev} 
                next={info.next} 
                onPrevius={onPrevius} 
                onNext={onNext}>    
            </Pagination>
        </div>
     </> 
  
    )
  }
  
  export default App;