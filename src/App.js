import logo from './logo.svg';
import './App.css';
import { Routes, Route, } from "react-router-dom";

import Home from './component/Home/Home/Home';
import Navbar from './component/Share/Navbar/Navbar';
function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />


      </Routes >
    </div>
  );
}

export default App;
