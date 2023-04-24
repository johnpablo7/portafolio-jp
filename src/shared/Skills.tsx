import { svgbackend } from "../data/svgbackend";
import { svgfrontend } from "../data/svgfrontend";

export const Skills = () => {
  return (
    <div className="mt-6">
      <h1 className="font-merriweather md:text-2xl text-2xl font-bold leading-10 md:mb-4 text-gray-700 dark:text-blue-200">
        Habilidades
      </h1>
      <div>
        <h2 className="font-merriweather md:text-lg font-bold leading-10 text-gray-700 dark:text-blue-200 mb-2">
          Frontend
        </h2>
        <ul className="flex items-center flex-wrap gap-5">
          {svgfrontend.map((link) => (
            <li key={link.id} className="group relative duration-30">
              <span className="absolute hidden group-hover:flex -left-0 -bottom-12 -translate-y-full px-2 py-1 bg-stone-50 rounded-lg text-center text-gray-700 dark:text-white dark:bg-gray-900 text-xs font-bold transition-colors">
                {link.name}
              </span>
              <img src={link.url} alt={link.name} className="w-12 h-12" />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="font-merriweather md:text-lg font-bold leading-10 text-gray-700 dark:text-blue-200 mb-2">
          Backend
        </h2>
        <ul className="flex flex-wrap gap-5 items-center">
          {svgbackend.map((link) => (
            <li key={link.id} className="group relative duration-30">
              <span className="absolute hidden group-hover:flex -left-0 -bottom-12 -translate-y-full px-2 py-1 bg-stone-50 rounded-lg text-center text-gray-700 dark:text-white dark:bg-gray-900 text-xs font-bold transition-colors">
                {link.name}
              </span>
              <img src={link.url} alt={link.name} className="w-12 h-12" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
