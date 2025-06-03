import { FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiWrappedSweet } from "react-icons/gi";

export const Cardapio = () => {
  return (
    <section id="cardapio" className="py-16 px-4 bg-pink-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">
          Confira nosso Cardápio!
        </h2>
        <p className="text-gray-700 mb-10">
          Selecione uma das opções abaixo para explorar nossas delícias:
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          <Link
            to="/cardapio-bolos"
            className="flex items-center justify-center w-40 sm:w-60 h-36 sm:h-40 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-pink-100"
          >
            <FaBirthdayCake className="text-pink-600 text-3xl sm:text-4xl mr-2 sm:mr-3" />
            <span className="text-lg sm:text-xl font-semibold text-pink-700">Bolos</span>
          </Link>

          <Link
            to="/cardapio-doces"
            className="flex items-center justify-center w-40 sm:w-60 h-36 sm:h-40 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-pink-100"
          >
            <GiWrappedSweet className="text-pink-600 text-3xl sm:text-4xl mr-2 sm:mr-3" />
            <span className="text-lg sm:text-xl font-semibold text-pink-700">Doces</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
