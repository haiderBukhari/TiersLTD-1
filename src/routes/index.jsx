import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Miner from "../pages/Miner"
import Miner1 from "../pages/Miner1"
import Miner2 from './../pages/Minor2';


const index = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/miner" element={<Miner/>} />
        <Route path="/miner1" element={<Miner1/>} />
        <Route path="/miner2" element={<Miner2/>} />
    </Routes>
  )
}

export default index