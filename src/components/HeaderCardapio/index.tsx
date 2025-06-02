import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../images/LogoLene2.png";
import { FiChevronDown } from "react-icons/fi"

export const HeaderCardapio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

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

      {/* Menu Desktop */}
      <nav className="hidden md:flex space-x-6 items-center">
        <RouterLink
          to="/"
          className="cursor-pointer text-gray-700 hover:text-pink-600"
        >
          Início
        </RouterLink>

        {/* Cardápios Dropdown */}
<div className="relative cursor-pointer text-gray-700 group">
      <button
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center gap-1 hover:text-pink-600 transition-colors duration-300 focus:outline-none"
      >
        Cardápios
        <FiChevronDown
          className={`mt-[2px] text-pink-500 transition-transform duration-300 ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-0 w-40 bg-white border border-pink-100 shadow-lg rounded-xl z-50 animate-fade-in">
          <RouterLink
            to="/cardapio-bolos"
            className="block px-5 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors duration-200 rounded-t-xl"
            onClick={() => setShowDropdown(false)}
          >
            Bolos
          </RouterLink>
          <RouterLink
            to="/cardapio-doces"
            className="block px-5 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors duration-200 rounded-b-xl"
            onClick={() => setShowDropdown(false)}
          >
            Doces
          </RouterLink>
        </div>
      )}
    </div>
      </nav>

      {/* Botão Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Abrir menu">
          {isOpen ? (
            <FiX size={28} className="text-pink-600" />
          ) : (
            <FiMenu size={28} className="text-pink-600" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden">
          <RouterLink
            to="/"
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Início
          </RouterLink>

          {/* Subitens no mobile */}
          <RouterLink
            to="/cardapio-bolos"
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Bolos
          </RouterLink>
          <RouterLink
            to="/cardapio-doces"
            className="cursor-pointer text-gray-700 hover:text-pink-600"
            onClick={closeMenu}
          >
            Doces
          </RouterLink>
        </nav>
      )}
    </header>
  );
};
