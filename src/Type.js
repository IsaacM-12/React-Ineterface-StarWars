import {useEffect,useState} from 'react';
import axios from 'axios';

const Type = () => {
  const [type, settype] = useState([]);
  const [typeId, settypeId] = useState(0);
  const [typeName, settypeName] = useState("");
  const [typeSkin, settypeSkin] = useState("");

  // -----------------------------------------------------------------------------------------------------
  // Type
  // -----------------------------------------------------------------------------------------------------

  const setIdToType = (event) => {
    settypeId(event.target.value);
  }

  const setNameToType = (event) => {
    settypeName(event.target.value);
  }

  const setSkinToType = (event) => {
    settypeSkin(event.target.value);
  }

  // -------------------------------------------------------------
  // crea un Type
  // -------------------------------------------------------------
  const createType = async () => {
        var newType = {
          id: typeId,
          name: typeName,
          skin: typeSkin
      }
      
      if (newType.id === 0 || newType.name === "" || newType.skin === ""){
        alert("Debe digitar todos los datos.");

      }else{
          const serviceUrl = `http://localhost:8080/type`;
          let config = {
              headers: {
                      "Content-Type": "application/json"        
              }
          };

          axios.post(serviceUrl,newType ,config)
          .then(response =>  {alert("Agregado con exito") } );
        }
  }

  // -------------------------------------------------------------
  // actualiza un Type
  // -------------------------------------------------------------
  const updateType = async () => {

      var newType = {
          id: typeId,
          name: typeName,
          skin: typeSkin
    }
    
    const serviceUrl = `http://localhost:8080/type/`;
    let config = {
        headers: {
                "Content-Type": "application/json"        
        }
    };

    axios.put(serviceUrl+typeId, newType , config)
    .then(response =>  {alert("Actualizado con exito") } );
  }

  // -------------------------------------------------------------
  // borra un Type
  // -------------------------------------------------------------
  const deleteType = async () => {
    const serviceUrl = `http://localhost:8080/type/`;
    axios.delete(serviceUrl+typeId)
    .then(response =>  {alert("Borrado con exito") } );
  }

  // -------------------------------------------------------------
  // selecciona todos los Type
  // -------------------------------------------------------------
    const selectTypes = async () => {         
      const serviceUrl = "http://localhost:8080/type";
      let config = {
        headers: {
          "Content-Type": "application/json"    
        }
      };
      let response =  await axios.get(serviceUrl,config);

      if(response.data.length > 0){   
        console.log(response.data);
        let typeList = response.data.map((item) => {
          return <li key={item.id}> {item.id} - Nombre: {item.name} - Color: {item.skin}</li>
        });

        settype(typeList);

      }else{
        settype(<li>No hay datos</li>);
      }         
    }


    return(
        <div className="tipos">
        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/01/hipertextual-chewbacca-no-recibio-medalla-final-star-wars-nueva-esperanza-2019884119.jpg"
        height="300"></img>
        
        <h1> Tipos </h1>
          <ul> {type} </ul>
          
        <button onClick={selectTypes} className="btnType"> Cargar Tipos </button>     


        <h3> Crear Tipo </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsType' onChange={setIdToType} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsType' onChange={setNameToType} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Color:   
            <input className='inputsType' onChange={setSkinToType} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnType' onClick={createType}> Guardar Tipo </button>


        <h3> Actualizar Tipo </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsType' onChange={setIdToType} type="text" />
          </label>
          <br></br>
          <label className='labelStyle'>
            Nombre:   
            <input className='inputsType' onChange={setNameToType} type="text"/>
          </label>
          <br></br>
          <label className='labelStyle'>
            Color:   
            <input className='inputsType' onChange={setSkinToType} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnType' onClick={updateType}> Actualizar Tipo </button>


        <h3> Borrar Tipo </h3>
          <label className='labelStyle'>
            ID:   
            <input className='inputsType' onChange={setIdToType} type="text" />
          </label>
          
          <br></br> <br></br>
          <button className='btnType' onClick={deleteType}> Borrar Tipo </button> 
      </div>
    )
}

export default Type;