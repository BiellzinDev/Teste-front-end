const imgEscudo = './public/assets/escudo.svg'
const imgTruck = './public/assets/Truck.svg'
const imgCard = './public/assets/CreditCard.svg'
const imgLogo = './public/assets/Logo.svg'
const imgLupa = './public/assets/MagnifyingGlass.svg'
const imgBox = './public/assets/Vector.svg'
const imgCoracao = './public/assets/coracao.svg'
const imgUser = './public/assets/UserCircle.svg'
const imgCart = './public/assets/ShoppingCart.svg'
const imgCoroa = './public/assets/coroa.svg'
import '../index.css'

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center gap-2 pb-2 bg-white shadow-xs">
      
      {/* Barra Superior de Benefícios (Visível apenas em tablets/desktop para não poluir o mobile) */}
      <div className='hidden md:flex w-[90%] max-w-7xl items-center justify-between py-2 border-b border-gray-100'>
        <div className='flex text-[12px] gap-2.5 items-center'>
          <picture>
            <img src={imgEscudo} alt="Imagem de Escudo" />
          </picture>
          <p className='font-medium text-(--text-p-header)'>Compra <strong className='text-(--text-blue)'>100% segura</strong></p>
        </div>
        <div className='flex text-[12px] gap-2.5 items-center'>
          <picture>
            <img src={imgTruck} alt="Imagem de Frete" />
          </picture>
          <p className='font-medium text-(--text-p-header)'><strong className='text-(--text-blue)'>Frete grátis</strong> acima de R$200</p>
        </div>
        <div className='flex text-[12px] gap-2.5 items-center'>
          <picture>
            <img src={imgCard} alt="Imagem de Cartão" />
          </picture>
          <p className='font-medium text-(--text-p-header)'><strong className='text-(--text-blue)'>Parcele</strong> suas compras</p>
        </div>
      </div>

      {/* Barra Principal (Logo, Barra de Pesquisa e Ícones) */}
      <div className='w-[92%] max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 py-3 border-y-2 border-(--border-header)'>
        
        {/* Linha superior no mobile para o logo e ícones ficarem lado a lado */}
        <div className='w-full flex items-center justify-between md:w-auto'>
          <picture className='max-w-[120px] md:max-w-none'>
            <a href="#"><img src={imgLogo} alt="Logo Econverse" className='w-full object-contain' /></a>
          </picture>

          {/* Ícones visíveis em mobile ao lado da logo */}
          <nav className='flex md:hidden gap-3 items-center'>
            <button className='cursor-pointer'><picture><img src={imgBox} alt="Caixa" className='w-5 h-5' /></picture></button>
            <button className='cursor-pointer'><picture><img src={imgCart} alt="Carrinho" className='w-5 h-5' /></picture></button>
          </nav>
        </div>

        {/* Input de Pesquisa (Ocupa largura total em mobile e tamanho proporcional em desktop) */}
        <div className='flex items-center justify-between w-full md:w-[45%] gap-2 bg-(--bg-input) rounded-[10px] py-2.5 px-4'>
          <input type="text" className='w-full bg-transparent outline-none text-sm' placeholder='O que você está buscando?' />
          <picture className='cursor-pointer flex-shrink-0'>
            <a href="#"><img src={imgLupa} alt="Lupa" className='w-5 h-5' /></a>
          </picture>
        </div>

        {/* Ícones de Navegação (Apenas em Desktop) */}
        <nav className='hidden md:flex gap-4 items-center'>
          <button className='cursor-pointer'><picture><img src={imgBox} alt="Imagem de caixa" /></picture></button>
          <button className='cursor-pointer'><picture><img src={imgCoracao} alt="Imagem de coração" /></picture></button>
          <button className='cursor-pointer'><picture><img src={imgUser} alt="Imagem de usuario" /></picture></button>
          <button className='cursor-pointer'><picture><img src={imgCart} alt="Imagem de carrinho" /></picture></button>
        </nav>
      </div>

      {/* Menu de Categorias Inferior com Scroll Horizontal em Mobile */}
      <nav className='w-[90%] max-w-7xl overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4'>
        <ul className='flex w-full min-w-max md:min-w-full items-center justify-start md:justify-around text-(--text-p-header) font-semibold uppercase text-xs md:text-sm gap-6 md:gap-0 py-2'>
          <li className='hover:text-(--text-blue) cursor-pointer'><a href="#">Todas Categorias</a></li>
          <li className='hover:text-(--text-blue) cursor-pointer'><a href="#">Supermercado</a></li>
          <li className='hover:text-(--text-blue) cursor-pointer'><a href="#">Livros</a></li>
          <li className='hover:text-(--text-blue) cursor-pointer'><a href="#">Moda</a></li>
          <li className='hover:text-(--text-blue) cursor-pointer'><a href="#">Lançamentos</a></li>
          <li className='hover:text-(--text-blue) cursor-pointer'><a href="#">Ofertas do dia</a></li>
          <li className='flex items-center justify-center gap-2 hover:text-(--text-blue) cursor-pointer'>
            <picture><img src={imgCoroa} alt="Imagem coroa" /></picture>
            <a href="#">Assinatura</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;