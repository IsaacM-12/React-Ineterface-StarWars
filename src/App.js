import './App.css';
import Personajes from './Personajes';
import Place from './Place';
import Type from './Type';
import Relacion from './Relacion'


function App() {   


  return (
    <div className="App">
      <header className="App-header">
    
      <Personajes/>


      <Place/>


      <Type/>


      <Relacion/>


      <div className='divStyle'>
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/09/mandalorian-2485773.jpg" 
            height="380" ></img>
      </div>

      </header>
    </div>
  );
}

export default App;

