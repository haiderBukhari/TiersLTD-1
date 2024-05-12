import Bitcoin from '../../assets/Bitcoin-1.png'
import Ethereum1 from '../../assets/Monero-2 copy 3.png'
import group from '../../assets/Group 2.png'
import group3 from '../../assets/Group 3.png'
import group3MD from '../../assets/Group 3 (1).png'
import UserAsideNavbar from '../../components/UserAsideNavbar'
import map from '../../assets/image 2.png'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState } from 'react'
// import map from '../../assets/map.png'

const UserDashboard = () => {
    const [show, setShow] = useState(false);
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40], // Sample data points
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    // Explicitly specify the scale type for the x-axis
    const options = {
        scales: {
            x: {
                type: 'category', // Specify the scale type as 'category'
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10, // Adjust the maximum number of ticks displayed if needed
                },
            },
        },
    };

    return (
        <div className="relative overflow-hidden min-h-[120vh] mt-6 md:mt-0 px-4">
            <img src={Bitcoin} alt='' className="block absolute top-[69%] md:top-[80%]" style={{ zIndex: 100 }} />
            <img src={group} alt='' className="absolute top-[0%] right-0 hidden md:block" style={{ zIndex: "1" }} />
            <img src={group3} alt='' className="absolute top-[0%] left-0 hidden md:block" style={{ zIndex: "1" }} />
            <img src={group3MD} alt='' className="absolute top-[0%] left-0 block md:hidden" style={{ zIndex: "1" }} />
            <img src={group} alt='' className="absolute bottom-0 block md:hidden" style={{ zIndex: "1" }} />
            <img src={Ethereum1} alt='' className="hidden md:block absolute top-[7%] right-[-4%]" />
            <div className={`flex flex-col md:flex-row justify-between w-full relative max-w-[1230px] ${!show && 'md:mt-10'}`} style={{ zIndex: 10 }}>
                <UserAsideNavbar show={show} setShow={setShow} />
                <div className={`bg-[rgba(36,42,72)] bg-opacity-50 ml-0 md:ml-10 backdrop-blur-3xl ${show ? "hidden md:block" : "block"}`} style={{ borderRadius: "20px", minHeight: "500px", maxWidth: "full", width: "100%" }}>
                    <div className='flex flex-col md:flex-row w-full py-5 px-5 md:px-10'>
                        <div className='mt-4 w-[60%]'>
                            <h1 className='text-white text-3xl font-bold'>Dashboard</h1>
                            <Line className='' data={data} options={options} />
                        </div>
                        <div className='ml-2 md:ml-4 mt-5 md:mt-0 w-full'>
                            <div className='w-full'>
                                <h1 className='text-white text-3xl font-bold '>Rechnungen</h1>
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