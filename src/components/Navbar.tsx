import { NavLink } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "../hooks/theme";
import { views } from "../data/views";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 inset-x-0 flex items-center justify-center md:justify-around p-4 md:px-64 w-full bg-stone-200 border-b border-gray-200 drop-shadow-md z-20 dark:bg-gray-900 dark:text-white">
      <div className="md:flex items-center justify-center hidden">
        <NavLink to="/">
          <svg
            className="w-20 h-20 fill-current"
            viewBox="0 0 120 120"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M59 61.5c0 16.3.4 25.5 1 25.5s1-9.2 1-25.5S60.6 36 60 36s-1 9.2-1 25.5zM38.3 43.7c1.5.4 1.7 2.1 1.7 18.2 0 18.8-.2 19.6-5 21.4-.9.3-.5.6 1 .6 4.1.1 10.9-3.5 12-6.4.6-1.5 1-9.4 1-17.6 0-14.6.1-15 2.3-15.9 1.5-.6-.3-.9-6.3-.8-4.7 0-7.7.2-6.7.5zm29.5.3c2.1.9 2.2 1.3 2.2 15.1 0 13.2-.1 14.1-2 14.6-4.3 1.1-1.6 1.8 7 1.8 5 0 9-.3 9-.7s-1-.8-2.2-1c-2-.3-2.3-1-2.6-5.9l-.3-5.6 4.7-.6c8-.9 12.9-6.5 10.8-12.5C92.8 44.6 88 43 76 43.1c-7.3 0-9.8.3-8.2.9zM85 45.9c1.5 2.9 1.2 10.4-.6 12.9C83.6 60 82 61 80.9 61c-1.7 0-1.9-.7-1.9-8.5 0-8.4 0-8.5 2.5-8.5 1.4 0 2.9.8 3.5 1.9z" />
          </svg>
        </NavLink>
      </div>

      <div className="flex items-center justify-between gap-8 md:gap-16">
        <nav>
          <ul className="flex items-center justify-center md:gap-12 gap-4 font-sans text-sm md:text-xl font-bold text-gray-700 dark:text-white">
            {views.map((list) => (
              <li key={list.id}>
                <NavLink
                  to={list.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 transition duration-300 md:p-2"
                      : "dark:text-white transition duration-300 hover:text-blue-400 dark:hover:text-blue-400 md:p-2"
                  }
                >
                  {list.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-center cursor-pointer md:pl-16">
          <button
            className="flex items-center w-11 h-6 md:w-16 md:h-8 rounded-2xl bg-white focus:outline-none shadow md:px-1"
            onClick={toggleTheme}
          >
            <div className="flex items-center relative w-6 h-6 md:w-7 md:h-7 rounded-full transition duration-500 transform bg-yellow-500 dark:bg-gray-700 p-1 text-white md:dark:translate-x-7 dark:translate-x-5 ease-in-out">
              {theme === "light" ? (
                <MdOutlineWbSunny className="text-xl" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
