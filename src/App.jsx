import { Routes, Route } from "react-router-dom";
import AllPlayers from './components/AllPlayers';
import "./index.css";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import SinglePlayer from './components/SinglePlayer';

function App() {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path='/' element={<AllPlayers/>}/>
        <Route path='/newPlayerForm' element={<NewPlayerForm/>}/>
       <Route path='/AllPlayers/:playerId' element={<SinglePlayer/>}/> 
      </Routes>
    </div>
  );
}

export default App;
