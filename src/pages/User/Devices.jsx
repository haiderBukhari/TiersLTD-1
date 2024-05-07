import Bitcoin from '../../assets/Bitcoin-1.png'
import Ethereum1 from '../../assets/Monero-2 copy 3.png'
import group from '../../assets/Group 2.png'
import group3 from '../../assets/Group 3.png'
import { Header } from '../../components/Header/Header'
import UserAsideNavbar from '../../components/UserAsideNavbar'

const Devices = () => {
    return (
        <div className="relative overflow-hidden min-h-[120vh]">
            <Header />
            <img src={Bitcoin} alt='' className="absolute top-[80%]" style={{ zIndex: 100 }} />
            <img src={group} alt='' className="absolute top-[0%] right-0" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="absolute top-[7%] right-[-4%]" />
            <div className='flex justify-between w-full relative max-w-[1230px]' style={{ zIndex: 10 }}>
                <UserAsideNavbar />
                <div className="bg-[rgba(36,42,72)] bg-opacity-50" style={{ borderRadius: "20px", height: "500px", maxWidth: "900px", width: "100%" }}>
                    <div className='flex flex-col w-full py-5 px-10'>
                        <h1 className='text-white text-3xl font-bold mb-5'>Meine Geräte</h1>
                        <div className='bg-[#1A1B23] mt-2 rounded-lg py-2 flex px-5 justify-between w-full'>
                            <div className='w-[30%] flex justify-between'>
                                <h1 className='text-white text-xl font-bold'>S19 Pro</h1>
                                <h1 className='text-white text-xl font-bold'>SN9215871</h1>
                            </div>
                            <h1 className='text-[#18A786] text-xl font-bold'>BTC abheben</h1>
                        </div>
                        <div className='bg-[#1A1B23] mt-5 rounded-lg py-2 flex px-5 justify-between w-full'>
                            <div className='w-[30%] flex justify-between'>
                                <h1 className='text-white text-xl font-bold'>S19 Pro</h1>
                                <h1 className='text-white text-xl font-bold'>SN9215871</h1>
                            </div>
                            <h1 className='text-[#18A786] text-xl font-bold'>Versendet</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Devices