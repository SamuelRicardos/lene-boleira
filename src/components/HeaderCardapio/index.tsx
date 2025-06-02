import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../images/LogoLene2.png";

export const HeaderCardapio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative z-50">
      <RouterLink to="/">
        <img
          src={Logo}
          alt="Logo Lene Boleira"
          className="h-15 w-auto cursor-pointer"
        />
      </RouterLink>

      <nav className="hidden md:flex space-x-6">
        <RouterLink
          to="/"
          className="cursor-pointer text-gray-700 hover:text-pink-600"
        >
          Início
        </RouterLink>
        <RouterLink
          to="contact"
          className="cursor-pointer text-gray-700 hover:text-pink-600"
        >
          Cardápios
        </RouterLink>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Abrir menu">
          {isOpen ? <FiX size={28} className="text-pink-600" /> : <FiMenu size={28} className="text-pink-600" />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden">
          <RouterLink
            to="home"
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Início
          </RouterLink>
          <RouterLink
            to="about"
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Cardápios
          </RouterLink>
        </nav>
      )}
    </header>
  );
};
