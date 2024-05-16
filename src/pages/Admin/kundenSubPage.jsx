import Bitcoin from '../../assets/Bitcoin-1.png'
import Ethereum1 from '../../assets/Monero-2 copy 3.png'
import group from '../../assets/Group 2.png'
import group3 from '../../assets/Group 3.png'
import { Header } from '../../components/Header/Header'
import AdminAsideNavbar from './../../components/AdminAsideNavbar';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AdminKundenSubPage = () => {
    return (
        <div className="relative overflow-hidden min-h-[120vh]">
            <img src={Bitcoin} alt='' className="hidden md:block absolute top-[46%]" style={{ zIndex: 100 }} />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[7%] right-[-4%]" />
            
            <div className='flex flex-col md:flex-row justify-between w-full relative max-w-[1230px]' style={{ zIndex: 10 }}>
                <AdminAsideNavbar />
                <div className="flex justify-between items-center max-w-[900px] mt-5 md:mt-0">
                    <div className="bg-[#272E51] bg-opacity-45 py-3 pb-16 px-5 max-w-[100%] mx-2 w-full min-h-[495px] h-full rounded-[32px]">
                    <h1 className='text-white text-3xl font-bold pl-4 md:pl-10 mt-4 mb-4'>Meric Ates</h1>
                    <div className="flex justify-between items-center mt-7 md:mt-0">
                        <div className="bg-[#272E51] py-3 pb-16 md:px-5 max-w-[100%] md:mx-2 w-full min-h-[495px] h-full rounded-[32px]">
                            <div className="flex flex-col md:flex-row justify-between px-5 max-w-[800px] mx-auto pt-5">
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        Vorname
                                    </div>
                                    <input type='' className="max-w-[350px] w-full md:w-[350px] bg-white py-3 mt-2 rounded-md" />

                                    <div className="text-2xl font-bold text-white mt-5">
                                        Nachname
                                    </div>
                                    <input type='' className="max-w-[350px] w-full md:w-[350px] bg-white py-3 mt-2 rounded-md" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white mt-5 md:mt-0">
                                        Adresse
                                    </div>
                                    <input type='' className="max-w-[350px] w-full md:w-[350px] bg-white py-3 mt-2 rounded-md" />

                                    <div className="text-2xl font-bold text-white mt-5">
                                        Postleitzahl
                                    </div>
                                    <input type='' className="max-w-[350px] w-full md:w-[350px] bg-white py-3 mt-2 rounded-md" />
                                    <div className="text-2xl font-bold text-white mt-5">
                                        Ort
                                    </div>
                                    <input type='' className="max-w-[350px] w-full md:w-[350px] bg-white py-3 mt-2 rounded-md" />
                                    <div className="text-2xl font-bold text-white mt-5">
                                        Email
                                    </div>
                                    <input type='' className="max-w-[350px] w-full md:w-[350px] bg-[#D9D9D9] py-4 mt-2 rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                        <div>
                            <div className='flex justify-between mt-10'>
                                <h1 className='text-white text-3xl font-bold'>Kunden</h1>
                                <Link to="/register" style={{ zIndex: 20 }} className="justify-center px-3 py-2.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50">
                                    Miner verbinden
                                </Link>
                            </div>
                            <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex px-5 justify-between w-full'>
                                <h1 className='text-white text-xl font-bold'>S19-SN198375</h1>
                                <h1 className='text-[#B23343] text-xl font-bold'>Entfernen</h1>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mt-10'>
                                <h1 className='text-white text-3xl font-bold'>Rechnungen</h1>
                                <Link to="/register" style={{ zIndex: 20 }} className="justify-center px-3 py-2.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50">
                                    Rechnung
                                </Link>
                            </div>
                            <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex px-5 justify-between w-full'>
                                <h1 className='text-white text-xl font-bold'>1.1.2024</h1>
                                <div className='flex flex-col md:flex-row justify-between w-[25%]'>
                                    <h1 className='text-[#B23343] text-xl font-bold'>Entfernen</h1>
                                    <h1 className='text-[#18A786] text-xl font-bold'>Offen</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mt-10'>
                                <h1 className='text-white text-3xl font-bold'>Vertrag</h1>
                                <Link to="/register" style={{ zIndex: 20 }} className="justify-center px-3 py-2.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50">
                                    Vertrag
                                </Link>
                            </div>
                            <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex px-5 justify-between w-full'>
                                <h1 className='text-white text-xl font-bold'>S19-SN198375</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminKundenSubPage