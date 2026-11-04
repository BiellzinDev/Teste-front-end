const imgHero = './public/assets/hero.jpg'
import '../index.css'

const Hero = () => {
  return (
    <section className="flex relative justify-start items-center h-80 sm:h-97.5 w-full overflow-hidden">
        {/* Imagem de Fundo */}
        <picture className='w-full h-full absolute inset-0'>
          <img src={imgHero} className="object-[50%_46%] object-cover w-full h-full" alt="Imagem de uma loja em black friday" />
        </picture>

        {/* Caixa de Texto Responsiva */}
        <section className="absolute flex flex-col text-left px-6 sm:pl-20 items-start gap-3 sm:gap-4 bg-(--back) w-full sm:w-auto h-full sm:h-auto justify-center sm:justify-start">
            <h2 className='font-semibold text-3xl sm:text-5xl text-white w-full sm:w-4/5 leading-tight'>
              Venha conhecer nossas promoções
            </h2>
            <p className='text-xl sm:text-[2rem] text-white'>
              <strong className='text-(--text-yellow) font-semibold'>50% off </strong>nos produtos
            </p>
            <button className='bg-(--text-yellow) text-sm sm:text-base font-semibold py-3 px-8 sm:px-13 rounded-[5px] hover:text-white hover:opacity-95 cursor-pointer transition-opacity'>
              Ver produto
            </button>
        </section>
    </section>
  )
}

export default Hero