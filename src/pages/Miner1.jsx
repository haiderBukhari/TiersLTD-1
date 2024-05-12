import { Header } from "../components/Header/Header"
import Bitcoin from '../assets/Bitcoin-1.png'
import Ethereum from '../assets/Etherium-2 copy 1.png'
import Ethereum1 from '../assets/Monero-2 copy 3.png'
import group from '../assets/Group 2.png'
import group3 from '../assets/Group 3.png'

const Miner1 = () => {
    return (
        <div className="relative overflow-hidden min-h-[300vh]">
            <img src={Bitcoin} alt='' className="absolute" />
            <img src={Ethereum} alt='' className="absolute top-[30%] left-0" />
            <img src={Ethereum1} alt='' className="absolute top-[63%]" />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{zIndex: "1"}}/>
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{zIndex: "1"}}/>
            <img src={Ethereum1} alt='' className="absolute top-[19%] right-[-3%]" />
            <img src={Bitcoin} alt='' className="absolute top-[50%] right-0" />
            <img src={Ethereum} alt='' className="absolute top-[78%] right-0" />
            <div className="px-[100px]">
                <div style={{ fontSize: "78px" }} className="flex flex-col justify-center font-black text-center text-white leading-[110.5px] max-md:text-4xl mb-10">
                    <div className="justify-center px-5 w-full max-md:max-w-full max-md:text-4xl mt-20">
                        Zusammenstellung
                    </div>
                </div>
                <div className="bg-zinc-900 bg-opacity-50 min-h-[909px] p-10 rounded-[107px] relative" style={{zIndex: 12}}>
                    <div className="flex justify-between items-center">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c998257d46116279529cf1596ba7ebdc8c0e1da69892d403b812d7f680d0460c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="w-full aspect-[0.99] max-w-[270px] h-[270px]"
                        />
                        <div className="bg-[#272E51] py-3 px-5 max-w-[661px] w-full min-h-[495px] h-full rounded-[32px]">
                            <div className="justify-center w-full max-md:max-w-full text-3xl font-bold text-white mt-1">
                                Miner
                            </div>
                            <hr className="bg-white" style={{ paddingTop: "0.4px" }} />
                            <div className="mt-4 flex justify-between">
                                <div className="text-md font-semibold text-white mt-1 w-full">
                                    S19 Pro
                                </div>
                                <div className="flex justify-between w-[30%]">
                                    <div className="text-md font-semibold text-white mt-1">
                                        1 Stk.
                                    </div>
                                    <div className="text-md font-semibold text-white mt-1">
                                        1290.-
                                    </div>

                                </div>
                            </div>

                            <div className="pt-56">
                                <div className="justify-center w-full max-md:max-w-full text-3xl font-bold text-white mt-1">
                                    Strom
                                </div>
                                <hr className="bg-white" style={{ paddingTop: "0.4px" }} />
                                <div className="mt-4 flex justify-end">
                                    <div className="text-md font-semibold text-white mt-1 w-full">
                                        365 Tage
                                    </div>
                                    <div className="flex justify-between w-[40%]">
                                        <div className="text-md font-semibold text-white mt-1">
                                            30’660 kWh
                                        </div>
                                        <div className="text-md font-semibold text-white mt-1">
                                            2146.-
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full mt-5">
                                <div className="text-3xl font-bold text-white mt-1">
                                    Total:
                                </div>
                                <div className="text-3xl font-bold text-white mt-1">
                                    3436.-
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="bg-[#272E51] flex justify-center items-center min-h-[141px] rounded-[32px] mt-48">
                    <div className="px-5 text-6xl font-bold text-white">
                        Miner bestätigen
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miner1