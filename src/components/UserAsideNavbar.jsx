import { Link } from 'react-router-dom';
const UserAsideNavbar = () => {
    return (
        <div className="bg-[#242A48] bg-opacity-30" style={{borderTopRightRadius: "20px", borderBottomRightRadius: "20px", height:"500px", width: "273px"}}>
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
