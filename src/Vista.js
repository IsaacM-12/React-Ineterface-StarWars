const Vista = () => {
    
    // -------------------------------------------------------------
    // diseño
    // -------------------------------------------------------------
    function cambiarFondo(color){
        var body = document.getElementById("App-header");
        body.style.backgroundColor = color.target.value;
    }
    
    function cambiarLetras(color){
        var body = document.getElementById("App-header");
        body.style.color = color.target.value;
    }

    

    return(
    <div className="divStyle">

    <p>Fondo - Letras</p>

    <select className='select' onChange={cambiarFondo}>
        <option value="#282c34">Original</option>
        <option value="#0953e7">Azul</option>
        <option value="aqua">Verde Agua</option>
        <option value="black">Negro</option>
      </select>

      <select className='select' onChange={cambiarLetras}>
          <option value="white">Original</option>
          <option value="#0953e7">Azul</option>
          <option value="aqua">Verde Agua</option>
          <option value="black">Negro</option>
      </select>

      <div className='divStyle'>
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/09/mandalorian-2485773.jpg" 
            height="284" ></img>
          
          <iframe src="https://giphy.com/embed/9E7kUhnT9eDok" width="480" height="284" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loop-darkness-awakens-9E7kUhnT9eDok"></a></p>
      </div>

  </div>
  )
}

export default Vista;