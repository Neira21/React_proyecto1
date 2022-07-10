import React, {useState}  from "react";

export default function ContadorHooks(props){
    console.log(useState);
    const [contador, setcontador] = useState(0);

    const sumar = () =>{
        setcontador(contador + 1);
    }
    const restar = () => {
        setcontador(contador - 1);
    }

    return(
        <>
        <h2>Hooks - useState</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        </>
    )
}