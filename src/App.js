import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Mainpage from './Componend/Mainpage';
import Timmer from './Componend/Timmer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         
          <Route path='/' element={<Mainpage />} />
          <Route path='/Stopwatch' element={<Timmer />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
