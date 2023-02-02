import { RxExternalLink } from "react-icons/rx";
import { FaRegFolder, FaGithub } from "react-icons/fa";
import { cards } from "../data/cards";

export const Portfolio = () => {
  return (
    <section className="dark:bg-gray-900 dark:text-white bg-stone-50">
      <div className="px-4 mx-auto sm:px-6 xl:max-w-6xl xl:px-0">
        <div className="md:pt-10 pt-8 md:px-4 px-4 ">
          <h1 className="md:text-5xl text-4xl font-extrabold mb-2 dark:text-blue-200">
            Portafolio
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Algunos de los proyectos que he construido.
          </p>
        </div>
        <main>
          <div className="md:py-8 py-6">
            <div className="flex flex-wrap">
              {cards.map((card) => (
                <div key={card.id} className="p-4 md:w-1/2">
                  <div className="h-full border-2 border-stone-300 rounded-lg border-opacity-60 dark:border-gray-700 overflow-hidden">
                    <img
                      src={card.img}
                      alt="image"
                      className="aspect-auto object-cover object-center md:h-96 md:w-full"
                    />
                    <div className="md:p-4 p-4 dark:bg-gray-800 bg-stone-100">
                      <div className="flex flex-row justify-between items-center">
                        <div className="my-2">
                          <FaRegFolder className="md:text-4xl text-3xl text-primary" />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="mx-2">
                            <RxExternalLink className="md:text-3xl text-2xl cursor-pointer hover:text-primary" />
                            <a href={card.demo}></a>
                          </div>
                          <div className="mx-2">
                            <FaGithub className="md:text-3xl text-2xl cursor-pointer hover:text-primary" />
                            <a href={card.github}></a>
                          </div>
                        </div>
                      </div>
                      <h2 className="md:text-2xl text-xl font-bold leading-8 tracking-tight mb-3 dark:text-blue-100 ">
                        {card.title}
                      </h2>
                      <p className="text-gray-500 max-w-none dark:text-gray-400 mb-3">
                        {card.paragraph}
                      </p>
                      <p className="text-gray-400 text-sm font-extralight">
                        {card.language}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
