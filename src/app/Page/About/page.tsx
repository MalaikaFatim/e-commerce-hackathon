import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { headers } from "next/headers";

const AboutPage = () => {
  return (
      <div>
      <header>
            <Header/>
      </header> 

      <div className="bg-gray-100 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">About Us</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">About Us</span>
          </p>
        </div>
        
        
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      <div>
          <h2 className="text-4xl font-bold mb-6">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
          Welcome to Our Website, where style meets comfort. We are an online destination for premium, stylish, and affordable furniture designed to transform your living spaces into something extraordinary.
          </p>
          <Link href="/Page/Contact">
            <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/aboutus/aboutimg.png"
            alt="Ecommerce Meeting"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "/aboutus/img1.png", title: "Free Delivery" },
            { icon: "/aboutus/img2.png", title: "100% Cash Back" },
            { icon: "/aboutus/img3.png", title: "Quality Product" },
            { icon: "/aboutus/img4.png", title: "24/7 Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Client Say!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Selina Gomez", image: "/clients/img1.png" },
            { name: "John Doe", image: "/clients/img2.png" },
            { name: "Emma Watson", image: "/clients/img3.png" },
          ].map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={client.image}
                alt={client.name}
                width={500}
                height={500}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
              />
              <p className="text-[#151875] font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non odio
          eleifend nisl sollicitudin aliquet ut non felis.
        </p>
      </section>
    </div>
    <footer>
      <Footer/>
    </footer>
    </div>
  );
};

export default AboutPage;