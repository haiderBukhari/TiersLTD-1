import { Header } from "../components/Header/Header"
import Bitcoin from '../assets/Bitcoin-1.png'
import Ethereum from '../assets/Etherium-2 copy 1.png'
import Ethereum1 from '../assets/Monero-2 copy 3.png'
import group from '../assets/Group 2.png'
import group3 from '../assets/Group 3.png'

const Miner3 = () => {
    return (
        <div className="relative overflow-hidden min-h-[300vh]">
            <Header />
            <img src={Bitcoin} alt='' className="absolute" />
            <img src={Ethereum} alt='' className="absolute top-[30%] left-[-1%]" />
            <img src={Ethereum1} alt='' className="absolute top-[63%] left-[-2%]" />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="absolute top-[19%] right-[-4%]" />
            <img src={Bitcoin} alt='' className="absolute top-[50%] right-[-1%]" />
            <img src={Ethereum} alt='' className="absolute top-[78%] right-[-3%]" />
            <div className="px-[100px]">
                <div style={{ fontSize: "78px" }} className="flex flex-col justify-center font-black text-center text-white leading-[110.5px] max-md:text-4xl mb-10">
                    <div className="justify-center px-5 w-full max-md:max-w-full max-md:text-4xl mt-20">
                        Ihre Kontaktdaten
                    </div>
                </div>
                <div className="bg-zinc-900 min-h-[1309px] p-10 rounded-[107px] relative" style={{ zIndex: 12 }}>
                    <div className="flex justify-between items-center">
                        <div className="bg-[#272E51] py-3 pb-16 px-5 max-w-[100%] mx-2 w-full min-h-[495px] h-full rounded-[32px]">
                            <div className="flex justify-between px-5 max-w-[800px] mx-auto pt-5">
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        Vorname
                                    </div>
                                    <input type='' className="w-[350px] bg-[#D9D9D9] py-3 mt-2 rounded-md" />

                                    <div className="text-2xl font-bold text-white mt-5">
                                        Nachname
                                    </div>
                                    <input type='' className="w-[350px] bg-[#D9D9D9] py-3 mt-2 rounded-md" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        Adresse
                                    </div>
                                    <input type='' className="w-[350px] bg-[#D9D9D9] py-3 mt-2 rounded-md" />

                                    <div className="text-2xl font-bold text-white mt-5">
                                        Postleitzahl
                                    </div>
                                    <input type='' className="w-[350px] bg-[#D9D9D9] py-3 mt-2 rounded-md" />
                                    <div className="text-2xl font-bold text-white mt-5">
                                        Ort
                                    </div>
                                    <input type='' className="w-[350px] bg-[#D9D9D9] py-3 mt-2 rounded-md" />
                                    <div className="text-2xl font-bold text-white mt-5">
                                        Email
                                    </div>
                                    <input type='' className="w-[350px] bg-[#D9D9D9] py-4 mt-2 rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#272E51] flex justify-center items-center min-h-[141px] rounded-[32px] mt-16">
                        <div className="px-5 text-6xl font-bold text-white">
                            Bestellen
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miner3