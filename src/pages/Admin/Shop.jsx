import Bitcoin from '../../assets/Bitcoin-1.png'
import Ethereum1 from '../../assets/Monero-2 copy 3.png'
import group from '../../assets/Group 2.png'
import group3 from '../../assets/Group 3.png'
import { Header } from '../../components/Header/Header'
import AdminAsideNavbar from './../../components/AdminAsideNavbar';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AdminShop = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative overflow-hidden min-h-[120vh]">
            <img src={Bitcoin} alt='' className="hidden md:block absolute top-[80%]" style={{ zIndex: 100 }} />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[7%] right-[-4%]" />
            <div className='flex flex-col md:flex-row justify-between w-full relative max-w-[1230px]' style={{ zIndex: 10 }}>
                <AdminAsideNavbar />
                <div className="bg-[rgba(36,42,72)] bg-opacity-50 px-4 pl-6 mt-5 md:mt-0" style={{ borderRadius: "20px", height: "500px", maxWidth: "900px", width: "100%" }}>
                    <h1 className='text-white text-3xl font-bold mt-7'>Shop</h1>
                    <div>
                        <div className='flex justify-between mt-6 mb-4'>
                            <h1 className='text-white text-3xl font-bold'>ASIC</h1>
                            <Link to="/register" style={{ zIndex: 20 }} className="justify-center px-3 py-2.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50">
                                Miner hinzufügen
                            </Link>
                        </div>
                        <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex px-5 justify-between w-full'>
                            <h1 className='text-white text-xl font-bold'>S19</h1>
                            <div className='flex flex-col md:flex-row justify-between w-[28%]'>
                                <h1 className='text-[#B23343] text-xl font-bold'>Entfernen</h1>
                                <h1 className='text-[#18A786] text-xl font-bold'>Bearbeiten</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminShop