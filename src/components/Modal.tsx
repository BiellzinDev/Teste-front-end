import { useState } from 'react'
import '../index.css'

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const Modal = ({ isOpen, onClose, product }: ModalProps) => {
  // Estado para controlar a quantidade (começa em 1)
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null; 

  // Funções para aumentar e diminuir a quantidade (impedindo que baixe de 1)
  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <section className='relative max-w-3xl flex items-center justify-around w-4/5 h-75 py-14 bg-white rounded-lg shadow-xl'>
        
        {/* Botão de Fechar (X) */}
        <button 
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-lg cursor-pointer'
        >
          ✕
        </button>

        {/* Imagem dinâmica do produto */}
        <picture className='w-62 flex items-center justify-center'>
            <img src={product.photo} className='max-h-48 object-contain' alt={product.productName} />
        </picture>

        {/* Informações dinâmicas do produto */}
        <section className='flex flex-col items-start justify-center gap-3'>
            <div>
                <h2 className='font-normal text-[20px] text-(--text-price) max-w-xs line-clamp-2'>{product.productName}</h2>
                <p className='font-semibold text-[20px] text-(--text-price) mt-1'>
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
            </div>
            <div>
                <p className='w-3/5 font-[Work-Sans] text-[10px] text-[#9b9b9b]'>{product.descriptionShort}</p>
                <a href="#" className='text-(--text-frete) font-semibold font-[Work-Sans] text-[11px]'>Veja mais detalhes do produto</a>
            </div>
            
            {/* Controlo de Quantidade e Botão de Comprar */}
            <div className='flex items-center justify-between gap-4'>
                <div className='border border-[#9b9b9b] flex items-center justify-between px-2.5 w-27.5 rounded-sm py-2'>
                    {/* Botão de Menos */}
                    <button onClick={handleDecrement} className='cursor-pointer'>
                      <i className="flex fi fi-sr-minus-small text-[#9b9b9b] text-[11px]"></i>
                    </button>
                    
                    {/* Número formatado com 2 dígitos (ex: 01, 02...) */}
                    <span className='font-medium'>{String(quantity).padStart(2, '0')}</span>
                    
                    {/* Botão de Mais */}
                    <button onClick={handleIncrement} className='cursor-pointer'>
                      <i className="flex fi fi-br-plus text-[11px]"></i>
                    </button>
                </div>

                <button className='font-semibold text-[#271c47] bg-(--text-yellow) w-39.5 py-2 rounded-lg uppercase cursor-pointer hover:opacity-95 hover:text-white'>
                  Comprar
                </button>
            </div>
        </section>

      </section>
    </div>
  )
}

export default Modal