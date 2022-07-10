import React, {useState, useEffect} from "react";


export default function ScrollHooks(){

    const [ScrollY, setScrollY] = useState(0);
    //const [nombre, setNombre] = useState("Juan");

    useEffect(() => {
        //console.log({ScrollY});
        const detectarScroll = () =>{
            setScrollY(window.pageYOffset);
        }
        window.addEventListener("scroll", detectarScroll);
    },[ScrollY]);

    // useEffect(() => {
    //     console.log("Cambio de scrolly");
    // } , [ScrollY]);
    


    return(
        <>
        <h2>Hooks - useEffect y el ciclo de vida</h2>
        <p>Scroll de navegación: {ScrollY}px</p>
        </>
    )
}