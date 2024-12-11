'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from "next/link";

const Custom404 = () => (
  <div>
    <header>
      <Header/>
    </header>
    <div className="py-16 ml-18 bg-white lg:ml-36 space-y-2">
        <h1 className="text-4xl font-bold text-[#001F54]">404 No Page Found</h1> {/* Dark blue */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>Back To Home</Link>
          <span className="text-black mx-2">.</span>
          <span className="text-[#FB2E86]">Oops!</span>
        </div>
      </div>
      <div>
  <div className="text-center">
    <Image width={200} height={200} src="/404.png" alt="not-found" />
  </div>
  </div>
       <div>
        <div className="flex justify-center">
        <Image width={200} height={200} src="/image 1174.png" alt="Brand" className="w-full max-w-[800px] h-auto" />
      </div>
      </div>
  
  <footer>
    <Footer/>
  </footer>
  </div>
);

export default Custom404;