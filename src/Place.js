import {useEffect,useState} from 'react';
import axios from 'axios';

const Place = () => {
  
  const [place, setplace] = useState([]);
  const [placeId, setplaceId] = useState(0);
  const [placeName, setplaceName] = useState("");
  const [placeTemperature, setplaceTemperature] = useState(0);
  const [placeSize, setplaceSize] = useState(0);

  // -----------------------------------------------------------------------------------------------------
  // PLace
  // -----------------------------------------------------------------------------------------------------

  const setIdToPlace = (event) => {
    setplaceId(event.target.value);
  }

  const setNameToPlace = (event) => {
    setplaceName(event.target.value);
  }

  const setTemperatureToPlace = (event) => {
    setplaceTemperature(event.target.value);
  }

  const setSizeToPlace = (event) => {
    setplaceSize(event.target.value);
  }

  // -------------------------------------------------------------
  // crea un PLace
  // -------------------------------------------------------------
  const createPlace = async () => {
        var newPlace = {
          id: placeId,
          name: placeName,
          temperature: placeTemperature,
          sizePlace: placeSize
      }
      
      if (newPlace.id === 0 || newPlace.name === "" || newPlace.temperature === 0 || newPlace.sizePlace === 0){
        alert("Debe digitar todos los datos.");

      }else{
          const serviceUrl = `http://localhost:8080/place`;
          let config = {
              headers: {
                      "Content-Type": "application/json"        
              }
          };

          axios.post(serviceUrl,newPlace ,config)
          .then(response =>  {alert("Agregado con exito") 
                                selectPlaces();} );
        }

  }

  // -------------------------------------------------------------
  // actualiza un PLace
  // -------------------------------------------------------------
  const updatePlace = async () => {

      var newPlace = {
          name: placeName,
          temperature: placeTemperature,
          sizePlace: placeSize
    }
    if (newPlace.id === 0 || newPlace.name === "" || newPlace.temperature === 0 || newPlace.sizePlace === 0){
      alert("Debe digitar todos los datos.");

    }else{
        const serviceUrl = `http://localhost:8080/place/`;
        let config = {
            headers: {
                    "Content-Type": "application/json"        
            }
        };

        axios.put(serviceUrl+placeId, newPlace , config)
        .then(response =>  {alert("Actualizado con exito") } );
      }
  }

  // -------------------------------------------------------------
  // borra un PLace
  // -------------------------------------------------------------
  const deletePlace = async () => {
    const serviceUrl = `http://localhost:8080/place/`;
    axios.delete(serviceUrl+placeId)
    .then(response =>  {alert("Borrado con exito") } );
  }

  // -------------------------------------------------------------
  // selecciona todos los PLace
  // -------------------------------------------------------------
    const selectPlaces = async () => {         
      const serviceUrl = "http://localhost:8080/place";
      let config = {
        headers: {
          "Content-Type": "application/json"    
        }
      };
      let response =  await axios.get(serviceUrl,config);

      if(response.data.length > 0){   
        console.log(response.data);
        let placeList = response.data.map((item) => {
          return <li key={item.id}> {item.id} - Nombre: {item.name} - Temperatura: {item.temperature} - Tamaño: {item.sizePlace} </li>
        });

        setplace(placeList);

      }else{
        setplace(<li>No hay datos</li>);
      }         
    }

    return(
        <div className="lugares">
        <img src="https://as01.epimg.net/meristation/imagenes/2022/05/04/betech/1651665958_885563_1651666720_noticia_normal.jpg"
        height="300"></img>

        <h1> Lugares </h1>
          <ul> {place} </ul>
          
        <button onClick={selectPlaces} className="btnPlace"> Cargar lugares </button>     


        <h3> Crear Lugar </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPlace' onChange={setIdToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPlace' onChange={setNameToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Temperatura:   
            <input className='inputsPlace' onChange={setTemperatureToPlace} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Tamaño:   
            <input className='inputsPlace' onChange={setSizeToPlace} type="text"/>
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={createPlace}> Guardar Lugar </button>


        <h3> Actualizar Lugar </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPlace' onChange={setIdToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsPlace' onChange={setNameToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Temperatura:   
            <input className='inputsPlace' onChange={setTemperatureToPlace} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Tamaño:   
            <input className='inputsPlace' onChange={setSizeToPlace} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={updatePlace}> Actualizar Lugar </button>


        <h3> Borrar Lugar </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsPlace' onChange={setIdToPlace} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnPlace' onClick={deletePlace}> Borrar Lugar </button> 
      </div>
    )
}

export default Place;