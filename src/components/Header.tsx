import logoJP from "../../assets/images/logo-jp.png";

export const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex items-center w-full bg-white border-b border-gray-200 drop-shadow-md">
      <div className="w-1/6 flex items-center justify-center">
        <img src={logoJP} alt="logo-white" className="w-20 h-20" />
      </div>
      <nav className="flex-1 flex items-center justify-center gap-12 font-merriweather text-sm md:text-base font-bold">
        <a href="#" className="">
          Inicio
        </a>
        <a href="#" className="hidden md:flex">
          Sobre mí
        </a>

        <a href="#" className="">
          Portafolio
        </a>
        <a href="#" className="">
          Contacto
        </a>
      </nav>
    </header>
  );
};
