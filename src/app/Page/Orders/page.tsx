import Link from "next/link";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
Link

const OrderCompleted = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Header */} 
      <header>
        <Header/>
      </header>

       {/* Main Section */}
       <main className="flex-grow">
        <div className="container mx-auto py-12 text-center ">
        <div className="py-16 ml-8 lg:ml-36 space-y-2 ">
        <h1 className="text-4xl font-bold  text-[#001F54]">Your Order Has Been Placed</h1> {/* Dark blue */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <span className="text-black mx-2">.</span>
          <span className="text-[#FB2E86]">Order Completed</span>
        </div>
      </div>
          
          <div className="mt-12 bg-white p-8 shadow-md rounded-md max-w-lg mx-auto">
            <div className="flex items-center justify-center">
              <span className="text-4xl text-blue-500">⏰</span>
             <span className="text-pink-500 text-5xl ml-4">✔️</span>
            </div>
            <h3 className="text-gray-800 text-3xl font-bold mt-6">
              Your Order Is Completed!
            </h3>
            <p className="text-gray-600 mt-4">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <Link href="/Page/Shopgrid"><button className="bg-pink-500 text-white px-6 py-2 rounded-md mt-6 hover:bg-pink-600 transition">
              Continue Shopping
            </button></Link>
          </div>
        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
    
  );
};

export default OrderCompleted;

    