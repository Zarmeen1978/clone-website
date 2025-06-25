import React from "react";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">400+ Products</span> Developed For 300+ Customers Across 120+ Countries.
          </h1>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Replace each item with an image and a label */}
          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec1.png"
              alt="Meridio Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec2.png"
              alt="Analog Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec3.png"
              alt="Column / Freshprep Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec4.png"
              alt="GlobalReader / NYMCARD Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec1.png"
              alt="Satisfactory / Artefy Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec2.png"
              alt="Stakeholder / +Stitch Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
           <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec4.png"
              alt="Stakeholder / +Stitch Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
           <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
            <Image
              src="/assests/images/image-sec1.png"
              alt="Stakeholder / +Stitch Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
