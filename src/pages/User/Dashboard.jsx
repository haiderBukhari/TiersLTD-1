import Bitcoin from '../../assets/Bitcoin-1.png'
import Ethereum1 from '../../assets/Monero-2 copy 3.png'
import group from '../../assets/Group 2.png'
import group3 from '../../assets/Group 3.png'
import { Header } from '../../components/Header/Header'
import UserAsideNavbar from '../../components/UserAsideNavbar'
import map from '../../assets/image 2.png'
import { useState } from 'react'
// import map from '../../assets/map.png'

const UserDashboard = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative overflow-hidden min-h-[120vh]">
            <img src={Bitcoin} alt='' className="hidden md:block absolute top-[80%]" style={{zIndex: 100}} />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[7%] right-[-4%]" />
            <div className='flex flex-col md:flex-row justify-between w-full relative max-w-[1230px]' style={{ zIndex: 10 }}>
                <UserAsideNavbar />
                <div className="bg-[rgba(36,42,72)] bg-opacity-50 backdrop-blur-3xl" style={{ borderRadius: "20px", minHeight: "500px", maxWidth: "900px", width: "100%" }}>
                    <div className='flex flex-col md:flex-row w-full py-5 px-5 md:px-10'>
                        <div className=''>
                            <h1 className='text-white text-3xl font-bold'>Dashboard</h1>
                            <img className='mt-4 w-full' src={map} alt='' />
                        </div>
                        <div className='ml-4 mt-5 md:mt-0'>
                            <div className='w-full'>
                                <h1 className='text-white text-3xl font-bold'>Rechnungen</h1>
                                <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex px-5 justify-between w-full'>
                                    <h1 className='text-white text-xl font-bold'>18.03.2024</h1>
                                    <h1 className='text-[#18A786] text-xl font-bold'>Bezahlt</h1>
                                </div>
                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-white text-3xl font-bold'>Wallet</h1>
                                <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex px-5 justify-between w-full'>
                                    <h1 className='text-white text-xl font-bold'>0.0059 BTC</h1>
                                    <h1 className='text-[#18A786] text-xl font-bold'>Auszahlen</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserDashboard