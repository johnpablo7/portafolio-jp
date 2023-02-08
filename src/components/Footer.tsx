import { HiOutlineMail } from "react-icons/hi";
import { FaTwitterSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-stone-200 mt-auto">
      <div className="flex flex-col items-center py-4">
        <div className="flex mb-3 space-x-4">
          <div>
            <FaGithub className="text-3xl cursor-pointer" />
            <a href="https://github.com/johnpablo7"></a>
          </div>
          <div>
            <FaLinkedin className="text-3xl cursor-pointer" />
            <a href="https://www.linkedin.com/in/john-davis-821ab7211/"></a>
          </div>
          <div>
            <HiOutlineMail className="text-3xl cursor-pointer" />
            <a href="john.davis.2015.03@gmail.com"></a>
          </div>
          <div>
            <BsFacebook className="text-3xl cursor-pointer" />
            <a href="https://www.facebook.com/profile.php?id=100009390640332"></a>
          </div>
          <div>
            <FaTwitterSquare className="text-3xl cursor-pointer" />
            <a href="https://twitter.com/John_Pablo87"></a>
          </div>
        </div>
        <div className="flex space-x-2 text-xs md:text-sm text-gray-500 font-bold">
          <div>Copyright © 2023</div>
          <div>•</div>
          <div>John Pablo - Comencemos a codificar</div>
        </div>
      </div>
    </footer>
  );
};
