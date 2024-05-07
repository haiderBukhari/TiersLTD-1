import { Link } from 'react-router-dom';
const AdminAsideNavbar = () => {
    return (
        <div className="bg-[#242A48] bg-opacity-30" style={{borderTopRightRadius: "20px", borderBottomRightRadius: "20px", height:"500px", width: "273px"}}>
            <div className='flex flex-col items-center pt-10'>
                <Link style={{fontFamily: "Inter"}} className='text-white text-2xl font-semibold opacity-100' to='/admin/miner'>Miner</Link>
                <Link style={{fontFamily: "Inter"}} className='text-white text-2xl font-semibold mt-10' to='/admin/kunden'>Kunden</Link>
                <Link style={{fontFamily: "Inter"}} className='text-white text-2xl font-semibold mt-10' to='/admin/shop'>Shop</Link>
            </div>
        </div>
    )
}

export default AdminAsideNavbar