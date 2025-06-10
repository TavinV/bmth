import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
    { to: '/discografia', label: 'Discografia' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' },
]

const NavLinks = () => {
    return (
        links.map((link) => (
            <NavLink
                key={link.to}
                to={link.to}
                className={() =>
                    `mix-blend-difference text-white font-family-bmth-title tracking-wide uppercase text-xl font-semibold transition-colors duration-300 drop-shadow-2xl hover:scale-101`
                }
            >
                {link.label}
            </NavLink>
        ))
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleNavBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='flex items-center justify-center'>
                <button onClick={toggleNavBar}> {isOpen ? <X /> : <Menu />} </button>
            </div>
            {isOpen && (
                <div className='flex flex-col items-end absolute right-0 p-4 top-16 mt-auto basis-full'>
                    < NavLinks />
                </div>
            )}
        </>
    )
}

export default Nav;
