import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import Logo from "../../images/LogoLene2.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative z-50">

      <img
        src={Logo}
        alt="Logo Lene Boleira"
        className="h-15 w-auto"
      />

      <nav className="hidden md:flex space-x-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-pink-600"
        >
          Início
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-pink-600"
        >
          Sobre
        </Link>
        <Link
          to="products"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-pink-600"
        >
          Bolos
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer text-gray-700 hover:text-pink-600"
        >
          Contato
        </Link>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Abrir menu">
          {isOpen ? <FiX size={28} className="text-pink-600" /> : <FiMenu size={28} className="text-pink-600" />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Bolos
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
};
