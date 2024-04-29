import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Mainpage from './Componend/Mainpage';
import Timmer from './Componend/Timmer';
import Calculator from './Componend/Calculator';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Define the routes */}
          <Route path='/' element={<Mainpage />} />
          <Route path='/Stopwatch' element={<Timmer />} />
          <Route path='/Calculator' element={<Calculator/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
