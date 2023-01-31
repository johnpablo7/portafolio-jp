import { Link } from "react-router-dom";
import logoJP from "../../assets/images/logo-jp.png";

export const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex items-center justify-between px-8 md:px-16 w-full bg-white border-b border-gray-200 drop-shadow-md">
        <div className="md:flex items-center justify-center hidden">
          <Link to="/">
            <img src={logoJP} alt="logo-white" className="w-20 h-20" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center justify-center md:gap-12 gap-6 py-5 font-merriweather text-xs md:text-base font-bold">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-primary transition-colors"
              >
                PORTAFOLIO
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="hover:text-primary transition-colors"
              >
                CONTACTO
              </Link>
            </li>
            <button className="md:flex hover:text-primary transition-colors hidden">
              DESCARGAR CV
            </button>
          </ul>
        </nav>
        <div>
          <button>Dark</button>
        </div>
      </header>
    </>
  );
};
