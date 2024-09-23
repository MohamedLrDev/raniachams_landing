// import React from "react";
// import ProductCard from "./ProductCard";

// const Products = () => {

//   const handleButtonClick = () => {
//     // Add your button click functionality here
//     console.log("Button clicked!");
//   };

//   // Define an array of products
//   const products = [
//     {
//       name: "Panneau solaire monocristallin JA-Solar PERC 108 cellules",
//       description: "Panneau solaire monocristallin composé de demi-cellules PERC à haut rendement.",
//       buttonText: "View Details",
//       imageUrl: "https://www.solaris-store.com/73361-medium_default/panneau-solaire-monocristallin-ja-solar-perc-410w-108-cells.jpg"
//     },
//     {
//       name: "Panneau solaire Monocristallin VICTRON 115W",
//       description: "Victron propose une large gamme de panneaux solaires à prix attractif.",
//       buttonText: "View Details",
//       imageUrl: "https://www.solaris-store.com/71933-medium_default/panneau-solaire-monocristallin-victron-115w-115wc-12v.jpg"
//     },
//     {
//       name: "Panneau solaire polycristallin VICTRON 20W ",
//       description: "Victron propose une large gamme de panneaux solaires à prix attractif.",
//       buttonText: "View Details",
//       imageUrl: "https://www.solaris-store.com/40372-medium_default/panneau-solaire-polycristallin-victron-20w.jpg"
//     },
//     {
//       name: "Panneau solaire back-contact 55W - 12V",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  nec fermentum magna luctus.",
//       buttonText: "View Details",
//       imageUrl: "https://www.solaris-store.com/10426-thickbox/panneau-solaire-back-contact-55w-12v-unisun-55-12-bc.jpg"
//     },

//     // Add more products as needed
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-2xl font-semibold text-[#2196F3] mb-6 text-center">Produits</h2>
//       <div className="flex pb-5 flex-wrap space-x-5 justify-center pr-1.5 overflow-x-auto w-full">
//         {/* Map over the products array to render each ProductCard */}
//         {products.map((product, index) => (
//           <ProductCard
//             key={index} // Key should be unique, you can use a unique identifier if available
//             name={product.name}
//             description={product.description}
//             buttonText={product.buttonText}
//             onClick={handleButtonClick}
//             imageUrl={product.imageUrl}
//             className="w-[200px]" // Set a fixed width for each ProductCard
//           />
//         ))}
//       </div>
//       <div className="flex justify-end pt-4">
//         <a href="#" className=" mr-14 text-green-800 hover:underline font-bold">
//           en savoir plus...
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  // State to manage the pop-up visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to store the details of the product to display in the pop-up
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to toggle the pop-up visibility and set the selected product
  const togglePopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(!isPopupOpen);
  };

  // Function to close the pop-up
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const popupTransition = {
    transition: "opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)",
  };
  // Define an array of products
  const products = [
    {
      name: "Panneau solaire monocristallin JA-Solar PERC 108 cellules",
      description:
        "Panneau solaire monocristallin composé de demi-cellules PERC à haut rendement.",
      buttonText: "View Details",
      imageUrl:
        "https://www.solaris-store.com/73361-medium_default/panneau-solaire-monocristallin-ja-solar-perc-410w-108-cells.jpg",
    },
    {
      name: "Panneau solaire Monocristallin VICTRON 115W",
      description:
        "Victron propose une large gamme de panneaux solaires à prix attractif.",
      buttonText: "View Details",
      imageUrl:
        "https://www.solaris-store.com/71933-medium_default/panneau-solaire-monocristallin-victron-115w-115wc-12v.jpg",
    },
    {
      name: "Panneau solaire polycristallin VICTRON 20W ",
      description:
        "Victron propose une large gamme de panneaux solaires à prix attractif.",
      buttonText: "View Details",
      imageUrl:
        "https://www.solaris-store.com/40372-medium_default/panneau-solaire-polycristallin-victron-20w.jpg",
    },
    {
      name: "Panneau solaire back-contact 55W - 12V",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  nec fermentum magna luctus.",
      buttonText: "View Details",
      imageUrl:
        "https://www.solaris-store.com/10426-thickbox/panneau-solaire-back-contact-55w-12v-unisun-55-12-bc.jpg",
    },
  ];
  return (
    <div className="container mx-auto py-8 relative">
      <h2 className="text-2xl font-semibold text-[#2196F3] mb-6 text-center">
        Nos Produits
      </h2>
      <div className="flex pb-5 flex-wrap space-x-5 justify-center pr-1.5 overflow-x-auto w-full">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            buttonText={product.buttonText}
            onClick={() => togglePopup(product)}
            imageUrl={product.imageUrl}
            className="w-[200px]"
          />
        ))}
      </div>
      <div className="flex justify-end ">
        <a href="#" className="	text-transform: capitalize mr-14 text-green-800 hover:underline text-lg font-bold">
          en savoir plus...
        </a>
      </div>

      {/* Conditional rendering of ProductDetails pop-up */}
      <AnimatePresence>
        {isPopupOpen && selectedProduct && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
            ></motion.div>
            <motion.div
              className="relative z-50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <ProductDetails product={selectedProduct} onClose={closePopup} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
