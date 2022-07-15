import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
      id:1,
      name: "Pikachu",
      type: "Electrico"
    },
    {
      id:2,
      name: "Squirtle",
      type: "Agua"
    },
    {
      id:3,
      name: "Aron",
      type: "Acero"
    },
    {
      id:4,
      name: "Blaziken",
      type: "Fuego/Lucha"
    },
    {
      id:5,
      name: "Gengar",
      type: "Fantasma/Veneno"
    },
    {
      id:6,
      name: "Charizard",
      type: "Fuego"
    },
    {
      id:7,
      name: "treecko",
      type: "planta"
    }
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDb );
    const [dataToEdit, setDataToEdit] = useState(null)
  
    const createData =(data)=>{
      data.id= Date.now();
      setDb([...db, data]);
    }
    const updateData =(data)=>{
      let newData = db.map(el => el.id === data.id ? data:el);
      setDb(newData);
    }
    const deleteData =(id)=>{
        let isDelete = window.confirm(
          `¿Desea eliminar el registro con el id ${id}?`
        );
        if(isDelete){
          let newData = db.filter(el=>el.id !== id);
          console.log(newData);
          setDb(newData);
        }else{
          return;
        }
    }
    return (
        <div>
            <h2>CrudApp</h2>
            <article className="grid-1-2">
              <CrudForm 
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
              />
              <CrudTable 
                  data={db}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
              />
            </article>
        </div>
    )
}
export default CrudApp