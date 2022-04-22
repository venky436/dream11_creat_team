
import './App.css'
import { Nav } from './components/Navbar/Nav';
import { Body } from './components/Body/Body';
import { Create } from './components/CreatePage/Create';
import { C_v } from './Screens/C_v';
import { Team } from './Screens/Team';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/create/team" element={<Create />} />
        <Route path="/main_team" element={<C_v />} />
        <Route path="/teams" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
