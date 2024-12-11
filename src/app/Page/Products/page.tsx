'use client';

import React, { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import Link from "next/link";




const ProductDetails = () => {
  const products =[
  {
    id: 1,
    name: "Mens Fashion Wear",
    price: "$45.00",
    image: "/product/image2.png",
    alt:"product 1", 
    rating: 4.5,
  },
  {
    id: 2,
    name: "Women's Fashion",
    price: "$67.00",
    image: "/product/image3.png", 
    alt:"product 2",
    rating: 4,
  },
  {
    id: 3,
    name: "Work Dummy Fashion",
    price: "$56.00",
    image: "/product/image4.png", 
    alt:"product 3",
    rating: 5,
  },
  {
    id: 4,
    name: "Top Wall Digital Clock",
    price: "$81.00",
    image: "/product/image5.png",     
    alt:"product 4",
    rating: 4.2,
  },
]

  const [activeTab, setActiveTab] = useState("Description");
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      <div className="py-28 bg-[#E7E4F8] px-8">
        <h1 className="text-4xl font-bold">Product Details</h1>
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home.</Link>
          <Link href={"/Page/Orders"}>Orders.</Link>
          <p className="text-[#FB2E86]"> Details</p>
        </div>
      </div>
    

      {/* Main Content */}
      <main className="flex-grow p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-8">
        {/* Product Details */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="/product/image1.png"
              alt="Playwood Arm Chair"
              className="rounded-lg shadow-md"
            />
          </div>        
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Playwood Arm Chair</h2>
            <p className="text-gray-500">Category: Furniture</p>
            <p className="text-lg font-bold text-purple-600">$200</p>
            <p className="text-gray-600">
              Stylish and comfortable armchair for modern living spaces.
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
              Add to Cart
            </button>
          </div>
          </section>
      </main>

      <div className="container mx-auto py-10 px-4">
      {/* Tabs Section */}
      <div className="border-b border-gray-300 mb-6">
        <div className="flex gap-6">
          {["Description", "Additional Info", "Reviews", "Video"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-black hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-10">
        {activeTab === "Description" && (
          <div>
            <p className="text-blue-900">
            "Transform your living space with the Playwood Arm Chair, a perfect blend of elegance, comfort, and durability. Crafted from premium solid wood, this chair is designed to complement any modern or classic home decor."
            </p>
            <h3 className="mt-4 font-semibold text-black">More details</h3>
            <ul className="mt-2 text-blue-900 space-y-2">
              <li>➜ Made with sustainably sourced wood for an eco-friendly touch.</li>
              <li>➜ Designed with a spacious seat and contoured backrest for unmatched comfort.</li>
              <li>➜ Available in versatile color options to suit any interior style.</li>
              <li>➜ Lightweight yet sturdy, making it easy to move around your home..</li>
            </ul>
          </div>
        )}
        {activeTab === "Additional Info" && (
          <div>
          <p className="text-blue-900">Additional information about the product.Durable construction ensures long-lasting quality.</p>
          <h3 className="mt-4 font-semibold text-black">More details</h3>
            <ul className="mt-2 text-blue-900 space-y-2">
              <li>➜ Wipe clean with a damp cloth and mild soap.</li>
              <li>➜ Use coasters to protect the surface from heat and spills.</li>
              <li>➜ Elegant and timeless design, perfect for any home decor.</li>
              <li>➜ Crafted with eco-friendly and sustainable materials.</li>
            </ul>

          </div>
          
        )}
        {activeTab === "Reviews" && (
          <div>
          <p className="text-blue-900">Customer reviews will appear here.</p>
          <h3 className="mt-4 font-semibold text-black">More details</h3>
            <ul className="mt-2 text-blue-900 space-y-2">
              <li >➜ ⭐️⭐️⭐️⭐️⭐️ "Stylish and Comfortable!"<br />
               "I absolutely love the Playwood Arm Chair! It's not only stylish but also incredibly comfortable. The craftsmanship is top-notch, and it fits perfectly in my living room. Highly recommend it!"<br />
               - Sarah L., Verified Buyer</li>
              <li>➜ ⭐️⭐️⭐️⭐️⭐️  "Worth Every Penny!"<br />
               "I was hesitant at first, but this chair exceeded my expectations. The wood quality is excellent, and it was easy to assemble. It's now my favorite spot to relax after a long day."<br />
               - James R., Verified Buyer</li>
              <li>➜ ⭐️⭐️⭐️⭐️ "Good Value for the Price"<br />
               "The chair is sturdy and looks great. I wish the seat cushion was a little softer, but overall, it's a fantastic addition to my home office."<br />
               - Priya K., Verified Buyer</li>
              <li>➜ ⭐️⭐️⭐️⭐️  "Elegant Design!"<br />
               "I purchased this for my dining area, and it complements the room perfectly. The design is timeless, and I've received so many compliments from friends and family!"<br />
               - Carlos D., Verified Buyer</li>
            </ul>

          </div>
        )}
        {activeTab === "Video" && (
          <p className="text-blue-900">A product video will be displayed here.</p>
        )}
      </div>

      {/* Related Products Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Related Product Item */}
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg"
            >
              <div>
              <Image 
              
              src={product.image}
              alt={product.alt}
              width={400}
              height={900}
              className="w-full h-50 object-cover" />
                
              
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Product {index + 1}</h3>
                <div className="text-yellow-500 text-sm">★★★★★</div>
                <p className="text-blue-600 font-bold mt-2">$50.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
