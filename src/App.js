
import './App.css';
import FindADoctor from './components/FindADoctor';
import Home from './components/Home';
import PillIdentifier from './components/PillIdentifier';

import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes> 
            <Route path="/" element={<Home />} />
            <Route exact path="/doctor" element={<FindADoctor/>} />
            <Route exact path="/pill-identification" element={<PillIdentifier/>} />

        </Routes>

    </div>
  );
}

export default App;
