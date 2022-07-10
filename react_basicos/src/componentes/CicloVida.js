import React, {Component} from "react";

class Reloj extends Component{
    

    componentWillUnmount(){
        //console.log(3,"El componente ha sido eliminado del DOM");
    }

    render(){
        return(
            <>
            <h3>{this.props.hora}</h3>
            </>
        )
    }

}

export default class CicloVida extends Component{
    
    constructor(props){
        super(props);
        //console.log(0, "El componente se inicializa, aún no está en el DOM")    
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        }
        this.temporizador = null;
    }
    
    componentDidMount(){
        //console.log(1, "El componente se ha montado en el DOM");
    }

    

    empezarReloj = () =>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000);
    }

    iniciar = () =>{
        this.empezarReloj();
        this.setState({
            visible: true,
        })
    }
    
    detener = () =>{
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        })
    }

    render(){
        //console.log(4, "El componente CicloVida se va a renderizar en el DOM");

        return(
            <>
            <h2>Ciclo de vida de los componentes</h2>
            {this.state.visible && <Reloj hora = {this.state.hora}/>} 
            {/* <p>{this.state.hora}</p> */}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}

