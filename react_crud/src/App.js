import React, {useState} from "react";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";



function App() {
  
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr/>
      <CrudApi></CrudApi>
      <hr/>
      <CrudApp></CrudApp>
      <hr/>
    </>
  );
}

export default App;
