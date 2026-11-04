import Header from './components/Header'
import Hero from './components/Hero'
import NavProdutos from './components/NavProdutos'
import Carrosel from './components/Carrosel'
import Parceiros from './components/Parceiros'
import CarroselRelacionado from './components/CarroselRelacionado'
import Marcas from './components/Marcas'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Hero />
        <NavProdutos />
        <Carrosel />
        <Parceiros />
        <CarroselRelacionado />
        <Parceiros />
        <Marcas />
        <CarroselRelacionado />
        <Footer />
      </main>
    </>
  )
}

export default App