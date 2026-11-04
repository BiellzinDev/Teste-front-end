import React from 'react'
const imgLogo = './src/assets/Logo.svg'
import '../index.css'

const Marcas = () => {
  // Array de marcas para facilitar a renderização limpa com .map()
  const marcas = [1, 2, 3, 4, 5];

  return (
    <section className='flex w-full pt-16 md:pt-22.5 items-center justify-center overflow-hidden'>
        <section className='flex w-[92%] max-w-7xl items-center justify-center flex-col gap-6 md:gap-8'>
            <h2 className='font-bold text-xl md:text-[1.9rem] text-(--text-blue-prod) text-center'>Navegue por marcas</h2>
            
            {/* Container Responsivo: Scroll horizontal em mobile, flex centralizado em desktop */}
            <div className='flex w-full gap-4 md:gap-6 items-center justify-start md:justify-between overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 px-2'>
                {marcas.map((_, index) => (
                    <button 
                        key={index} 
                        className='flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-53 md:h-53 rounded-full bg-white shadow-xl flex-shrink-0 cursor-pointer hover:scale-105 transition-transform'
                    >
                        <picture className='w-2/3 flex items-center justify-center'>
                            <img src={imgLogo} alt={`Marca ${index + 1}`} className='max-w-full object-contain' />
                        </picture>
                    </button>
                ))}
            </div>
        </section>
    </section>
  )
}

export default Marcas