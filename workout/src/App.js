import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chest from './components/Chest';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chest" element={<Chest />} />
          
       </Routes>
    </>
  );
}

export default App;
