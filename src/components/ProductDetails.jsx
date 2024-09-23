import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import WhatsAppButton from "./WhatsAppButton";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="bg-gray-100 shadow-2xl rounded-md w-fit">
      <div className="flex justify-center flex-col">
        <div className="flex justify-end items-center px-4 py-2">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex ">
          <div className="bg-neutral-500 w-[350px] h-[400px] rounded-md overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://www.solaris-store.com/10426-thickbox/panneau-solaire-back-contact-55w-12v-unisun-55-12-bc.jpg"
              alt=""
            />
          </div>
          <div>
            <div className=" w-[350px] h-[100px] flex flex-col px-2">
              <h1 className="text-xl font-semibold">
                Panneau solaire back-contact 55W - 12V{" "}
              </h1>
              <div className=" flex items-center h-full space-x-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#4CAF50"
                  size="2x"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">Garantie 5 ans</span>
                  <span className=" text-sm">Marque Française</span>
                </div>
              </div>
            </div>
            <div className="px-2 py-3 w-[350px] h-[300px] ">
              <p>
                Les panneaux solaires Back-contact offrent les{" "}
                <span className="font-semibold">meilleures performances</span>{" "}
                grâce à leurs connexions inter-cellules à l'arrière, augmentant
                ainsi la surface d'exposition au soleil. Plus compacts à
                puissance équivalente, ils sont idéaux pour les véhicules et les
                bateaux où l'espace est souvent limité.
              </p>
              <div className="flex pt-9 items-center justify-evenly">
                <div>
                  <WhatsAppButton />
                </div>
                <p className="font-semibold">
                  Stock: <span>10</span>
                </p>
              </div>

              {/* <div className="bg-blue-600 rounded-sm w-[160px] h-[40px]"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
