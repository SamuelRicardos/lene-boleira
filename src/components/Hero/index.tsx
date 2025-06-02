import { FaWhatsapp } from "react-icons/fa";
import BoleiraImage from "../../images/LeneBoleira2.png";
import BackgroundImage from "../../images/bolos.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left overflow-hidden">
      <img
        src={BackgroundImage}
        alt="Plano de fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 md:w-1/2 text-white md:ml-50">
        <h2 className="text-3xl font-extrabold mb-3">
          Bolos caseiros com sabor de amor
        </h2>
        <p className="text-base mb-4">
          Encomende bolos deliciosos para todas as ocasiões
        </p>
        <a
          href="https://wa.me/5584999371907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-pink-500 text-white py-2 px-3 rounded-full hover:bg-pink-600 transition"
        >
          Faça seu pedido
          <FaWhatsapp className="text-xl" />
        </a>
      </div>

<div className="relative z-10 mx-auto p-1 rounded-full bg-pink-100 shadow-lg">
  <img
    src={BoleiraImage}
    alt="Foto da boleira"
    className="w-full max-w-sm mx-auto object-cover rounded-full"
  />
</div>
    </section>
  );
};
