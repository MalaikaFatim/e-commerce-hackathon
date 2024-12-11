'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  image: string;
}

const products: Product[] = [
  { id: 1,name: 'Vel elit euismod', price: '$50.00', oldPrice: '$60.00', image: '/image4.png' },
  { id: 2, name: 'Ultricies condimentum imperdiet', price: '$52.00', oldPrice: '$62.00', image: '/image1.png' },
  { id: 3, name: 'Vitae suspendisse sed', price: '$55.00', oldPrice: '$60.00', image: '/shopgrid/image10.png' },
  { id: 4, name: 'Sed at fermentum', price: '$50.00', oldPrice: '$60.00', image: '/shopgrid/image3.png' },
  { id: 5, name: 'Fusce pellentesque at', price: '$58.00', oldPrice: '$64.00', image: '/shopgrid/image4.png' },
  { id: 6, name: 'Vestibulum magna laoreet', price: '$59.00', oldPrice: '$62.00', image: '/shopgrid/image5.png' },
  { id: 7, name: 'Sollicitudin amet orci', price: '$50.00', oldPrice: '$60.00', image: '/shopgrid/image6.png' },
  { id: 8, name: 'Pellentesque condimentum ac', price: '$56.00', oldPrice: '$62.00', image: '/shopgrid/image7.png' },
  { id: 9, name: 'Cras scelerisque velit', price: '$60.00', oldPrice: '$65.00', image: '/shopgrid/image8.png' },
  { id: 10, name: 'Luctus vulputate faucibus', price: '$58.00', oldPrice: '$63.00', image: '/shopgrid/image9.png' },
  { id: 11, name: 'Ultricies mauris sit', price: '$53.00', oldPrice: '$60.00', image: '/shopgrid/image2.png' },
  { id: 12, name: 'Purus risus, ut', price: '$50.00', oldPrice: '$60.00', image: '/shopgrid/image1.png' },
];

export default function ShopGrid() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />
      <div>
      {/* Header Section */}
      <div className="w-full py-16 ml-8 lg:ml-36 space-y-2">
        <h1 className="text-4xl font-bold text-[#001F54]">Shop Grid</h1> {/* Dark blue */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <span className="text-black mx-2">.</span>
          <span className="text-[#FB2E86]">Shop Now</span>
        </div>
      </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
        <div>
          <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium text-gray-700">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    <div className="container mx-auto px-4 bg-white py-8">
      <h1 className="text-2xl font-bold text-blue-900 text-center mb-6">Shop Grid Right Here</h1>
      <p className='text-center text-xl font-semibold text-pink-600'>Shop Whatever You Like!</p><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-sm hover:bg-green-50 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-100 h-40 flex-shrink-0 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-sm text-gray-500">
                <span className="text-red-500 line-through">{product.oldPrice}</span> {product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </div>
  );
}
