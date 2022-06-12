import './App.css';
import Titulo from "./Components/Titulo";
import ToDO from "./Components/ToDo";

function App() {



  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-3 text-center ">
        <h1 className="text-white mx-auto">React con Bootstrap</h1>
      </nav>
      <Titulo title="ToDos" />
      <ToDO />
    </>
  )
}

export default App;



















































{/* <div className="container">
    <div className="row">
      <div className="col">
      <Tarjeta
          photo="https://picsum.photos/500/300"
          title="Yo que se :v"
          text="Lorem ipsum quibusdam! Ea voluptatem impedit dolore autem corrupti inventore esse hic."
          button="un boton pues"
        />

        </div>
        <div className="col">
        <Tarjeta
        photo="https://picsum.photos/500/250"
        title="Yo que se :v"
        text="Loremhic."
        button="un boton pues"
        />
        
        </div>
        <div className="col">
        <Tarjeta
        photo="https://picsum.photos/600/400"
        title="Hola mundo"
          text="Lorem ipsum quibusdam! Ea voluptatem impedit dolore autem corrupti inventore esse hic."
          button="Hola q hace"
          />
          
          </div>
          </div>
        </div> */}