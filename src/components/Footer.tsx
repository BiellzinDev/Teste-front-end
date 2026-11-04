import React from 'react'
import '../index.css'
const imgLogo = './src/assets/Logo.svg'

const Footer = () => {
  return (
    <footer className='w-full'>
        {/* Seção da Newsletter */}
        <section className='w-full flex items-center justify-center bg-[#271c47] py-8 md:py-12 px-4'>
            <section className='w-[92%] max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 text-white'>
                <div className='max-w-xl text-center lg:text-left'>
                    <h3 className='font-semibold text-2xl md:text-[2rem] font-[Outfit] leading-tight'>
                      Inscreva-se na nossa newsletter
                    </h3>
                    <p className='text-xs md:text-[14px] font-light mt-2'>
                      Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </div>

                <form className='flex flex-col gap-3 w-full lg:w-auto'>
                    <div className='flex flex-col sm:flex-row gap-2 w-full'>
                        <label htmlFor="nome" className='hidden'>Nome</label>
                        <input 
                          id="nome"
                          type="text" 
                          className='w-full sm:w-auto flex-1 bg-(--fundo-header) px-4 sm:pl-6 rounded-lg py-3 text-sm placeholder:text-[#676767] text-[#676767] outline-none' 
                          placeholder='Digite seu nome' 
                        />
                        
                        <label htmlFor="email" className='hidden'>E-mail</label>
                        <input 
                          id="email"
                          type="email" 
                          className='w-full sm:w-auto flex-1 bg-(--fundo-header) px-4 sm:pl-6 rounded-lg py-3 text-sm placeholder:text-[#676767] text-[#676767] outline-none' 
                          placeholder='Digite seu e-mail' 
                        />
                        
                        <button 
                          type='submit' 
                          className='w-full sm:w-39.5 font-semibold text-[#271c47] bg-(--text-yellow) py-3.5 rounded-lg uppercase cursor-pointer hover:text-white hover:opacity-95 transition-all text-sm'
                        >
                          Inscrever
                        </button>
                    </div>

                    <label htmlFor="termos" className='flex gap-2 items-center justify-center lg:justify-start text-xs md:text-[14px] cursor-pointer mt-1'>
                      <input 
                        id="termos"
                        type="checkbox" 
                        className='w-3.5 h-3.5 border-transparent cursor-pointer accent-[#8c342b] rounded'
                      />
                      Aceito os termos e condições
                    </label>
                </form>
            </section>
        </section>

        {/* Seção Principal de Links e Marca */}
        <section className='w-full flex items-center justify-center bg-[#f4f4f4] py-10 md:py-16 px-4'>
            <section className='w-[92%] max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12'>
                
                {/* Coluna da Logomarca e Redes Sociais */}
                <div className='flex flex-col items-center lg:items-start justify-start gap-5 text-center lg:text-left max-w-sm'>
                    <picture><img src={imgLogo} alt="Logo Econverse" /></picture>
                    <p className='text-xs md:text-[14px] font-light text-gray-600'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <div className='flex items-center justify-center lg:justify-start gap-6 pt-2'>
                        <a href="#" aria-label="Instagram" className='hover:text-(--text-blue) transition-colors'><i className="flex text-xl fi fi-brands-instagram"></i></a>
                        <a href="#" aria-label="Facebook" className='hover:text-(--text-blue) transition-colors'><i className="flex text-xl fi fi-brands-facebook"></i></a>
                        <a href="#" aria-label="LinkedIn" className='hover:text-(--text-blue) transition-colors'><i className="flex text-xl fi fi-brands-linkedin"></i></a>
                    </div>
                </div>

                {/* Divisor Vertical apenas no Desktop / Divisor Horizontal em Mobile */}
                <div className='hidden lg:block h-44 w-0.5 bg-[#cfcfcf] self-center'></div>
                <div className='block lg:hidden w-full h-0.5 bg-[#cfcfcf]'></div>

                {/* Bloco de Links Institucionais/Ajuda/Termos */}
                <section className='grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 w-full lg:w-auto text-center sm:text-left'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-[#5f5f5f] font-bold text-sm md:text-base'>Institucional</h4>
                        <ul className='flex flex-col gap-3'>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Sobre Nós</a></li>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Movimento</a></li>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Trabalhe conosco</a></li>
                        </ul>
                    </div>
                    
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-[#5f5f5f] font-bold text-sm md:text-base'>Ajuda</h4>
                        <ul className='flex flex-col gap-3'>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Suporte</a></li>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Fale Conosco</a></li>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Perguntas Frequentes</a></li>
                        </ul>
                    </div>
                    
                    <div className='flex flex-col gap-4 col-span-2 sm:col-span-1'>
                        <h4 className='text-[#5f5f5f] font-bold text-sm md:text-base'>Termos</h4>
                        <ul className='flex flex-col gap-3'>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Termos e Condições</a></li>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Política de Privacidade</a></li>
                            <li className='font-[Work-Sans] text-xs md:text-[14px] text-[#5f5f5f] hover:underline'><a href="#">Troca e Devolução</a></li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>

        {/* Rodapé de Copyright */}
        <div className='bg-white py-4 px-4 flex items-center justify-center text-xs md:text-[13px] text-gray-500 text-center border-t border-gray-100'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
    </footer>
  )
}

export default Footer