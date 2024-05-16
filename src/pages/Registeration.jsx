import { Header } from "../components/Header/Header"
import Bitcoin from '../assets/Bitcoin-1.png'
import Ethereum from '../assets/Etherium-2 copy 1.png'
import Ethereum1 from '../assets/Monero-2 copy 3.png'
import group from '../assets/Group 2.png'
import group3 from '../assets/Group 3.png'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Registeration = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('')
    return (
        <div className="relative overflow-hidden min-h-[300vh]">
            <img src={Bitcoin} alt='' className="hidden md:block absolute" />
            <img src={Ethereum} alt='' className="hidden md:block absolute top-[30%] left-[-1%]" />
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[63%] left-[-2%]" />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[19%] right-[-4%]" />
            <img src={Bitcoin} alt='' className="hidden md:block absolute top-[50%] right-[-1%]" />
            <img src={Ethereum} alt='' className="hidden md:block absolute top-[78%] right-[-3%]" />
            <div className="px-[10px] md:px-[100px]">
                <div style={{ fontSize: "78px" }} className="flex flex-col justify-center font-black text-center text-white leading-[110.5px] max-md:text-4xl mb-10">
                    <div className="justify-center px-5 w-full max-md:max-w-full max-md:text-4xl mt-20">
                        Anmelden
                    </div>
                </div>
                <div className="bg-zinc-900 bg-opacity-50 p-6 md:p-16 rounded-[107px] relative" style={{ zIndex: 12 }}>
                    <div className="flex justify-between items-center">
                        <div className="bg-[#272E51] py-3 pb-16 px-5 max-w-[100%] mx-2 w-full min-h-[440px] h-full rounded-[32px]">
                            <div className="flex flex-col justify-center items-center px-5 max-w-[800px] mx-auto pt-5">
                                <div className="text-2xl font-bold text-white">
                                    Email
                                </div>
                                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' className="max-w-[350px] w-full bg-[#D9D9D9] py-3 mt-2 rounded-md" />
                                <div className="text-2xl font-bold text-white mt-10">
                                    Password
                                </div>
                                <input type='password' className="max-w-[350px] w-full bg-[#D9D9D9] py-3 mt-2 rounded-md" />
                                <div onClick={() => {
                                    if(email.toLowerCase().includes('admin')){
                                        Navigate('/admin/miner');
                                    }else{
                                        Navigate('/user/dashboard')
                                    }
                                }} className="justify-center px-3 py-3.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50 max-w-[350px] w-full mt-10">
                                    Kundenportal
                                </div>
                                <Link to="/miner3" className="text-md font-bold text-white mt-10">
                                    Create a new Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registeration