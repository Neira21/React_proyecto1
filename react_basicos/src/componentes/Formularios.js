import React, {useState} from 'react'

/*
function Formularios (){
  const [nombre, setNombre] = useState("");
  const [js, setJs] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nombre");
  }

  return (
    <>
    <h2>Formularios</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor='nombre'>Nombre:</label>
      <input type="text" id='nombre' name='nombre' value={nombre} onChange={(e)=>{
        setNombre(e.target.value)
      }} />
      <p>Elige tu JS favorito</p>
      <input type="radio" name="js" id='vanilla' value="Vanilla" onChange={(e)=>{setJs(e.target.value)}}/>
      <label htmlFor='vanilla'>Vanilla</label>
      <input type="radio" name="js" id='react' value="React" onChange={(e)=>{setJs(e.target.value)}}/>
      <label htmlFor='react'>React</label>
      <input type="radio" name="js" id='angular' value="Angular" onChange={(e)=>{setJs(e.target.value)}}/>
      <label htmlFor='angular'>Angular</label>
      <input type="radio" name="js" id='Vue' value="Vue" onChange={(e)=>{setJs(e.target.value)}}/>
      <label htmlFor='Vue'>Vue</label>
      <input type="radio" name="js" id='svelte' value="Svelte" onChange={(e)=>{setJs(e.target.value)}}/>
      <label htmlFor='svelte'>Svelte</label>

      <p>Elige tu lenguaje de programación</p>
      <select name='lenguaje' onChange={(e)=>{setLenguaje(e.target.value)}}>
        <option value=''>---</option>
        <option value='Java'>Java</option>
        <option value='C++'>C++</option>
        <option value='C#'>C#</option>
        <option value='Python'>Python</option>
        <option value='JavaScript'>JavaScript</option>
      </select>
      <br/>
      <label htmlFor='terminos'>Acepto términos y condicionales</label>
      <input type="checkbox" id='terminos' name='terminos' onChange={(e)=>setTerminos(e.target.checked)}></input>
      <br/>
      <input type="submit"/>
    </form>
    </>
  )
}
export default Formularios
*/


function Formularios (){
  const [form, setForm] = useState({});

  const handleChange = (e) => {
     setForm({
      ...form,
      [e.target.name]: e.target.value,
     })
  }

  const handleChecked = (e) => {
    setForm({
     ...form,
     [e.target.name]: e.target.checked,
    })
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nombre");
  }

  return (
    <>
    <h2>Formularios</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor='nombre'>Nombre:</label>
      <input type="text" id='nombre' name='nombre' value={form.nombre} onChange={handleChange}/>
      <p>Elige tu JS favorito</p>
      <input type="radio" name="js" id='vanilla' value="Vanilla" onChange={handleChange}/>
      <label htmlFor='vanilla'>Vanilla</label>
      <input type="radio" name="js" id='react' value="React" onChange={handleChange}/>
      <label htmlFor='react'>React</label>
      <input type="radio" name="js" id='angular' value="Angular" onChange={handleChange}/>
      <label htmlFor='angular'>Angular</label>
      <input type="radio" name="js" id='Vue' value="Vue" onChange={handleChange}/>
      <label htmlFor='Vue'>Vue</label>
      <input type="radio" name="js" id='svelte' value="Svelte" onChange={handleChange}/>
      <label htmlFor='svelte'>Svelte</label>

      <p>Elige tu lenguaje de programación</p>
      <select name='lenguaje' onChange={handleChange}>
        <option value=''>---</option>
        <option value='Java'>Java</option>
        <option value='C++'>C++</option>
        <option value='C#'>C#</option>
        <option value='Python'>Python</option>
        <option value='JavaScript'>JavaScript</option>
      </select>
      <br/>
      <label htmlFor='terminos'>Acepto términos y condicionales</label>
      <input type="checkbox" id='terminos' name='terminos' onChange={handleChecked}></input>
      <br/>
      <input type="submit"/>
    </form>
    </>
  )
}
export default Formularios