import { PiCake } from "react-icons/pi";
import Bolo1 from "../../images/Bolo1.jpeg";
import Bolo2 from "../../images/Bolo2.jpeg";
import Bolo3 from "../../images/Bolo3.jpeg";

export const Produtos = () => {
  const bolos = [
    { img: Bolo1, nome: "Bolo de Chocolate" },
    { img: Bolo2, nome: "Bolo de Morango" },
    { img: Bolo3, nome: "Bolo de Festa" },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-extrabold text-pink-600 text-center mb-12">
          <span className="flex justify-center items-center gap-2">
            <PiCake size={32} className="text-pink-500" />
            Nossos bolos
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bolos.map((bolo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={bolo.img}
                alt={bolo.nome}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-pink-700 mb-1">{bolo.nome}</h4>
                <p className="text-sm text-gray-500">Feito com ingredientes frescos e muito amor.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
