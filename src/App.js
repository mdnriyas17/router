
import './App.css';
import Home from './Home';
import About from './About';
import { Route, Routes } from 'react-router-dom';
import { Homew } from './Pages/Homew';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Homew/>}/>
    </Routes>
    </div>
  );
}

export default App;
