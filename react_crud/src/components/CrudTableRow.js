import React from 'react'


const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  let {name, type, id} = el;
  return (
        <tr>
            <td>{el.name}</td>
            <td>{el.type}</td>
            <td>
                <button onClick={()=> setDataToEdit(el)}>Actualizar</button>
                <button onClick={()=> deleteData(id)} >Eliminar</button>
            </td>
        </tr>
  )
}

export default CrudTableRow