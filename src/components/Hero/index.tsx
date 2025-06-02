import { FaWhatsapp } from "react-icons/fa";
import BoleiraImage from "../../images/LeneBoleira.jpeg";
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
        <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition flex items-center gap-2 mx-auto md:mx-0">
          Faça seu pedido
          <FaWhatsapp size={18} />
        </button>
      </div>

      <div className="relative z-10 md:w-1/2">
        <img
          src={BoleiraImage}
          alt="Foto da boleira"
          className="w-full max-w-sm mx-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};
