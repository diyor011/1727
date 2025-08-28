import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/Image 1.svg";
import img2 from "../assets/Image 2.svg";
import img3 from "../assets/Image 3.svg";
import img4 from "../assets/Image 4.svg";
import img5 from "../assets/Image 5.svg";

function Swipper() {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const foods = [
    { id: 1, name: t("categories.burger"), shop: "Burger Arena", price: 3.88, img: img1 },
    { id: 2, name: t("categories.noodles"), shop: "Top Sticks", price: 4.0, img: img2 },
    { id: 3, name: t("categories.chowmein"), shop: "Cake World", price: 1.99, img: img3 },
    { id: 4, name: t("categories.sub"), shop: "FastFood Dine", price: 3.0, img: img4 },
    { id: 5, name: t("categories.steak"), shop: "Foody man", price: 2.19, img: img5 },
  ];

  return (
    <div className="py-10 bg-white relative">
      <h2 className="text-center text-2xl font-bold mb-8">
        {t("popularItems.title")}
      </h2>

      {/* Кнопки */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-3xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
      >
        <GrFormPrevious />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-3xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
      >
        <MdOutlineNavigateNext />
      </button>

      {/* Свайпер */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true} // 🔄 бесконечный цикл
        onBeforeInit={(swiper) => {
          // Привязываем кнопки ДО инициализации
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {foods.map((food) => (
          <SwiperSlide key={food.id}>
            <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col items-center">
              <img
                src={food.img}
                alt={food.name}
                className="w-full h-40 object-cover"
              />
              <div className="py-4 text-center">
                <h3 className="font-semibold text-lg">{food.name}</h3>
                <p className="text-sm text-gray-500">{food.shop}</p>
                <p className="text-orange-500 font-bold">${food.price}</p>
                <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                  {t("popularItems.orderNow")}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swipper;
