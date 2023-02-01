import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTwitterSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
// import { BsWhatsapp } from "react-icons/bs";
// import { useRef } from "react";
// import emailjs from "emailjs-com";

export const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_q9138ym",
  //     "template_243hxaw",
  //     form.current,
  //     "PLS1gaSu1LSbcHICa"
  //   );
  //   e.target.reset();
  // };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-slate-200">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-6xl p-8 sm:p-12 md:rounded-xl shadow-lg text-white overflow-hidden gap-x-48">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide font-worksans">
              ¿En qué te ayudo?
            </h1>
            <p className="pt-6 text-cyan-100 text-sm text-justify">
              Si estas interesado(a) y deseas información sobre mí, rellena este
              formulario y te contestaré en un plazo máximo de 48 horas.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <BsFillTelephoneFill className="text-xl" />
              <span>+51 915944414</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdEmail className="text-xl" />
              <span>john.davis.2015.03@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdLocationPin className="text-2xl" />
              <span>Peru - Lima, Huaral</span>
            </div>
          </div>

          <div className="flex space-x-4 text-lg">
            <div>
              <FaLinkedin className="text-3xl cursor-pointer" />
              <a href="https://www.linkedin.com/in/john-davis-821ab7211/"></a>
            </div>
            <div>
              <FaTwitterSquare className="text-3xl cursor-pointer" />
              <a href="https://twitter.com/John_Pablo87"></a>
            </div>
            <div>
              <FaGithub className="text-3xl cursor-pointer" />
              <a href="https://github.com/johnpablo7"></a>
            </div>
            <div>
              <BsFacebook className="text-3xl cursor-pointer" />
              <a href="https://www.facebook.com/profile.php?id=100009390640332"></a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-gray-200 rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-gray-200 rounded-full -left-28 -bottom-16"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm font-bold">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm font-bold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm font-bold">
                  Mensaje
                </label>
                <textarea
                  placeholder="Ingrese su mensaje"
                  rows={4}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-200"
                ></textarea>
              </div>

              <button className="inline-block self-end bg-cyan-700 text-white font-bold px-6 py-2 uppercase text-sm rounded-lg">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
