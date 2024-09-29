import NavBar from './components/NavBar'
import './App.css'
import banner from "./assets/reactimagen.png"


//import { NavBar } from './components/NavBar' 


function App() {
 

  return (
    <div>
      
      <h1>Hola Mundo</h1>

      


<NavBar/> {// colocando <NavBar/> estaría llamando a la función 
}

<img src={banner} alt="" />
    </div>
   
  )
}

export default App
