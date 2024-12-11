import React from "react";

const ShopexOffers = () => {
  const offers = [
    {
      icon: "🚚",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "💰",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "🏅",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        What Shopex Offer!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg text-center"
          >
            <div className="text-4xl mb-4">{offer.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {offer.title}
            </h3>
            <p className="text-gray-600">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffers;
