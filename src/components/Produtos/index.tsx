import { PiCake } from "react-icons/pi";
import Bolo1 from "../../images/Bolo1.jpeg";
import Bolo2 from "../../images/Bolo2.jpeg";
import Bolo3 from "../../images/Bolo3.jpeg";
import { motion } from "framer-motion";

export const Produtos = () => {
  const bolos = [
    { img: Bolo1, nome: "Bolo de Chocolate" },
    { img: Bolo2, nome: "Bolo de Morango" },
    { img: Bolo3, nome: "Bolo de Festa" },
  ];

  // Variants para as ondas
  const waveVariant = {
    animate: {
      rotate: [0, 0, 0],       // gira de 0° a 5° e volta
      scale: [1, 1.05, 1],    // escala pulsante
      opacity: [0.8, 0.95, 0.8], // opacidade variando
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const waveVariantReverse = {
    animate: {
      rotate: [-6, -1, -6],
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.85, 0.7],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="products" className="relative py-20 px-4 bg-white overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
  {/* Onda canto superior esquerdo animada */}
  <motion.div
    className="absolute top-0 left-0 w-80 h-80 bg-pink-300 opacity-80 rounded-br-[60%_80%] origin-top-left shadow-inner"
    variants={waveVariant}
    animate="animate"
    style={{ transformOrigin: "top left" }}
  ></motion.div>

  {/* Onda canto inferior direito animada */}
  <motion.div
    className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 opacity-70 rounded-tl-[60%_80%] origin-top-right shadow-inner"
    variants={waveVariantReverse}
    animate="animate"
    style={{ transformOrigin: "top right" }}
  ></motion.div>
</div>

      <div className="relative max-w-6xl mx-auto z-10">
        <h3 className="text-4xl font-extrabold text-pink-600 text-center mb-12">
          <span className="flex justify-center items-center gap-2">
            <PiCake size={32} className="text-pink-500" />
            Nossos bolos
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bolos.map((bolo, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={bolo.img}
                alt={bolo.nome}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-pink-700 mb-1">
                  {bolo.nome}
                </h4>
                <p className="text-sm text-gray-500">
                  Feito com ingredientes frescos e muito amor.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
