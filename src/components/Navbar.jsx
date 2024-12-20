// import logo from "../assets/shivaLogo.jpg";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaInstagram,
//   FaSquareXTwitter,
// } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-6 w-20" src={logo} alt="logo" />
//       </div>

//       <div className="flex gap-8 text-gray-300 text-lg font-medium">
//         <a href="#home" className="hover:text-blue-400 transition duration-300">
//           Home
//         </a>
//         <a href="#about" className="hover:text-blue-400 transition duration-300">
//           About Me
//         </a>
//         <a href="#technologies" className="hover:text-blue-400 transition duration-300">
//           Technologies
//         </a>
//         <a href="#experience" className="hover:text-blue-400 transition duration-300">
//         Experience
//         </a>
//         <a href="#projects" className="hover:text-blue-400 transition duration-300">
//           Projects
//         </a>
//         <a href="#contact" className="hover:text-blue-400 transition duration-300">
//           Contact
//         </a>
//       </div>

//       <div className="m-8 flex items-center  justify-center gap-4 text-2xl">
//         <a
//           href="https://www.linkedin.com/in/shivakumar-jagadam-12559425a/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-300 hover:text-blue-500 transition duration-300"
//         >
//           <FaLinkedin />
//         </a>

//         {/* GitHub */}
//         <a
//           href="https://github.com/Shivakumarjagadam"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-300 hover:text-white transition duration-300"
//         >
//           <FaGithub />
//         </a>

//         <FaInstagram />
      
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import logo from "../assets/shivaLogo.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="mb-20  text-white py-4 mt-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-12 rounded-full " src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-gray-300 text-lg font-medium mt-5">
            <a href="#home" className="hover:text-blue-400 transition duration-300 px-2">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition duration-300">
              About Me
            </a>
            <a href="#technologies" className="hover:text-blue-400 transition duration-300">
              Technologies
            </a>
            <a href="#experience" className="hover:text-blue-400 transition duration-300">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </a>
          </div>

          {/* Hamburger Menu (For Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-2/3 bg-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <img className="w-10 rounded-full" src={logo} alt="Logo" />
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-start space-y-4 px-4">
          <a href="#home" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={toggleMenu}>
            About Me
          </a>
          <a href="#technologies" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={toggleMenu}>
            Technologies
          </a>
          <a href="#experience" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#projects" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition duration-300" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
