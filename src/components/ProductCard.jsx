import React from 'react';

const ProductCard = ({ name, description, buttonText, onClick, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-[280px] flex flex-col">
      <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={name} />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        {/* <p className="text-gray-600 mt-2 truncate">{description}</p> */}
      </div>
      <div className="px-4 py-3 flex justify-center">
        <button
          className="bg-[#4CAF50] hover:bg-[#3c873e] text-white font-semibold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
