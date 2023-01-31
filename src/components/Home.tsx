import myAvatar from "../../assets/my-avatar.svg";
import html from "../../assets/devicon/html.svg";
import css from "../../assets/devicon/css.svg";
import javascript from "../../assets/devicon/javascript.svg";
import reactjs from "../../assets/devicon/reactjs.svg";
import typescript from "../../assets/devicon/typescript.svg";
import vite from "../../assets/devicon/vite.svg";
import nextjs from "../../assets/devicon/nextjs.svg";
import git from "../../assets/devicon/git.svg";
import github from "../../assets/devicon/github.svg";
import tailwindcss from "../../assets/devicon/tailwindcss.svg";
import bootstrap from "../../assets/devicon/bootstrap.svg";
import sass from "../../assets/devicon/sass.svg";
import nodejs from "../../assets/devicon/nodejs.svg";
import mongodb from "../../assets/devicon/mongodb.svg";
import mysql from "../../assets/devicon/mysql.svg";
import postgressql from "../../assets/devicon/postgressql.svg";
import express from "../../assets/devicon/express.svg";
import docker from "../../assets/devicon/docker.svg";
import postman from "../../assets/devicon/postman.svg";
// import { HiOutlineMail } from "react-icons/hi";
import { IoEarthOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Home = () => {
  return (
    <section className="md:py-12 md:px-4 py-6">
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
                  <p className="md:text-xl text-gray-600 dark:text-blue-100 text-center">
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
                  {/* <div className="flex my-3 text-gray-600 dark:text-blue-100">
                    <HiOutlineMail className="mr-2 text-3xl" />
                    <a href="john.davis.2015.03@gmail.com">
                      <p className="text-base">john.davis.2015.03@gmail.com</p>
                    </a>
                  </div> */}
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
              👋 Hola , Buen Día !
            </h1>
            <p className="md:text-lg text-base mt-2 mb-6 md:leading-8 text-justify">
              Soy una desarrolador FrontEnd que le gusta investigar, crear y
              diseñar proyectos, trabajar con React y Tailwindcss es algo que me
              apasiona mucho, mi objetivo es adquirir nuevas destrezas y
              conocimientos para formarme en el desarrollador Full Stack con la
              pila (MERN). Busco mi primera oportunidad para laborar y poder
              demostrar mis habilidades con entusiasmo, enfocado en crear nuevas
              interfaces y experiencias para los clientes.
            </p>
            <h1 className="font-merriweather md:text-2xl text-2xl font-bold leading-10 text-gray-700 dark:text-blue-200">
              Sobre mí
            </h1>
            <p className="md:text-lg mt-2 mb-4 md:leading-8 text-justify">
              Mi viaje como Desarrollador FrontEnd comenzo desde el año 2021 y
              se produjo a través del autoaprendizaje, un día estuve navegando
              por internet y vi una plataforma en donde tenian un curso gratis
              de programación me dio curiosidad e ingrese y asi comencé con las
              clases una tras otra, tal vez el curso de programación web me dio
              la base necesaria desde la cual podría construir ahora mi carrera
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
                <ul className="flex flex-wrap gap-2 items-center ">
                  <li className="flex items-center group relative duration-30">
                    <span className="absolute hidden group-hover:flex -left-0 -bottom-14 -translate-y-full px-2 py-1 bg-white rounded-lg text-center text-black text-sm ">
                      React
                    </span>
                    <img src={html} alt="html" />
                  </li>

                  <li className="flex items-center group relative duration-30">
                    <img src={css} alt="css" />
                  </li>

                  <li className="flex items-center">
                    <img src={javascript} alt="javascript" />
                  </li>
                  <li className="flex items-center">
                    <img src={reactjs} alt="reactjs" />
                  </li>
                  <li className="flex items-center">
                    <img src={typescript} alt="typescript" />
                  </li>
                  <li className="flex items-center">
                    <img
                      src={vite}
                      alt="vite"
                      className="md:h-10 md:w-10 h-10 w-10"
                    />
                  </li>
                  <li className="flex items-center">
                    <img src={git} alt="git" />
                  </li>
                  <li className="flex items-center">
                    <img
                      src={github}
                      alt="github"
                      className="md:h-14 md:w-14"
                    />
                  </li>
                  <li className="flex items-center">
                    <img src={tailwindcss} alt="tailwindcss" />
                  </li>

                  <li className="flex items-center">
                    <img src={bootstrap} alt="bootstrap" />
                  </li>
                  <li className="flex items-center">
                    <img src={sass} alt="sass" />
                  </li>
                  <li className="flex items-center">
                    <img
                      src={nextjs}
                      alt="nextjs"
                      className="md:h-10 md:w-10 h-10 w-10"
                    />
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="font-merriweather md:text-lg font-bold leading-10 text-gray-700 dark:text-blue-200">
                  Backend
                </h2>
                <ul className="flex flex-wrap gap-2 items-center">
                  <li className="flex items-center">
                    <img src={nodejs} alt="nodejs" />
                  </li>
                  <li className="flex items-center">
                    <img src={mongodb} alt="mongodb" />
                  </li>
                  <li className="flex items-center">
                    <img src={postgressql} alt="postgressql" />
                  </li>
                  <li className="flex items-center">
                    <img src={mysql} alt="mysql" className="md:h-16 md:w-16" />
                  </li>
                  <li className="flex items-center">
                    <img
                      src={express}
                      alt="express"
                      className="md:h-10 md:w-10 h-10 w-10"
                    />
                  </li>
                  <li className="flex items-center">
                    <img src={docker} alt="docker" />
                  </li>
                  <li className="flex items-center">
                    <img
                      src={postman}
                      alt="postman"
                      className="md:h-10 md:w-10 h-10 w-10"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
