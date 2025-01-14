import React from 'react';

const HindaviHero = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12">
        {/* Logo Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 bg-orange-700 rounded-full flex items-center justify-center transform rotate-45">
            <div className="-rotate-45">
              <h2 className="text-orange-100 text-center font-bold">
                <span className="block text-3xl">Riddhi </span>
                <span className="block text-3xl mt-2">Siddhi</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-red-800 mb-6">
            Why Choose Riddhi Siddhi?
          </h1>
          
          <div className="space-y-6 text-gray-800">
            <p className="text-lg">
              Welcome to Riddhi Siddhi, a premier export company dedicated to 
              delivering the finest farm-fresh agro products from India to the global market. 
              With a commitment to quality, sustainability, and customer satisfaction, we 
              specialize in offering a diverse range of agricultural products sourced directly 
              from India's fertile lands. Our comprehensive product line includes a variety 
              of fruits, vegetables, spices, grains, and other agricultural commodities that 
              cater to the diverse needs of our international clientele.
            </p>
            
            <p className="text-lg">
              At Riddhi Siddhi, we are committed to building long-term relationships with 
              our clients. Whether you are a wholesaler, retailer, or distributor, we are here 
              to provide you with the best farm-fresh agro products from India. Contact us 
              today to discuss your requirements and discover how we can cater to your 
              needs with our high-quality offerings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HindaviHero;