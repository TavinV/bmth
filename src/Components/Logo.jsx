import logo from '../assets/bmthlogo.png';
const Logo = () => {
    return <div className="flex justify-around items-center gap-5">
        <img className='logo w-14 h-14 ' src={logo} alt="bring me the horizon logo" />
        {/* <h1 className="text-xl md:text-3xl font-bold ">Bring me the horizon</h1> */}
    </div>
}

export default Logo;