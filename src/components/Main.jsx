import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import solarPanelImage1 from "../assets/images/solarPanelBackground.jpg";
import solarPanelImage2 from "../assets/images/imrs.jpeg";
import solarPanelImage3 from "../assets/images/imrs1.jpeg";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const images = [solarPanelImage1, solarPanelImage2, solarPanelImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto background change

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the time interval (in milliseconds) for automatic rotation

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gray-200 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)),url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 space-y-8  md:px-10">
        <p className="text-5xl text-transform: uppercase font-bold px-12">
          Nous proposons des services complets de{" "}
          <span className="bg-gradient-to-r from-[#2094f3] to-[#4baf4e]  text-transparent bg-clip-text">
            vente
          </span>{" "}
          et{" "}
          <span className="bg-gradient-to-r from-[#2094f3] to-[#4baf4e]  text-transparent bg-clip-text">
            d'installation
          </span>{" "}
          des panneaux solaires
        </p>
        <div className="flex space-x-4">
          <div className=" text-neutral-900 open-my-modal flex items-center justify-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-neutral-400 rounded cursor-pointer">
            <FontAwesomeIcon icon={faPhone} />
            <span>0696602984</span>
          </div>
          <div className=" open-my-modal flex items-center justify-center gap-2 px-4 py-2 bg-[#4CAF50] hover:bg-[#3c873e] text-white  rounded cursor-pointer">
            <FontAwesomeIcon icon={faPencilAlt} />
            <span>Nous écrire</span>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-white text-xl cursor-pointer"
          onClick={handlePrev}
        />
      </div>
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-white text-xl cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Main;
