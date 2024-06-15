import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Landing from "./Pages/Landing";
import Coba3 from "./Pages/Coba3";
import State from "./Pages/State";
import Eventhandling from "./Pages/Eventhandling";

function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/coba3" Component={Coba3}/>
        <Route path="/state" Component={State}/>
        <Route path="/event" Component={Eventhandling}/>
      </Routes>
    </>
  )
}

export default App