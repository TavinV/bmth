import logo from '../assets/bmthlogo.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return <div className="flex justify-around items-center gap-5">
        
        <NavLink className="text-xl md:text-3xl font-bold tracking-widest uppercase font-family-bmth-title " to='/'> <img className='logo w-14 h-14 ' src={logo} alt="bring me the horizon logo" /> </NavLink>

    </div>
}

export default Logo;