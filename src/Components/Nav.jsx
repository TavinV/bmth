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
                className={({ isActive }) =>
                    `text-white font-family-bmth-title uppercase text-xl font-semibold transition-colors duration-300 ${isActive ? 'border-b-2 border-white' : ''} hover:text-gray-300`
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
            <nav className='hidden md:flex justify-end items-center gap-12 p-4 w-1/3'>
                <NavLinks />
            </nav >
            <div className='md:hidden flex items-center justify-center'>
                <button onClick={toggleNavBar}> {isOpen ? <X /> : <Menu />} </button>
            </div>
            {isOpen && (
                <div className='flex flex-col items-center basis-full'>
                    < NavLinks />
                </div>
            )}
        </>
    )
}

export default Nav;