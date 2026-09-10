import { Route, Routes } from "react-router-dom";

import './App.css'
import Hero from "./Hero";

function App() {

  return (
 <Routes>
      
      <Route path="/" element={<Hero/>} />
    </Routes>
  )
}

export default App
