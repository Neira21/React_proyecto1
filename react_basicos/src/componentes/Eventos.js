import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(e){
        console.log("Sumando");
        this.setState(
            {
                contador: this.state.contador + 1
            }
        )
    }   
    restar(e){
        console.log("Restando");
        this.setState(
            {
                contador: this.state.contador - 1
            }
        )
    }
    render(){
        return(
            <div>
                <h2>Eventos en componente de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar} >+</button>    
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }    
}

export class EventosES7 extends Component{
    state = {
        contador: 0,
    };
        
    sumar = (e) => {
        console.log("Sumando");
        this.setState(
            {
                contador: this.state.contador + 1
            }
        )
    }       
    restar = (e) => {
        console.log("Restando");
        this.setState(
            {
                contador: this.state.contador - 1
            }
        )
    }
    render(){
        return(
            <div>
                <h2>Eventos en componente de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar } >+</button>    
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }    
}


/*function Boton (props){
    return(
        <button onClick={props.MyOnClick} >
            Botón hecho en componente
        </button>
    )
}*/

// const Boton = (props) =>(
//     <button onClick={props.MyOnClick}>Botón hecho en componente</button>
// )

const Boton = ({MyOnClick}) =>(
    <button onClick={MyOnClick}>Botón hecho en componente</button>
)

export class MasSobreEventos extends Component{
    
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.target)
    }
    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e, "Hola pasando parámetros en un evento" )} >Saludar</button>
                <Boton 
                    onClick={(e) => 
                    this.handleClick(e, "Hola pasando parámetros en un evento" )
                    } 
                />
                <Boton 
                    MyOnClick={(e) => 
                    this.handleClick(e, "Hola pasando parámetros en un evento" )
                    } 
                />
            </div>
        )
    }
}