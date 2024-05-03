import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Miner from "../pages/Miner"


const index = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/miner" element={<Miner/>} />
    </Routes>
  )
}

export default index