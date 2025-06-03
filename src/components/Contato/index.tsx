import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const Contato = () => {
    return (
        <section id="contact" className="py-16 px-4 bg-pink-20">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-pink-600 mb-6">
                    Fale Conosco
                </h3>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 text-gray-700 text-lg">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-pink-600" />
                        <span>(84) 99937-1907</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-pink-600" />
                        <span className="break-all">shirlene.rn@hotmail.com</span>
                    </div>
                </div>

                <p className="text-gray-700 mb-4">Siga-nos nas redes sociais!</p>

                <div className="flex justify-center gap-6 mt-4 text-2xl">
                    <a
                        href="https://www.instagram.com/leneboleira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://wa.me/5584999371907"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
};
