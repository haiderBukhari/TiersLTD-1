import Bitcoin from '../../assets/Bitcoin-1.png'
import Ethereum1 from '../../assets/Monero-2 copy 3.png'
import group from '../../assets/Group 2.png'
import group3 from '../../assets/Group 3.png'
import UserAsideNavbar from '../../components/UserAsideNavbar'
import group3MD from '../../assets/Group 3 (1).png'
import { useState } from 'react'

const Wallet = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative overflow-hidden min-h-[120vh] mt-6 md:mt-0  px-4">
            <img src={Bitcoin} alt='' className="block absolute top-[69%] md:top-[80%]" style={{ zIndex: 100 }} />
            <img src={group} alt='' className="absolute top-[0%] right-0 hidden md:block" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0 hidden md:block" style={{ zIndex: "1" }} />
            <img src={group3MD} alt='' className="absolute top-[0%] left-0 block md:hidden" style={{ zIndex: "1" }} />
            <img src={group} alt='' className="absolute bottom-0 block md:hidden" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[7%] right-[-4%]" />
            <div className={`flex flex-col md:flex-row justify-between w-full relative max-w-[1230px] ${!show && 'md:mt-10'}`} style={{ zIndex: 10 }}>
                <UserAsideNavbar show={show} setShow={setShow} />
                <div className={`bg-[rgba(36,42,72)] bg-opacity-50 backdrop-blur-3xl ${show ? "hidden md:block" : "block"}`} style={{ borderRadius: "20px", minHeight: "500px", maxWidth: "900px", width: "100%" }}>
                    <div className='flex flex-col w-full py-5 px-5 md:px-10'>
                        <h1 className='text-white text-3xl font-bold'>Pool</h1>
                        <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex flex-col md:flex-row px-5 justify-between w-full'>
                            <h1 className='text-white text-xl font-bold text-center md:text-start'>Sie verwenden ein externes Wallet </h1>
                            <h1 className='text-[#F89423] text-xl font-bold text-center md:text-start md:mt-0 mt-3'>Mining Pool ändern</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wallet