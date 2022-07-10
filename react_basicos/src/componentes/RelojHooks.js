import React, {useState, useEffect} from "react";



function Reloj(props){
    return(
        <h3>
            {props.hora}
        </h3>
    )
}


export default function RelojHooks(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());  
    const [visible, setVisible] = useState(false);

    const empezarReloj = (valor) => setVisible(valor);

    useEffect(() => {
        let temporizador;
        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000);
        }else{
            clearInterval(temporizador);
        }
        return() => {
            // console.log("Fase de desmontaje");
            clearInterval(temporizador);
        }
    }, [visible]);

    return(
        <>
        <h2>Reloj usando hooks</h2>
        {visible && <Reloj hora = {hora}/>}
        <button onClick={()=>empezarReloj(true)}>Iniciar</button>
        <button onClick={()=>empezarReloj(false)}>Detener</button>
        </>
    )
}