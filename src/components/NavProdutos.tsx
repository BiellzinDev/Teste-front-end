import '../index.css'

const NavProdutos = () => {
  // Lista de categorias para manter o código limpo e organizado
  const categories = [
    { name: 'Tecnologia', icon: 'fi fi-rr-devices' },
    { name: 'Supermercado', icon: 'fi fi-rs-shop' },
    { name: 'Bebidas', icon: 'fi fi-rs-glass-cheers' },
    { name: 'Ferramentas', icon: 'fi fi-rr-tools' },
    { name: 'Saúde', icon: 'fi fi-rr-hand-holding-heart' },
    { name: 'Esporte e Fitness', icon: 'fi fi-br-treadmill' },
    { name: 'Moda', icon: 'fi fi-rs-dress' },
  ];

  return (
    <section className='w-full flex items-center justify-center pt-11.5 px-4 overflow-hidden'>
        
        {/* Container responsivo: scroll horizontal em mobile, flex centralizado em desktop */}
        <div className='w-full max-w-7xl flex items-center justify-start md:justify-between gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            
            {categories.map((cat, index) => (
                <article 
                    key={index} 
                    className='flex flex-col h-42.5 items-center justify-between hover:text-(--text-blue) cursor-pointer flex-shrink-0 group'
                >
                    <button className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-[10px] bg-(--fundo-nav) group-hover:bg-(--fundo-header) shadow-lg flex items-center justify-center transition-all cursor-pointer'>
                        <i className={`${cat.icon} text-4xl sm:text-5xl md:text-6xl`}></i>
                    </button>
                    <p className='font-semibold text-[13px] sm:text-[14px] text-(--text-card) text-center whitespace-nowrap'>
                        {cat.name}
                    </p>
                </article>
            ))}

        </div>
    </section>
  )
}

export default NavProdutos