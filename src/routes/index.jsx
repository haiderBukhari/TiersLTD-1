import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Miner from "../pages/Miner"
import Miner1 from "../pages/Miner1"
import Miner2 from './../pages/Minor2';
import Miner3 from "../pages/Minor3";
import Miner4 from "../pages/Minor4";
import Registeration from "../pages/Registeration";


const index = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/miner" element={<Miner/>} />
        <Route path="/miner1" element={<Miner1/>} />
        <Route path="/miner2" element={<Miner2/>} />
        <Route path="/miner3" element={<Miner3/>} />
        <Route path="/miner4" element={<Miner4/>} />
        <Route path="/register" element={<Registeration/>} />
    </Routes>
  )
}

export default index