import {useEffect,useState} from 'react';
import axios from 'axios';

const Relation = () => {
  
  const [relation, setRelation] = useState([]);
  const [relationIdPersonaje, setRelationIdPersonaje] = useState(0);
  const [relationIdPlace, setRelationIdPlace] = useState(0);
  const [relationIdType, setRelationIdType] = useState(0);

  const [relactionIdDelete, setRelationIdPersonajeDelete] = useState(0);

  // -----------------------------------------------------------------------------------------------------
  // PLace
  // -----------------------------------------------------------------------------------------------------

  const setIdPersonajeToRelation = (event) => {
    setRelationIdPersonaje(event.target.value);
  }

  const setIdPlaceToRelation = (event) => {
    setRelationIdPlace(event.target.value);
  }

  const setIdTypeToRelation = (event) => {
    setRelationIdType(event.target.value);
  }

  const setIdPersonajeToRelationDelete = (event) => {
    setRelationIdPersonajeDelete(event.target.value);
  }


  // -------------------------------------------------------------
  // crea una Relacion
  // -------------------------------------------------------------
  const createRelation = async () => {
        var newRelation = {
        idPersonaje: relationIdPersonaje,
        idPlace: relationIdPlace,
        idType: relationIdType
    }
    
    if (newRelation.idPersonaje === 0 || newRelation.idPlace === 0 || newRelation.idType === 0 ){
        alert("Debe digitar todos los datos.");

    }else{
        const serviceUrl = `http://localhost:8080/relation`;
        let config = {
            headers: {
                    "Content-Type": "application/json"        
            }
        };

        axios.post(serviceUrl,newRelation ,config)
        .then(response =>  {alert("Agregado con exito") 
                                selectRelation();} );
        }


  }

  // -------------------------------------------------------------
  // borra un PLace
  // -------------------------------------------------------------
  const deleteRelation = async () => {
    const serviceUrl = `http://localhost:8080/relation/`;
    axios.delete(serviceUrl+relactionIdDelete)
    .then(response =>  {alert("Borrado con exito") 
                          selectRelation()} );
  }

  // -------------------------------------------------------------
  // selecciona todas las relaciones
  // -------------------------------------------------------------
    const selectRelation = async () => {         
      const serviceUrl = "http://localhost:8080/relation";
      let config = {
        headers: {
          "Content-Type": "application/json"    
        }
      };
      let response =  await axios.get(serviceUrl,config);

      if(response.data.length > 0){   
        console.log(response.data);
        let relationList = response.data.map((item) => {
          return <li key={item.idPersonaje}> Personaje: {item.idPersonaje} - Tipo: {item.idType} - Place: {item.idPlace}</li>
        });

        setRelation(relationList);

      }else{
        setRelation(<li>No hay datos</li>);
      }         
    }

    return(
        <div className="relation">

        <h1> Relaciones De los Personajes </h1>
          <ul> {relation} </ul>
          
        <button onClick={selectRelation} className="btnPlace"> Cargar Relacion </button>     


        <h3> Crear Relaciones De Los Personajes </h3>
          <label className='labelStyle'>
            ID Personaje:   
            <input className='inputsPlace' onChange={setIdPersonajeToRelation} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            ID Tipo:   
            <input className='inputsPlace' onChange={setIdTypeToRelation} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            ID Lugar:   
            <input className='inputsPlace' onChange={setIdPlaceToRelation} type="text"/>
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={createRelation}> Guardar Relacion </button>


        <h3> Borrar Relacion </h3>
          <label className='labelStyle'>
            ID Personaje:   
            <input className='inputsPlace' onChange={setIdPersonajeToRelationDelete} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={deleteRelation}> Borrar Relacion </button> 
      </div>
    )
}

export default Relation;