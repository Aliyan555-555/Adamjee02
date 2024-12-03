"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

// Demo data for the cards
const demoData = [
  {
    id: 1,
    name: "Ali Nawaz Baloch",
    occupation: "Retired Officer",
    date: "4/12/2024",
    image: "/images/roles/model6.png",
  },
  {
    id: 2,
    name: "Waseem Aijaz",
    occupation: "Van Driver",
    date: "20/12/2024",
    image: "/images/roles/model5.png",
  },
  {
    id: 3,
    name: "Saba Junaid",
    occupation: "Housewife",
    date: "12/12/2024",
    image: "/images/roles/model4.png",
  },
  {
    id: 4,
    name: "Usman Bhatia",
    occupation: "Entrepreneur",
    date: "16/12/2024",
    image: "/images/roles/model1.png",
  },
  {
    id: 5,
    name: "Sabeen Naz",
    occupation: "Social Impact Leader",
    date: "",
    image: "/images/roles/model2.png",
  },
  {
    id: 6,
    name: "Muhammad Hanif",
    occupation: "Agriculturist",
    date: "8/12/2024",
    image: "/images/roles/model3.png",
  },
  {
    id: 7,
    name: "Ali Nawaz Baloch",
    occupation: "Retired Officer",
    date: "4/12/2024",
    image: "/images/roles/model6.png",
  },
  {
    id: 8,
    name: "Waseem Aijaz",
    occupation: "Van Driver",
    date: "20/12/2024",
    image: "/images/roles/model5.png",
  },
  {
    id: 9,
    name: "Saba Junaid",
    occupation: "Housewife",
    date: "12/12/2024",
    image: "/images/roles/model4.png",
  },
  {
    id: 10,
    name: "Usman Bhatia",
    occupation: "Entrepreneur",
    date: "16/12/2024",
    image: "/images/roles/model1.png",
  },
  {
    id: 11,
    name: "Sabeen Naz",
    occupation: "Social Impact Leader",
    date: "",
    image: "/images/roles/model2.png",
  },
  {
    id: 12,
    name: "Muhammad Hanif",
    occupation: "Agriculturist",
    date: "8/12/2024",
    image: "/images/roles/model3.png",
  },
  {
    id: 13,
    name: "Ali Nawaz Baloch",
    occupation: "Retired Officer",
    date: "4/12/2024",
    image: "/images/roles/model6.png",
  },
  {
    id: 14,
    name: "Waseem Aijaz",
    occupation: "Van Driver",
    date: "20/12/2024",
    image: "/images/roles/model5.png",
  },
  {
    id: 15,
    name: "Saba Junaid",
    occupation: "Housewife",
    date: "12/12/2024",
    image: "/images/roles/model4.png",
  },
  {
    id: 16,
    name: "Usman Bhatia",
    occupation: "Entrepreneur",
    date: "16/12/2024",
    image: "/images/roles/model1.png",
  },
  {
    id: 17,
    name: "Sabeen Naz",
    occupation: "Social Impact Leader",
    date: "",
    image: "/images/roles/model2.png",
  },
  {
    id: 18,
    name: "Muhammad Hanif",
    occupation: "Agriculturist",
    date: "8/12/2024",
    image: "/images/roles/model3.png",
  },
];

const Slider = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(4);
  const handleCardClick = (id: number) => {
    setSelectedCard(id);
  };
  console.log(selectedCard);

  return (
    <div className="w-full py-10  flex justify-center items-center mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.2}
        grabCursor={true}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        // speed={900}
        autoplay={{
          delay: 1000, // 1 second delay between slides
          disableOnInteraction: false,
        }}
        // initialSlide={3}
        breakpoints={{
          640: {
            // For small screens (mobile)
            slidesPerView: 2,
            // spaceBetween: 40,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 6.1,
            spaceBetween: 0,
            centeredSlides: false,
          },
        }}
        // style={{width:'95%',}}
        className="!w-[90%] md:!w-[95%]"
        // className="md:w-full max-sm:!w-auto max-sm:!mx-auto h-full md:!flex md:!items-center"
      >
        {demoData.map((card) => (
          <SwiperSlide
            key={card.id}
            // onMouseEnter={() => handleCardClick(card.id)}
            onClick={() => handleCardClick(card.id)}
            className={`transition-all ] hover:z-[500] duration-500 ease-in-out ${
              false ? "!mr-32" : ""
            }`}
          >
            <div
              className={`bg-[#5984A0] md:scale-[0.8] max-sm:scale-100 hover:scale-[1] group !rounded-[30px] relative transition-all duration-500 ease-in-out ${
                true ? "w-[270px]  h-[350px]" : "w-[250px] h-[300px]"
              } p-[1px] border`}
            >
              <div className="w-[60%] flex flex-col justify-between relative h-full">
                {/* {selectedCard === card.id && ( */}
                <>
                  <div className="flex transition-all md:opacity-0 group-hover:opacity-100 duration-500 z-50 pt-4 pl-3 flex-col text-[#002175] font-semibold">
                    <p className="text-sm">Video Launch</p>
                    <p className="text-xl">{card.date}</p>
                  </div>
                  <div className="z-50 transition-all md:opacity-0 group-hover:opacity-100 duration-500 flex flex-col pb-4 pl-3">
                    <h1 className="text-4xl font-semibold text-[#002175] text-wrap">
                      {card.name}
                    </h1>
                    <h4 className="text-xl font-semibold">{card.occupation}</h4>
                  </div>

                  <svg
                    className="absolute transition-all md:opacity-0 group-hover:opacity-100 duration-500 w-[250px] group-hover:w-[300px] h-full z-40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.547729 32C0.547729 14.3269 14.8746 0 32.5477 0L127.815 0C142.359 0 155.074 9.80853 158.767 23.8765L245.995 356.231C251.366 376.696 235.753 396.647 214.597 396.352L32.1016 393.807C14.6042 393.563 0.547729 379.309 0.547729 361.81L0.547729 32Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </>
                {/* )} */}
              </div>
              <Image
                src={card.image}
                alt={card.name}
                width={250}
                height={400}
                className="absolute object-left h-full w-[240px] top-0 right-[5px] z-20 transition-all duration-300 ease-in-out transform "
              />
              <svg
                className="absolute md:hidden group-hover:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100000000]"
                width="87"
                height="87"
                viewBox="0 0 87 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.4724 86.9447C19.4626 86.9447 0 67.4821 0 43.4724C0 19.4626 19.4626 0 43.4724 0C67.4821 0 86.9447 19.4626 86.9447 43.4724C86.9447 67.4821 67.4821 86.9447 43.4724 86.9447ZM37.4819 27.8875C37.2202 27.713 36.9162 27.6126 36.602 27.5972C36.2879 27.5818 35.9754 27.6519 35.698 27.8C35.4205 27.9481 35.1884 28.1687 35.0264 28.4382C34.8643 28.7078 34.7785 29.0163 34.7779 29.3308V57.6139C34.7785 57.9284 34.8643 58.2369 35.0264 58.5065C35.1884 58.7761 35.4205 58.9966 35.698 59.1447C35.9754 59.2928 36.2879 59.3629 36.602 59.3475C36.9162 59.3321 37.2202 59.2318 37.4819 59.0572L58.692 44.92C58.9305 44.7613 59.1261 44.546 59.2614 44.2935C59.3967 44.0409 59.4675 43.7589 59.4675 43.4724C59.4675 43.1858 59.3967 42.9038 59.2614 42.6512C59.1261 42.3987 58.9305 42.1835 58.692 42.0247L37.4819 27.8875Z"
                  fill="#002175"
                />
              </svg>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
