import Logo from "./Logo";
import Nav from './Nav'

const Header = () => {
    return (
        <header className="bg-transparent sticky top-0 z-[80] mx-auto flex w-full flex-wrap justify-between items-center gap-3 p-4">
            <div className="relative">
                <Logo className=" text-white" />
            </div>
            <Nav />
        </header>
    );
}

export default Header;