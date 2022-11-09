import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { navigation } from '../../data';
import { logout } from '../../reducers/userReducer';

const Navbar = () => {
    
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    console.log(isAuth)

    const navRef = useRef()

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <header className='md:px-[100px]'>
            <h2 className='text-[25px] font-[400]'>My Data</h2>
            <nav className='flex' ref={navRef}>
                {
                  !isAuth ? (
                    navigation.map((item, idx) => (
                        <Link key={idx + 1} onClick={showNavbar}  to={item.href} 
                        className='mx-4 text-[18px]'>{item.name}</Link>
                    ))
                  )
                  : <p 
                   onClick={() => {
                    showNavbar()
                    dispatch(logout())
                  }  }
                  className='mx-4 text-[18px] cursor-pointer'>Chiqish</p>
                }
                     
                <button className='nav-btn nav-close-btn text-[30px]' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn text-[30px]' onClick={showNavbar}>
              <FaBars/>
            </button>
        </header>
    );
};

export default Navbar;