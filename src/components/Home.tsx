import myAvatar from "../../assets/my-avatar.svg";
import { HiOutlineMail } from "react-icons/hi";
import { IoEarthOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { svgfrontend } from "../data/svgfrontend";
import { svgbackend } from "../data/svgbackend";

export const Home = () => {
  return (
    <section className="flex-1 md:py-12 md:px-4 py-6 bg-stone-50 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="md:flex font-worksans">
          <div className="md:w-1/3 p-2 md:flex md:justify-center">
            <div className="md:fixed">
              <div className="md:block flex justify-center items-center">
                <img
                  src={myAvatar}
                  alt="my-avatar"
                  className="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"
                />
                <div className="mt-6 mb-4 md:mx-7 mx-2 justify-center items-center">
                  <h1 className="text-center md:text-left font-merriweather md:text-2xl text-2xl text-gray-800 font-extrabold dark:text-blue-100 mb-2">
                    John Pablo
                  </h1>
                  <p className="md:text-xl text-gray-600 dark:text-blue-100 text-left">
                    Desarrollador FrontEnd
                  </p>
                  <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <IoEarthOutline className="mr-2 md:text-3xl" />
                    <a href="https://johnpablo7.com/">
                      <p className="md:text-base text-sm">
                        https://johnpablo7.com/
                      </p>
                    </a>
                  </div>
                </div>
                <div className="mx-7 hidden md:block">
                  <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <HiOutlineMail className="mr-2 text-3xl" />
                    <a href="john.davis.2015.03@gmail.com">
                      <p className="text-base">john.davis.2015.03@gmail.com</p>
                    </a>
                  </div>
                  <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <FaLinkedin className="mr-2 text-3xl" />
                    <a href="https://www.linkedin.com/in/john-davis-821ab7211/">
                      <p className="text-base">john-davis</p>
                    </a>
                  </div>
                  <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <FaGithub className="mr-2 text-3xl" />
                    <a href="https://github.com/johnpablo7">
                      <p className="text-base">johnpablo7</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 px-8">
            <h1 className="font-merriweather md:text-2xl text-2xl font-bold leading-10 md:mt-4 mt-6 text-gray-700 dark:text-blue-200">
              <span className="text-3xl mr-1">????</span> Hola , Buen D??a !
            </h1>
            <p className="md:text-lg text-base mt-2 mb-6 md:leading-8 text-justify">
              Soy un desarrolador Frontend innovador, proactivo y con capacidad
              para desarrollar p??ginas y aplicaciones web, enfocado en la mejora
              de interfaces y verificaci??n de c??digo, mi objetivo es adquirir
              nuevas destrezas y conocimientos para formarme como desarrollador
              Full Stack, estoy en busca de mi primera oportunidad para laborar
              y demostrar mis habilidades.
            </p>
            <h1 className="font-merriweather md:text-2xl text-2xl font-bold leading-10 text-gray-700 dark:text-blue-200">
              Sobre m??
            </h1>
            <p className="md:text-lg mt-2 mb-4 md:leading-8 text-justify">
              Mi viaje como desarrollador FrontEnd comenzo desde el a??o 2021 y
              se produjo a trav??s del autoaprendizaje, un d??a estuve navegando
              por internet y vi una plataforma en donde tenian un curso gratis
              de programaci??n me dio curiosidad e ingrese y asi comenc?? con las
              clases una tras otra, tal vez el curso de programaci??n web me dio
              la base necesaria desde la cual podr??a construir ahora mi carrera
              favorita.
            </p>
            <div className="mt-6">
              <h1 className="font-merriweather md:text-2xl text-2xl font-bold leading-10 md:mb-4 text-gray-700 dark:text-blue-200">
                Habilidades
              </h1>
              <div>
                <h2 className="font-merriweather md:text-lg font-bold leading-10 text-gray-700 dark:text-blue-200">
                  Frontend
                </h2>
                <ul className="flex items-center flex-wrap gap-2">
                  {svgfrontend.map((link) => (
                    <li key={link.id} className="group relative duration-30">
                      <span className="absolute hidden group-hover:flex -left-0 -bottom-14 -translate-y-full px-2 py-1 bg-stone-50 rounded-lg text-center text-gray-700 dark:text-white dark:bg-gray-900 text-sm font-bold transition-colors">
                        {link.name}
                      </span>
                      <img
                        src={link.url}
                        alt={link.name}
                        className="w-12 h-12"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="font-merriweather md:text-lg font-bold leading-10 text-gray-700 dark:text-blue-200">
                  Backend
                </h2>
                <ul className="flex flex-wrap gap-2 items-center">
                  {svgbackend.map((link) => (
                    <li key={link.id} className="group relative duration-30">
                      <span className="absolute hidden group-hover:flex -left-0 -bottom-14 -translate-y-full px-2 py-1 bg-stone-50 rounded-lg text-center text-gray-700 dark:text-white dark:bg-gray-900 text-sm font-bold transition-colors">
                        {link.name}
                      </span>
                      <img
                        src={link.url}
                        alt={link.name}
                        className="w-12 h-12"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
