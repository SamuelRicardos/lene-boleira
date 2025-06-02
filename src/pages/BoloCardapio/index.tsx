import { HeaderCardapio } from "../../components/HeaderCardapio";

interface MenuItem {
    name: string;
}

interface MenuSection {
    title: string;
    size?: string;
    items: MenuItem[];
    price: string;
    type: 'traditional' | 'special';
}

const menuData: MenuSection[] = [
    {
        title: 'DOCES TRADICIONAIS',
        size: '15gr',
        items: [
            { name: 'Brigadeiro' },
            { name: 'Beijinho' },
            { name: 'Casadinho' },
            { name: 'Brigadeiro branco' },
            { name: 'Prestígio (Brigadeiro de chocolate com cobertura de coco)' },
        ],
        price: 'R$150,00',
        type: 'traditional',
    },
    {
        title: 'DOCES SABORES ESPECIAIS',
        items: [
            { name: 'Ninho com Nutella' },
            { name: 'Ferrero Rocher' },
            { name: 'Surpresa de uva' },
            { name: 'Paçoquinha' },
            { name: 'Romeu e Julieta' },
            { name: 'Churros' },
            { name: 'Crocante' },
        ],
        price: 'R$ 180,00',
        type: 'special',
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

                    <section className="flex flex-col md:flex-row justify-center gap-8 p-4 relative z-10">
                        {menuData.map((section, index) => (
                            <div
                                key={index}
                                className={`
                flex-1 min-w-[280px] max-w-md p-6 rounded-lg shadow-md text-center
                flex flex-col justify-between  /* Adicionado flexbox para alinhar conteúdo */
                ${section.type === 'traditional' ? 'bg-pink-100 border-2 border-dashed border-pink-300' : 'bg-pink-300'}
              `}
                            >
                                <div>
                                    <h2 className="font-['Pacifico'] text-3xl text-pink-700 mb-4">
                                        {section.title}
                                    </h2>
                                    {section.size && (
                                        <p className="text-gray-600 text-sm mb-4">Tamanho: {section.size}</p>
                                    )}
                                    <ul className="list-none p-0 m-0 text-left text-gray-800 text-lg flex-grow">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="mb-2">
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-xl font-bold text-pink-700 mt-6 text-center">
                                    O valor do cento {section.price.startsWith('R$') ? 'está' : ''}: {section.price}
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="text-center py-10 relative z-10">
                        <h3 className="font-['Pacifico'] text-4xl text-pink-700 mb-8">
                            Bolos decorados para a sua festa!
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 mb-10">
                            <img
                                src="https://placehold.co/300x200/FCE7F3/BE185D?text=Bolo+Decorado+1"
                                alt="Bolo Decorado 1"
                                className="w-full max-w-xs h-auto rounded-lg shadow-md object-cover"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x200/FCE7F3/BE185D?text=Erro+Imagem'; }}
                            />
                            <img
                                src="https://placehold.co/300x200/FCE7F3/BE185D?text=Bolo+Decorado+2"
                                alt="Bolo Decorado 2"
                                className="w-full max-w-xs h-auto rounded-lg shadow-md object-cover"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x200/FCE7F3/BE185D?text=Erro+Imagem'; }}
                            />
                            <img
                                src="https://placehold.co/300x200/FCE7F3/BE185D?text=Bolo+Decorado+3"
                                alt="Bolo Decorado 3"
                                className="w-full max-w-xs h-auto rounded-lg shadow-md object-cover"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x200/FCE7F3/BE185D?text=Erro+Imagem'; }}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
