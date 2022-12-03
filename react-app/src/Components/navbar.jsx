import react, {useState} from "react";
import {Link} from "react-router-dom";

function Navbar(){
    const[nav,setnav] = useState(false); 

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

    return(
        
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="/" className='logo'>
                Home
            </a>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <dl className=' menu'>
                <dd><Link to='/log_in'>Log In</Link></dd>
                
                
            </dl>
        </nav>
    )
}

export default Navbar;