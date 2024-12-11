'use lient'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TopCategories from "@/components/Topcateg";
import LatestProducts from "@/components/Latestproduct";
import Feature from "@/components/Featuredproduct";
import Offers from "@/components/Subscribe";
import FeaturedProducts from "@/components/Featuredproduct";
import TrendingProducts from "@/components/Trendingproduct";
import Discount from "@/components/Disscount";



function Homepage(){
  return(
    <div>
      <Header />
      <Hero />
      <Feature />
      <LatestProducts />
      <Offers />
      <FeaturedProducts/>?
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Footer />
    </div>
  )
}

export default Homepage;
  