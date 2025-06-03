import { Cardapio } from "../../components/Cardapio"
import { Contato } from "../../components/Contato"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Produtos } from "../../components/Produtos"
import { Sobre } from "../../components/Sobre"

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Produtos />
      <Cardapio />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  )
}
