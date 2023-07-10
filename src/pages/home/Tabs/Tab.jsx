import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Overview = () => {
    return (
        <div className='mt-6'>
            <div className='border-b-2 border-gray-700 w-[70%] px-3 py-3 flex gap-4 items-center'>
                <div>
                    <ul className='flex gap-6'>
                        <li >
                            <NavLink
                                to='/search'
                                className={({ isActive }) => (isActive ? "border-b-2 border-white py-[12px]" : "default")}
                            ><button className='text-xl mt-1'> <AiOutlineSearch /> </button></NavLink>
                        </li>
                        
                        <li >
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? "border-b-2 border-white py-[18px]" : "default")}
                            >OverView</NavLink>
                        </li>
                        <li >
                            <NavLink
                                to='/notes'
                                className={({ isActive }) => (isActive ? "border-b-2 border-white py-[18px]" : "default")}
                            >Notes</NavLink>
                        </li>
                        <li >
                            <NavLink
                                to='/announcements'
                                className={({ isActive }) => (isActive ? "border-b-2 border-white py-[18px]" : "default")}
                            >Announcements</NavLink>
                        </li>
                        <li >
                            <NavLink
                                to='/reviews'
                                className={({ isActive }) => (isActive ? "border-b-2 border-white py-[18px]" : "default")}
                            >Reviews</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;