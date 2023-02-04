import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTwitterSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    // console.log(
    //   import.meta.env.VITE_SERVICE_ID,
    //   import.meta.env.VITE_TEMPLATE_ID,
    //   form.current!,
    //   import.meta.env.VITE_PUBLIC_KEY
    // );
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current!,
      import.meta.env.VITE_PUBLIC_KEY
    );
    form.current!.reset();
  };

  return (
    <div className="flex flex-1 w-full md:py-16 justify-center items-center bg-stone-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-primary w-full max-w-6xl p-8 sm:p-12 md:rounded-xl shadow-lg text-white overflow-hidden gap-x-48 dark:bg-gray-800">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide font-worksans dark:text-white">
              ¿En qué te ayudo?
            </h1>
            <p className="pt-6 text-cyan-100 text-sm text-justify dark:text-blue-100">
              Si estas interesado(a) y deseas información sobre mí, rellena este
              formulario y te contestaré en un plazo máximo de 48 horas.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <BsFillTelephoneFill className="text-xl" />
              <span className="dark:text-blue-100">+51 915944414</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdEmail className="text-xl" />
              <span className="dark:text-blue-100">
                john.davis.2015.03@gmail.com
              </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdLocationPin className="text-2xl" />
              <span className="dark:text-blue-100">Peru - Lima, Huaral</span>
            </div>
          </div>

          <div className="flex space-x-4 text-lg">
            <div>
              <FaLinkedin className="text-3xl cursor-pointer dark:text-primary" />
              <a
                href="https://www.linkedin.com/in/johnpablo7"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
            <div>
              <FaTwitterSquare className="text-3xl cursor-pointer dark:text-primary" />
              <a
                href="https://twitter.com/John_Pablo87"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
            <div>
              <FaGithub className="text-3xl cursor-pointer dark:text-primary" />
              <a
                href="https://github.com/johnpablo7"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
            <div>
              <BsFacebook className="text-3xl cursor-pointer dark:text-primary" />
              <a
                href="https://www.facebook.com/profile.php?id=100009390640332"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-gray-700 rounded-full -right-28 -top-28 dark:bg-primary"></div>
          <div className="absolute z-0 w-40 h-40 bg-gray-700 rounded-full -left-28 -bottom-16 dark:bg-primary"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 dark:bg-white">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4"
            >
              <div>
                <label className="text-sm font-bold">Nombre</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                  required
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-bold">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Ingrese su correo electrónico"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-bold">Mensaje</label>
                <textarea
                  name="message"
                  placeholder="Ingrese su mensaje"
                  rows={4}
                  required
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-block self-end bg-primary text-white font-bold px-6 py-2 uppercase text-sm rounded-lg dark:bg-primary"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
