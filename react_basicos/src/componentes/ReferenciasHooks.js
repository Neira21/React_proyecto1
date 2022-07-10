import React, {useRef} from "react";

export default function ReferenciasHooks(){
    let refMenu = useRef();
    let refMenuBtn = useRef();
    
    const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menú") {
        refMenuBtn.current.textContent = "Cerrar";
        refMenu.current.style.display = "block";
      } else {
        refMenuBtn.current.textContent = "Menú";
        refMenu.current.style.display = "none";
      }
    };
  
    return (
      <>
        <h2>Referencias</h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
          Menú
        </button>
        <nav id="menu" ref={refMenu} style={{ display: "none" }}>
          {/* <a href="#">Sección 1</a>
          <br />
          <a href="#">Sección 2</a>
          <br />
          <a href="#">Sección 3</a>
          <br />
          <a href="#">Sección 4</a>
          <br />
          <a href="#">Sección 5</a> */}
          <a>Hola</a>
        </nav>
      </>
    );
}