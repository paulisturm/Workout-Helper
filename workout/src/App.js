import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chest from './components/Chest';
import Navbar from './components/Navbar';
import Shoulders from './components/Shoulders';
import Biceps from './components/Biceps';
import Triceps from './components/Triceps';
import Legs from './components/Legs';
import Abs from './components/Abs';
import Sleep from './components/Sleep';
import Cardio from './components/Cardio';

function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chest" element={<Chest />} />
          <Route path="shoulders " element={<Shoulders />} />
          <Route path="biceps" element={<Biceps />} />
          <Route path="triceps" element={<Triceps />} />
          <Route path="legs" element={<Legs />} />
          <Route path="abs" element={<Abs />} />
          <Route path="cardio" element={<Cardio />} />
          <Route path="sleep" element={<Sleep />} />
          
       </Routes>
    </>
  );
}

export default App;
