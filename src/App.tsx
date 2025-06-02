import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Produtos } from "./components/Produtos";
import { Sobre } from "./components/Sobre";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-pink-50">
      <Header/>
      <Hero/>
      <Produtos/>
      <Sobre/>
      <Contato/>
      <Footer/>

    </div>
  );
}

export default App;
