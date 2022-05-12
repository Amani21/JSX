import './App.css';
import fleur from "./fleur.jpg"
import Mainvideo from './Mainvideo';

function App() {
  return (
    <div className="App">
     
     <div style={{border:"solid black 1px" , maxWidth:"100vw"}}>

 <h1 className='title'>Amani </h1>

 <br />

 <img src={fleur} alt="fleurimage" />


 <br />

 <img src="/bouquet.jpg" alt='bouquetimage'/>

</div>

    <Mainvideo />

    </div>
  );
}

export default App;
