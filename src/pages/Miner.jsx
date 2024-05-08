import { Header } from "../components/Header/Header"
import { MiningComponent } from "../components/MiningComponent"
import Bitcoin from '../assets/Bitcoin-1.png'
import Ethereum from '../assets/Etherium-2 copy 1.png'
import Ethereum1 from '../assets/Monero-2 copy 3.png'
import group from '../assets/Group 2.png'

const Miner = () => {
    return (
        <div className="relative overflow-hidden">
            <img src={Bitcoin} alt='' className="hidden md:block absolute"/>
            <img src={Ethereum} alt='' className="hidden md:block absolute top-[30%]"/>
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[63%]"/>
            <img src={group} alt='' className="absolute top-[13%] right-0"/>
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[19%] right-[-3%]"/>
            <img src={Bitcoin} alt='' className="hidden md:block absolute top-[50%] right-0"/>
            <img src={Ethereum} alt='' className="hidden md:block absolute top-[78%] right-0"/>
            <div className="px-[10px] md:px-[100px]">
                <div style={{fontSize: "78px"}} className="flex flex-col justify-center font-black text-center text-white leading-[110.5px] max-md:text-4xl mb-10">
                    <div className="justify-center w-full md:px-5 w-full max-md:max-w-full text-2xl md:text-4xl mt-20">
                        Suche deinen Miner aus
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {
                        new Array(12).fill(1).map((Item) => (
                            <div key={Item} className="mr-5 mb-5" style={{zIndex: "10"}}>
                                <MiningComponent />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Miner