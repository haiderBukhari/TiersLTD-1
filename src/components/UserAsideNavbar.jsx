import { Link } from 'react-router-dom';
const UserAsideNavbar = () => {
    return (
        <div className="bg-[#242A48] bg-opacity-30 w-full md:w-[273px] h-auto pb-10 md:pb-0 md:h-[500px]" style={{borderTopRightRadius: "20px", borderBottomRightRadius: "20px"}}>
            <div className='flex flex-col items-center pt-10'>
                <Link style={{fontFamily: "Inter"}} className='text-white text-2xl font-semibold opacity-100' to='/user/dashboard'>Dashboard</Link>
                <Link style={{fontFamily: "Inter"}} className='text-white text-2xl font-semibold mt-10' to='/user/wallet'>Wallet</Link>
                <Link style={{fontFamily: "Inter"}} className='text-white text-2xl font-semibold mt-10' to='/user/devices'>Meine Geräte</Link>
                <Link style={{fontFamily: "Inter"}} className='text-white text-2xl font-semibold mt-10' to='/user/bills'>Rechnungen</Link>
            </div>
        </div>
    )
}

export default UserAsideNavbar
