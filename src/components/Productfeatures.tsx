import React from "react";

const ProductFeature = () => {
  return (
    <div className="py-12 bg-purple-100 flex justify-center items-center">
      <div className="max-w-6xl flex flex-col lg:flex-row items-center gap-8 px-6">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute -z-10 w-48 h-48 bg-purple-300 rounded-full -left-10 -top-10"></div>
          <img
            src="/sofaimg.png" 
            alt="Product"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Reinforced with double wood dowels, glue, screws, nails, corner
              blocks, and machine nails
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
              Add To Cart
            </button>
            <div>
              <h3 className="font-bold text-blue-900">B&B Italian Sofa</h3>
              <p className="text-gray-700">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
