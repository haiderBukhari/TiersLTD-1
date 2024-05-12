import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const UserAsideNavbar = ({ show, setShow }) => {
    return (
        <div className='w-full md:w-auto'>
            <div className={`w-full px-2 py-2  ${'block md:hidden'}`}>
                <Menu onClick={() => setShow(!show)} className='text-white w-10 h-10 ' /> {/* Adjust the width and height as needed */}
            </div>
            <div  className={`bg-[#242A48] bg-opacity-30 w-full md:w-[273px] h-auto pb-10 md:pb-0 md:h-[500px] relative md:block ${show ? 'block pl-3 ml-[-15px] md:ml-1 w-[240px] z-30 bg-[#242A48] h-[480px] bg-opacity-60' : 'hidden md:block'}`} style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px", zIndex: 10, width: `${show} && 240px`, height: `${show} && 480px`}}>
                <div className='flex flex-col items-center pt-10 absolute md:relative' >
                    <Link style={{ fontFamily: "Inter" }} className='text-white text-2xl font-semibold opacity-100' to='/user/dashboard'>Dashboard</Link>
                    <Link style={{ fontFamily: "Inter" }} className='text-white text-2xl font-semibold mt-10' to='/user/wallet'>Pool</Link>
                    <Link style={{ fontFamily: "Inter" }} className='text-white text-2xl font-semibold mt-10' to='/user/devices'>Meine Geräte</Link>
                    <Link style={{ fontFamily: "Inter" }} className='text-white text-2xl font-semibold mt-10' to='/user/bills'>Rechnungen</Link>
                </div>
            </div>
        </div>
    )
}

export default UserAsideNavbar
