const imgLojaApple = '/assets/loja-apple.svg'
import '../index.css'

const Parceiros = () => {
  return (
    <section className="w-full flex items-center justify-center pt-12 md:pt-21 px-4 md:px-0">
        {/* Container principal responsivo: empilhado em mobile (flex-col) e lado a lado em desktop (md:flex-row) */}
        <div className="w-[90%] flex flex-col md:flex-row max-w-7xl items-center justify-center gap-4 md:gap-6">
            
            {/* Primeiro Banner */}
            <article className="relative w-full flex-1 flex justify-start items-center">
                <picture className="w-full h-48 sm:h-64 md:h-auto">
                    <img src={imgLojaApple} className="w-full h-full object-cover rounded-2xl md:rounded-3xl" alt="Imagem da loja da Apple" />
                </picture>
                
                {/* Conteúdo sobreposto ajustado para mobile */}
                <div className="absolute left-6 bottom-6 md:left-11 md:bottom-10 flex flex-col gap-2 pr-6">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-white">Parceiros</h2>
                    <p className="text-white text-xs sm:text-sm md:text-base w-full sm:w-3/5">Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="font-bold text-[#271c47] w-28 sm:w-36 bg-(--text-yellow) py-2 sm:py-3 text-xs sm:text-sm rounded-md cursor-pointer hover:text-white hover:opacity-95 transition-opacity">
                        Confira
                    </button>
                </div>
            </article>

            {/* Segundo Banner */}
            <article className="relative w-full flex-1 flex justify-start items-center">
                <picture className="w-full h-48 sm:h-64 md:h-auto">
                    <img src={imgLojaApple} className="w-full h-full object-cover rounded-2xl md:rounded-3xl" alt="Imagem da loja da Apple" />
                </picture>
                
                {/* Conteúdo sobreposto ajustado para mobile */}
                <div className="absolute left-6 bottom-6 md:left-11 md:bottom-10 flex flex-col gap-2 pr-6">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-white">Parceiros</h2>
                    <p className="text-white text-xs sm:text-sm md:text-base w-full sm:w-3/5">Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="font-bold text-[#271c47] w-28 sm:w-36 bg-(--text-yellow) py-2 sm:py-3 text-xs sm:text-sm rounded-md cursor-pointer hover:text-white hover:opacity-95 transition-opacity">
                        Confira
                    </button>
                </div>
            </article>

        </div>
    </section>
  )
}

export default Parceiros