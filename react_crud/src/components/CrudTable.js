import React from 'react'
import CrudTableRow from './CrudTableRow'

const TableForm = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
      <h3>Lista de Pokemons</h3>
      <table>
          <thead>
              <tr>
                  <td>Nombre</td>
                  <td>Tipo</td>
                  <td>Acciones</td>
              </tr>
          </thead>
          <tbody>
          
          {data.length === 0 ? (
            (
              <tr>
                <td colSpan="3">Sin datos</td>
                {console.log(data)}
              </tr>
            )
            
            ) :data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )) }

          </tbody>
          
      </table>
    </div>
  )
}

export default TableForm