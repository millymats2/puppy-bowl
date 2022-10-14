import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<AllPlayers/>}/>
        <Route path='/ players/:id' element={<SinglePlayer/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
