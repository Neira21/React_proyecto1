import React, { useState,useEffect } from 'react'

const initialForm = {
    id:null,
    name:"",
    type:""
}

export default function CrudForm({createData, updateData, dataToEdit, setDataToEdit}){
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit);
      }else{
        setForm(initialForm);
      }
    
    }, [dataToEdit])
    

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!form.name || !form.type){
            alert("Datos incompletos")
            return;
        }

        if(form.id === null ){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    };
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div>
            { (!dataToEdit) ? <h3>Agregar nuevo Pokemón</h3> : <h3>Editar Pokemón</h3> }
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" placeholder="Ingrese nombre" onChange={handleChange}
                value={form.name}/>
                <input type="text" name="type" placeholder="Ingrese tipo" onChange={handleChange}
                value={form.type}/>
                <input type="submit" value="Ingresar nuevo" />
                <input type="reset" value="Resetear" onClick={handleReset} />
            </form>
        </div>
    )
}

