const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 w-full font-family-bmth-title font-bold z-20">
            <div className="container mx-auto text-center">
                <p className="text-s">
                    &copy; {new Date().getFullYear()} Church of Genxsis
                </p>
                <div className="flex w-1/2 tracking-widest mx-auto justify-center items-center gap-4 mt-2">

                </div>
                <p className="text-sm mt-2">
                    Youtopia 2025
                    It's like I walked into a dream & stepped out of the coma
                </p>
            </div>
        </footer>
    );
}

export default Footer;