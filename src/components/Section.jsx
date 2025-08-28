import React from "react";
import oneImg from "../assets/one.png";
import twoImg from "../assets/two.png";
import threeImg from "../assets/three.png";
import fourImg from "../assets/four.png";
import { MapPin, Utensils, CreditCard, Smile } from "lucide-react";


const data = [
  { img: oneImg, title: "Greys Vage", remaining: "6 Days Remaining" },
  { img: twoImg, title: "Greys Vage", remaining: "6 Days Remaining" },
  { img: threeImg, title: "Greys Vage", remaining: "7 Days Remaining" },
  { img: fourImg, title: "Greys Vage", remaining: "8 Days Remaining" },
];


const steps = [
  {
    icon: <MapPin className="w-12 h-12 text-orange-500" />,
    title: "Select location",
    desc: "Choose the location where your food will be delivered.",
  },
  {
    icon: <Utensils className="w-12 h-12 text-orange-500" />,
    title: "Choose order",
    desc: "Check over hundreds of menus to pick your favorite food",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-orange-500" />,
    title: "Pay advanced",
    desc: "It’s quick, safe, and simple. Select several methods of payment",
  },
  {
    icon: <Smile className="w-12 h-12 text-orange-500" />,
    title: "Enjoy meals",
    desc: "Food is made and delivered directly to your home.",
  },
];

const Section = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-64 rounded-2xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-orange-600 font-medium mt-1">
                {item.remaining}
              </p>
            </div>
          </div>
        ))}
      </div>


      <section className="text-center py-12 bg-gradient-to-b from-white to-orange-50 mt-16">
        <h2 className="text-2xl font-bold text-orange-600 mb-10">
          How does it work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section;
