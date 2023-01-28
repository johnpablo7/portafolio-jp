import logoJP from "../../assets/logo-jp.png";

export const Header = () => {
  return (
    <header className="fixed right-0 top-0 flex items-center w-full bg-white h-[10vh] border-b border-gray-200 drop-shadow-md">
      <div className="hidden w-1/6 md:flex items-center justify-center">
        <img src={logoJP} alt="logo-white" />
      </div>
      <nav className="flex-1 flex items-center justify-center gap-12 font-headerFont text-2xl font-bold">
        <a href="#" className="">
          INICIO
        </a>
        <a href="#" className="hidden md:flex">
          SOBRE MI
        </a>
        <a href="#" className="hidden md:flex">
          HABILIDADES
        </a>
        <a href="#" className="hidden md:flex">
          CURRICULUM
        </a>
        <a href="#" className="">
          PORTAFOLIO
        </a>
        <a href="#" className="">
          CONTACTO
        </a>
      </nav>
    </header>
  );
};
