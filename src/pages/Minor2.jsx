import { Header } from "../components/Header/Header"
import Bitcoin from '../assets/Bitcoin-1.png'
import Ethereum from '../assets/Etherium-2 copy 1.png'
import Ethereum1 from '../assets/Monero-2 copy 3.png'
import group from '../assets/Group 2.png'
import group3 from '../assets/Group 3.png'

const Miner2 = () => {
    return (
        <div className="relative overflow-hidden min-h-[300vh]">
            <Header />
            <img src={Bitcoin} alt='' className="absolute" />
            <img src={Ethereum} alt='' className="absolute top-[30%] left-0" />
            <img src={Ethereum1} alt='' className="absolute top-[63%]" />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="absolute top-[19%] right-[-3%]" />
            <img src={Bitcoin} alt='' className="absolute top-[50%] right-0" />
            <img src={Ethereum} alt='' className="absolute top-[78%] right-0" />
            <div className="px-[100px]">
                <div style={{ fontSize: "78px" }} className="flex flex-col justify-center font-black text-center text-white leading-[110.5px] max-md:text-4xl mb-10">
                    <div className="justify-center px-5 w-full max-md:max-w-full max-md:text-4xl mt-20">
                        Anmelden
                    </div>
                </div>
                <div className="bg-zinc-900 min-h-[400px] p-10 px-20 rounded-[107px] relative flex justify-between items-center" style={{ zIndex: 20 }}>
                    <div className="bg-[#272E51] min-h-[241px] w-[463px] rounded-[32px] flex items-center justify-center">
                        <div className="text-lg font-semibold text-white mt-1 w-full text-center">
                        Anmelden
                        </div>
                    </div>
                    <div className="bg-[#272E51] min-h-[241px] w-[463px] rounded-[32px] flex items-center justify-center">
                        <div className="text-lg font-semibold text-white mt-1 w-full text-center">
                        Als neuer Kunde registieren
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miner2