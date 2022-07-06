import React, {Component} from "react";
import data from "../helpers/data.json";

function ElementoDeLista(props){
    return(
        <li>
            <a href={props.del.web} > {props.del.name} </a>
        </li>
    )
}


export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons:['Verano','Otoño','Invierno','Primavera'],
        };
    }

    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((season) => (
                            <li key={season}>{season}</li>
                        ))
                    }
                </ol>
                <h3>Framework FrontEnd Javascript</h3>
                <ul>
                    {
                        data.frameworks.map((el) => (
                            <ElementoDeLista key={el.id} del={el} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}