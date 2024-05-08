import { Header } from "../components/Header/Header"
import Bitcoin from '../assets/Bitcoin-1.png'
import Ethereum from '../assets/Etherium-2 copy 1.png'
import Ethereum1 from '../assets/Monero-2 copy 3.png'
import group from '../assets/Group 2.png'
import group3 from '../assets/Group 3.png'
import map from '../assets/map.png'

const Miner4 = () => {
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
                    <div style={{zIndex: 10}} className="justify-center px-5 w-full max-md:max-w-full max-md:text-4xl mt-20">
                        Kontakt
                    </div>
                </div>
                <div className="bg-zinc-900 min-h-[1009px] p-5 md:p-10 rounded-[107px] relative" style={{ zIndex: 12 }}>
                    <div className="flex flex-wrap md:justify-between items-center">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="w-full aspect-[0.99] max-w-[270px] h-[270px]"
                        />
                        <div className="bg-[#272E51] mt-5 md:mt-0 pb-16 py-3 px-5 max-w-[661px] w-full min-h-[495px] h-full rounded-[32px]">
                            <div className="justify-center w-full max-md:max-w-full text-3xl font-bold text-white mt-1">
                                Adresse
                            </div>
                            <hr className="bg-white" style={{ paddingTop: "0.4px" }} />
                            <div className="flex flex-wrap md:flex-nowrap items-center mt-2">
                                <p className="text-xl text-white text-justify md:text-center mt-3 md:mt-0">SwissMine GmbH Aaragauerstrasse 10 5734 Reinach AG</p>
                                <img src={map} alt='' className="mt-6 md:mt-0" />
                            </div>
                            <div className="pt-16">
                                <div className="justify-center w-full max-md:max-w-full text-3xl font-bold text-white mt-1">
                                    Telefon
                                </div>
                                <hr className="bg-white" style={{ paddingTop: "0.4px" }} />
                                <div className="mt-3 flex justify-end">
                                    <div className="text-md font-semibold text-white w-full">
                                        076 419 98 04
                                    </div>
                                    <div className="text-md font-semibold text-white w-full">
                                        Erreichbar Mo - Fr von 8.00 - 17.00
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="justify-center w-full max-md:max-w-full text-3xl font-bold text-white mt-1">
                                    E-Mail
                                </div>
                                <hr className="bg-white" style={{ paddingTop: "0.4px" }} />
                                <div className="mt-3 flex justify-end">
                                    <div className="text-md font-semibold text-white w-full">
                                        Info@swissmine.ch
                                    </div>
                                    <div className="text-md font-semibold text-white w-full">
                                        Erreichbar Mo - Fr von 8.00 - 17.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miner4