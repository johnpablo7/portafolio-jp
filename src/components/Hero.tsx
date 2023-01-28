import myAvatar from "../../assets/my-avatar.svg";
import { HiOutlineMail } from "react-icons/hi";

export const Hero = () => {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="md:flex font-worksans">
          {/* Col 1 */}
          <div className="md:w-1/3 p-2 md:flex md:justify-center">
            <div className="md:fixed">
              <div className="md:block flex justify-center items-center">
                <img
                  src={myAvatar}
                  alt="my-avatar"
                  className="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"
                />
                <div className="mt-6 mb-4 mx-7 justify-center items-center">
                  <h1 className="font-merriweather md:text-4xl text-2xl text-gray-800 font-extrabold dark:text-blue-100 mb-2">
                    John Pablo
                  </h1>
                  <p className="md:text-2xl text-gray-600 dark:text-blue-100">
                    Desarrollador FrontEnd
                  </p>
                </div>

                <div className="mx-7 hidden md:block">
                  <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <HiOutlineMail className="mr-1 text-3xl" />
                    <a href="john.davis.2015.03@gmail.com">
                      <p className="text-xl">john.davis.2015.03@gmail.com</p>
                    </a>
                  </div>
                  <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <HiOutlineMail className="mr-1 text-3xl" />
                    <a href="john.davis.2015.03@gmail.com">
                      <p className="text-xl">john.davis.2015.03@gmail.com</p>
                    </a>
                  </div>
                  <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <HiOutlineMail className="mr-1 text-3xl" />
                    <a href="john.davis.2015.03@gmail.com">
                      <p className="text-xl">john.davis.2015.03@gmail.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 px-8">
            <p className="text-xl mb-2  text-gray-700 dark:text-blue-200">
              👋 Hola , Buen Día !
            </p>
            <h1 className="font-merriweather text-4xl font-bold leading-10 mt-6 text-gray-700 dark:text-blue-200">
              Soy un Desarrollador FrontEnd 💻
            </h1>
            <p className="text-xl mt-8 mb-4 leading-8 text-justify">
              Una persona que le gusta investigar, crear y diseñar proyectos,
              trabajar con React y Tailwindcss es algo que me apasiona mucho, mi
              objetivo es adquirir nuevas destrezas y conocimientos para
              formarme en el desarrollador Full Stack con la pila(MERN). Busco
              mi primera oportunidad laboral para demostrar mis habilidades ando
              lleno de energía, con mucho entusiasmo enfocado en crear
              interfaces y crear experiencias geniales para los clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
