import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`px-24 py-4 sticky top-0 z-50 ${isScrolled ? 'bg-slate-100 bg-opacity-10 backdrop-blur-xl'  : ''}`}>
            <div className='flex justify-between items-center'>
                <img src={logo} className='w-[10rem] rounded-full' alt="" />
                <div>
                    <ul className='flex items-center gap-12 '>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li className='px-4 bg-gradient-to-r from-[#F73CF2] to-[#46A2DE] py-2 rounded-full'>Sign up</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;