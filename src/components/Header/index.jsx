import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <a href="#" className="text-4xl font-bold text-green-600">MoveisProntos</a>
                <nav className="hidden md:flex space-x-6 text-lg font-medium">
                    <a href="#home" className="hover:text-green-600 transition duration-300">Home</a>
                    <a href="#services" className="hover:text-green-600 transition duration-300">Serviços</a>
                    <a href="#about" className="hover:text-green-600 transition duration-300">Sobre</a>
                    <a href="#blog" className="hover:text-green-600 transition duration-300">Blog</a>
                    <a href="#contact" className="hover:text-green-600 transition duration-300">Contato</a>
                </nav>

                {/* Menu Hamburguer para telas menores */}
                <button
                    className="md:hidden text-2xl text-green-600"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? "X" : "☰"}
                </button>
            </div>

            {/* Menu móvel */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-row-reverse bg-white shadow-md">
                    <div className="flex flex-col space-y-4 py-4 px-3 items-center">
                        <a href="#home" className="hover:text-green-600 transition duration-300">Home</a>
                        <a href="#services" className="hover:text-green-600 transition duration-300">Serviços</a>
                        <a href="#about" className="hover:text-green-600 transition duration-300">Sobre</a>
                        <a href="#blog" className="hover:text-green-600 transition duration-300">Blog</a>
                        <a href="#contact" className="hover:text-green-600 transition duration-300">Contato</a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
