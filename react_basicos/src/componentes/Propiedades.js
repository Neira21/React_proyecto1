import React from "react";
import Proptypes from "prop-types"; 


export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "True": "False" }</li>
                <li>{props.arreglo.join(", ") }</li>
                <li>{props.objeto.nombre + " tiene "+ props.objeto.edad + " años" }</li>
                <li>{props.arreglo.map(elemento => props.funcion(elemento)).join(", ") }</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}


Propiedades.defaultProps = {
    porDefecto: "Las propiedades"
}

Propiedades.propTypes = {
    numero: Proptypes.number.isRequired,
}

