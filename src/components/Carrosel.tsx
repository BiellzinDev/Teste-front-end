import { useRef, useState } from 'react'
import '../index.css'
import productsList from '../data/products.json'
import Modal from './Modal'

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Carrosel = () => {
  const products: Product[] = productsList.products;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Estados para controlar o Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className='pt-12 md:pt-21 w-full flex flex-col gap-6 items-center justify-center overflow-hidden relative'>
        
        {/* Título de Produtos Relacionados */}
        <section className='w-[90%] md:w-[80%] gap-4 md:gap-8.5 flex items-center justify-center'>
            <article className='bg-(--listra) flex-1 h-0.5'></article>
            <h2 className='font-bold text-xl md:text-[1.9rem] text-(--text-blue-prod) text-center'>Produtos relacionados</h2>
            <article className='bg-(--listra) flex-1 h-0.5'></article>
        </section>

        {/* Menu de Categorias (Responsivo com scroll horizontal em mobile) */}
        <section className='w-[92%] max-w-7xl flex items-center font-bold text-xs md:text-sm text-(--text-gray-prod) overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-2 md:gap-0 pb-2'>
            <button className='hover:text-(--text-blue-prod) border px-4 md:flex-1 text-center border-(--borda-prod) py-3 text-blue-600 border-b-2 border-b-blue-600 whitespace-nowrap cursor-pointer'>CELULAR</button>
            <button className='hover:text-(--text-blue-prod) border px-4 md:flex-1 text-center border-(--borda-prod) py-3 whitespace-nowrap cursor-pointer'>ACESSÓRIOS</button>
            <button className='hover:text-(--text-blue-prod) border px-4 md:flex-1 text-center border-(--borda-prod) py-3 whitespace-nowrap cursor-pointer'>TABLETS</button>
            <button className='hover:text-(--text-blue-prod) border px-4 md:flex-1 text-center border-(--borda-prod) py-3 whitespace-nowrap cursor-pointer'>NOTEBOOKS</button>
            <button className='hover:text-(--text-blue-prod) border px-4 md:flex-1 text-center border-(--borda-prod) py-3 whitespace-nowrap cursor-pointer'>TVS</button>
            <button className='hover:text-(--text-blue-prod) border px-4 md:flex-1 text-center border-(--borda-prod) py-3 whitespace-nowrap cursor-pointer'>VER TODOS</button>
        </section>

        {/* Container Principal do Carrossel com as Setas */}
        <div className='relative w-[92%] max-w-7xl flex items-center'>
            
            {/* Botão Esquerdo (Escondido em mobile muito pequeno se necessário, ou posicionado de forma segura) */}
            <button 
                onClick={() => scroll('left')}
                className='hidden sm:flex absolute -left-4 md:-left-6 xl:-left-12 z-10 bg-white border border-gray-300 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center shadow-md hover:bg-gray-100 text-gray-700 font-bold text-xl cursor-pointer'
            >
                &lt;
            </button>

            {/* Lista com Scroll Horizontal */}
            <div 
                ref={scrollRef}
                className='w-full overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 px-1'
            >
                <div className='flex gap-4 md:gap-6'>
                    {products.map((product, index) => (
                        <article 
                            key={index} 
                            className='w-[240px] sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] min-w-[240px] md:min-w-[260px] flex flex-col justify-between items-center p-4 md:p-5 border border-gray-200 rounded-lg bg-white shadow-sm flex-shrink-0 hover:shadow-md transition-shadow'
                        >
                            <picture className='w-full h-40 md:h-48 flex items-center justify-center mb-4'>
                                <img src={product.photo} alt={product.productName} className='max-h-full object-contain' />
                            </picture>

                            <p className='text-sm font-medium text-gray-700 text-center line-clamp-2 mb-2'>
                                {product.productName}
                            </p>

                            <div className='w-full text-left space-y-1 my-2'>
                                <p className='text-gray-400 line-through text-xs'>
                                    R$ {(product.price * 1.2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </p>
                                <p className='text-xl md:text-2xl font-bold text-gray-900'>
                                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </p>
                                <p className='text-xs text-gray-500'>ou 2x de R$ {(product.price / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</p>
                                <p className='text-xs font-bold text-blue-600 uppercase mt-2'>frete grátis</p>
                            </div>

                            <button 
                                onClick={() => handleOpenModal(product)}
                                className='w-full bg-[#2F388F] hover:bg-blue-800 text-white py-3 rounded font-bold uppercase transition-colors tracking-wide text-sm mt-2 cursor-pointer'
                            >
                                Comprar
                            </button>
                        </article>
                    ))}
                </div>
            </div>

            {/* Botão Direito */}
            <button 
                onClick={() => scroll('right')}
                className='hidden sm:flex absolute -right-4 md:-right-6 xl:-right-12 z-10 bg-white border border-gray-300 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center shadow-md hover:bg-gray-100 text-gray-700 font-bold text-xl cursor-pointer'
            >
                &gt;
            </button>
        </div>

        {/* Renderização do Modal */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          product={selectedProduct} 
        />

    </section>
  )
}

export default Carrosel