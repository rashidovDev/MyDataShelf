import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { getFiles, searchFiles } from '../../actions/file';
import { navigation } from '../../data';
import { showLoader } from '../../reducers/appReducer';
import { logout } from '../../reducers/userReducer';

const Navbar = () => {

  const [searchName, setSearchName] = useState('')
  const [searchTimeOut, setSearchTimeOut] = useState(false)
    
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    console.log(isAuth)

    const navRef = useRef()

    function searchChangeHandler(e) {
      setSearchName(e.target.value)
      if(searchTimeOut !== false) {
       clearTimeout(searchTimeOut)
      }
      dispatch(showLoader())
      if(e.target.value !== ''){
 
        setSearchTimeOut(setTimeout((value) => {
          dispatch(searchFiles(e.target.value))
        }, 500, e.target.value))
      }else {
       dispatch(getFiles(currentDir))
      }
    }

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <div className='bg-[#29335C] z-50'>
        <header className='md:w-[80%] m-auto px-4'>
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
        </div>
    );
};

export default Navbar;