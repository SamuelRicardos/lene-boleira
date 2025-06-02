import { HeaderCardapio } from "../../components/HeaderCardapio";
import Bolo1 from "../../images/bolo.jpeg"
import Bolo2 from "../../images/Bolo4.jpeg"
import Bolo3 from "../../images/Bolo3.jpeg"
interface MenuItem {
    name: string;
}

interface MenuSection {
    title: string;
    items: MenuItem[];
    price?: string;
    type: 'simple-cakes' | 'tiered-cakes' | 'extras' | 'fillings';
}

const bolosMenuData: MenuSection[] = [
    {
        title: 'SIMPLES',
        items: [
            { name: '10 fatias - R$130,00' },
            { name: '15 fatias - R$ 175,00' },
            { name: '20 fatias - R$ 215,00' },
            { name: '25 fatias - R$ 255,00' },
            { name: '30 fatias - R$ 290,00' },
            { name: '35 fatias - R$ 335,00' },
        ],
        type: 'simple-cakes',
    },
    {
        title: '2 ANDARES',
        items: [
            { name: '10 fatias - R$180,00' },
            { name: '15 fatias - R$ 225,00' },
            { name: '20 fatias - R$ 265,00' },
            { name: '25 fatias - R$ 305,00' },
            { name: '30 fatias - R$ 340,00' },
            { name: '35 fatias - R$ 385,00' },
        ],
        type: 'tiered-cakes',
    },
    {
        title: 'EXTRAS',
        items: [
            { name: 'Brigadeiro' },
            { name: 'Morangos' },
            { name: 'Balões' },
        ],
        type: 'extras',
    },
    {
        title: 'RECHEIOS',
        items: [
            { name: 'Ninho' },
            { name: 'Brigadeiro tradicional' },
            { name: 'Brigadeiro trufado (chocolate meio amargo)' },
            { name: 'Doce de Leite' },
            { name: 'Beijinho' },
            { name: 'Crocante de Amendoim' },
            { name: 'Brigadeiro branco' },
        ],
        type: 'fillings',
    },
];

export const BoloCardapio = () => {
    return (
        <div>
            <HeaderCardapio />
            <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
                <div className="relative max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden md:p-8 p-4">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-pink-200 rounded-full opacity-60 transform translate-x-1/3 -translate-y-1/3 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-60 transform -translate-x-1/3 translate-y-1/3 z-0"></div>
                    <div className="absolute top-1/4 right-4 text-pink-400 z-0">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                    </div>

                    <header className="text-center py-8 relative z-10">
                        <h1 className="font-['Pacifico'] text-5xl text-pink-700 mb-2 leading-tight">
                            Lene Boleira
                        </h1>
                        <div className="text-gray-700 text-lg mt-4">
                            <p>(84) 99937-1907</p>
                            <p>Pix: <strong className="text-pink-700">010.485.104-09</strong></p>
                            <p>Nome: Shirlene Cristiane Teixeira dos Santos</p>
                        </div>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 relative z-10">
                        {bolosMenuData.map((section, index) => (
                            <div
                                key={index}
                                className={`
                flex-1 min-w-[280px] max-w-md p-6 rounded-lg shadow-md text-center
                flex flex-col justify-between
                ${section.type === 'simple-cakes' ? 'bg-pink-100' :
                                        section.type === 'tiered-cakes' ? 'bg-pink-300' :
                                            'bg-pink-100 border-2 border-dashed border-pink-300'
                                    }
                `}
                            >
                                <div>
                                    <h2 className="font-['Pacifico'] text-3xl text-pink-700 mb-4">
                                        {section.title}
                                    </h2>
                                    <ul className="list-none p-0 m-0 text-left text-gray-800 text-lg flex-grow">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="mb-2">
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {section.price && (
                                    <div className="text-2xl font-bold text-pink-700 mt-6 text-right">
                                        {section.price.startsWith('R$') ? 'O valor do cento está:' : ''} {section.price}
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>

                    <section className="text-center py-10 relative z-10">
                        <h3 className="font-['Pacifico'] text-3xl sm:text-4xl text-pink-700 mb-8 px-4">
                            Doces para a sua festa!
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 px-4">
                            {[Bolo1, Bolo2, Bolo3].map((src, index) => (
                                <div
                                    key={index}
                                    className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                                >
                                    <img
                                        src={src}
                                        alt={`Doce Decorado ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                'https://placehold.co/300x300/FCE7F3/BE185D?text=Erro+Imagem';
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
