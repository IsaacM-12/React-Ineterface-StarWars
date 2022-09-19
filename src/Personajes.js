import {useEffect,useState} from 'react';
import axios from 'axios';
const Personajes = () => {

    const [personajes, setpersonaje] = useState([]);
    const [personajeId, setpersonajeId] = useState(0);
    const [personajeName, setpersonajeName] = useState("");
    const [personajeAge, setpersonajeAge] = useState(0);
    const [personajeHeight, setpersonajeHeight] = useState(0);
    const [personajeGender, setpersonajeGender] = useState("");
  // -----------------------------------------------------------------------------------------------------
  // Personaje
  // -----------------------------------------------------------------------------------------------------

  const setNameToPersonaje = (event) => {
    setpersonajeName(event.target.value);
  }

  const setAgeToPersonaje = (event) => {
    setpersonajeAge(event.target.value);
  }

  const setIdToPersonaje = (event) => {
    setpersonajeId(event.target.value);
  }

  const setHeightToPersonaje = (event) => {
    setpersonajeHeight(event.target.value);
  }

  const setGenderToPersonaje = (event) => {
    setpersonajeGender(event.target.value);
  }

  // -------------------------------------------------------------
  // crea un personaje
  // -------------------------------------------------------------
  const createPersonaje = async () => {

        var newPersonaje = {
          id: personajeId,
          name: personajeName,
          age: personajeAge,
          height: personajeHeight,
          gender: personajeGender
      }

      if (newPersonaje.id === 0 || newPersonaje.name === "" || newPersonaje.age === 0 || newPersonaje.gender === "" 
            || newPersonaje.height === 0){
        alert("Debe digitar todos los datos.");

      }else{
      
      const serviceUrl = `http://localhost:8080/personajes`;
      let config = {
          headers: {
                  "Content-Type": "application/json"        
      
          }
      };

      axios.post(serviceUrl,newPersonaje ,config) //then es usando promises, se puede asignar a una variable si quiere sin promises
      .then(response =>  {alert("Agregado con exito") 
                                selectPersonajes();} );
      }
  }

  // -------------------------------------------------------------
  // actualiza un personaje
  // -------------------------------------------------------------
  const updatePersonaje = async () => {

      var newPersonaje = {
          id: personajeId,
          name: personajeName,
          age: personajeAge,
          height: personajeHeight,
          gender: personajeGender
    }

    if (newPersonaje.id === 0 || newPersonaje.name === "" || newPersonaje.age === 0 || newPersonaje.gender === "" 
            || newPersonaje.height === 0){
        alert("Debe digitar todos los datos.");
        
      }else{
        const serviceUrl = `http://localhost:8080/personajes/`;
        let config = {
            headers: {
                    "Content-Type": "application/json"        
        
            }
        };

        axios.put(serviceUrl+personajeId,newPersonaje ,config)
        .then(response =>  {alert("Actualizado con exito") } );
    }
  }

  // -------------------------------------------------------------
  // borra un personaje
  // -------------------------------------------------------------
  const deletePersonaje = async () => {
    const serviceUrl = `http://localhost:8080/personajes/`;
    axios.delete(serviceUrl+personajeId)
    .then(response =>  {alert("Borrado con exito") } );
  }

  // -------------------------------------------------------------
  // seleciona todos los personaje
  // -------------------------------------------------------------
  const selectPersonajes = async () => {         
    const serviceUrl = "http://localhost:8080/personajes";
    let config = {
      headers: {
        "Content-Type": "application/json"    
      }
    };
    let response =  await axios.get(serviceUrl,config);

    if(response.data.length > 0){    
      console.log(response.data);
      let personajeslist = response.data.map((item) => {
        return <li key={item.id}> {item.id} - Nombre: {item.name}   -  Edad: {item.age} - Altura: {item.height} - Genero: {item.gender}</li>
      });
      setpersonaje(personajeslist);

    }else{
      setpersonaje(<li>no hay datos</li>);
    }         
  }

    console.log(personajes);
    return(
    <div className="personajes">
        <div className='portada'>
          <h1 > STAR WARS </h1>
        </div>
        
        <img src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
          height="380"></img>

        <h1> Personajes </h1>
        <ul> {personajes} </ul>


        <button onClick={selectPersonajes} className="btnPersonaje"> Cargar personajes </button>


        <h3> Crear Personaje </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPersonaje' onChange={setIdToPersonaje} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPersonaje' onChange={setNameToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Edad:   
            <input className='inputsPersonaje' onChange={setAgeToPersonaje} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Altura:   
            <input className='inputsPersonaje' onChange={setHeightToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Genero:   
            <input className='inputsPersonaje' onChange={setGenderToPersonaje} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPersonaje' onClick={createPersonaje}> Guardar Personaje </button>


        <h3> Actualizar Personaje </h3>
        <label className='labelStyle'>
            ID:   
            <input className='inputsPersonaje' onChange={setIdToPersonaje} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPersonaje' onChange={setNameToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Edad:   
            <input className='inputsPersonaje' onChange={setAgeToPersonaje} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Altura:   
            <input className='inputsPersonaje' onChange={setHeightToPersonaje} type="text"/>
          </label >
          <br></br>
          <label className='labelStyle'>
            Genero:   
            <input className='inputsPersonaje' onChange={setGenderToPersonaje} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPersonaje' onClick={updatePersonaje}> Actualizar Personaje </button>


        <h3> Borrar Personaje </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPersonaje'  onChange={setIdToPersonaje} type="text"/>
          </label>
          
          <br></br> <br></br>
          <button className='btnPersonaje' onClick={deletePersonaje}> Borrar Personaje </button>

  </div>)
}

export default Personajes;