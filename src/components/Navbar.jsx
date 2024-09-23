  // under line effect

  import React, { useState, useEffect } from "react";
  import logo from "../assets/images/icons/raniachams-logo.svg";

  const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <nav
        className={`flex items-center justify-between py-4 fixed h-[70px] top-0 w-full z-10 transition-all duration-300 ease-in-out px-[25vh] ${
          isScrolled ? "bg-[#374151] shadow-md" : "bg-transparent"
        }`}
      >
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <ul className="flex space-x-8 text-transform: uppercase  text-white font-semibold text-[16px]">
          <li>
            <div className="group relative">
              <a
                href="#"
                className="relative transition-colors hover:text-gray-300"
              >
                Accueil
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-gray-300"></span>
              </a>
            </div>
          </li>
          <li>
            <div className="group relative">
              <a
                href="#"
                className="relative transition-colors hover:text-gray-300"
              >
                À propos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-gray-300"></span>
              </a>
            </div>
          </li>
          <li>
            <div className="group relative">
              <a
                href="#"
                className="relative transition-colors hover:text-gray-300"
              >
                Produits
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-gray-300"></span>
              </a>
            </div>
          </li>
          <li>
            <div className="group relative">
              <a
                href="#"
                className="relative transition-colors hover:text-gray-300"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-gray-300"></span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  };

  export default Navbar;
