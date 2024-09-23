import React from "react";
import logo from "../assets/images/icons/raniachams-logo.svg";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importing necessary icons

const Footer = () => {
  const iconSize = 24; // Define the desired icon size

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="flex justify-between ">
          <div className="flex items-center justify-center lg:justify-start mb-4 ml-12 lg:mb-0">
            <img src={logo} className="w-32" alt="Logo" />
          </div>

          <div className=" mr-12">
            <h5 className="mb-4 text-lg font-semibold uppercase">Contactez-nous</h5>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="mailto:your@email.com">
                  <FaEnvelope size={iconSize} />
                </a>
              </li>
              <li>
                <a href="https://wa.me/yourphonenumber">
                  <FaWhatsapp size={iconSize} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yourinstagram">
                  <FaInstagram size={iconSize} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yourfacebook">
                  <FaFacebook size={iconSize} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-gray-700 py-4 text-sm text-center">
        <div className="container mx-auto">
          <p>© 2024 Tous droits réservés - <a className="text-blue-400 hover:underline" href="https://tw-elements.com/">Lrhali.dev</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
