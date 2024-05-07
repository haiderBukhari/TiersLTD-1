import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Miner from "../pages/Miner"
import Miner1 from "../pages/Miner1"
import Miner2 from './../pages/Minor2';
import Miner3 from "../pages/Minor3";
import Miner4 from "../pages/Minor4";
import Registeration from "../pages/Registeration";
import UserDashboard from "../pages/User/Dashboard";
import Wallet from "../pages/User/Wallet";
import Devices from "../pages/User/Devices";
import Bills from "../pages/User/Bill";
import AdminMiner from "../pages/Admin/Miner";
import AdminKunden from "../pages/Admin/kunden";
import AdminKundenSubPage from "../pages/Admin/kundenSubPage";
import AdminShop from "../pages/Admin/Shop";
import BillDetails from "../pages/User/BillDetails";


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
        <Route path="/user/dashboard" element={<UserDashboard/>} />
        <Route path="/user/wallet" element={<Wallet/>} />
        <Route path="/user/devices" element={<Devices/>} />
        <Route path="/user/bills" element={<Bills/>} />
        <Route path="/user/bills/details" element={<BillDetails/>} />
        <Route path="/admin/miner" element={<AdminMiner/>} />
        <Route path="/admin/kunden" element={<AdminKunden/>} />
        <Route path="/admin/kunden/sub" element={<AdminKundenSubPage/>} />
        <Route path="/admin/shop" element={<AdminShop/>} />
    </Routes>
  )
}

export default index