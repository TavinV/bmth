import Logo from "./Logo";

const Header = () => {
    return (
        <header className="bg-bmth-black sticky top-0 z-[20] mx-auto flex w-full justify-between items-center gap-3 text-white p-4">
        <Logo/>
        </header>
    );
}

export default Header;