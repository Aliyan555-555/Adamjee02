"use client";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import blobshape from "blobshape";
import {
  ProductsDataConventional,
  ProductsDataTakeFull,
  RiderTabsData,
} from "@/src/constants";
import { SwiperSlide, Swiper } from "swiper/react";

const RiderORProduct = () => {
  const [index, setIndex] = useState(0);

  const [isRiderTab, setIsRiderTab] = useState(true);
  const handlePrevClick = () => {
    setIndex((prev) => (prev === 0 ? RiderTabsData.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setIndex((prev) => (prev === RiderTabsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="rider" className="w-screen  py-10">
      <div className="w-full flex items-center py-10 justify-center">
        <Button
          onClick={() => setIsRiderTab(true)}
          sx={{
            py: 3,
            width: 270,
            px: 12,
            borderRadius: "100px 0 0 100px",
            border: 2,
            borderColor: "#002175",
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            backgroundColor: isRiderTab ? "#002175" : "#fff",
            color: isRiderTab ? "white" : "#002175",
          }}
          className="max-sm:!text-2xl max-sm:!px-8 max-sm:!w-[180px]"
        >
          Riders
        </Button>
        <Button
          onClick={() => setIsRiderTab(false)}
          sx={{
            py: 3,
            px: 12,
            width: 270,
            borderRadius: "0 100px 100px 0",
            border: 2,
            borderColor: "#002175",
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            backgroundColor: isRiderTab ? "white" : "#002175",
            color: isRiderTab ? "#002175" : "#fff",
          }}
          className="max-sm:!text-2xl max-sm:!px-8 max-sm:!w-[180px]"
        >
          Products
        </Button>
      </div>
      {isRiderTab ? (
        <div className="w-full flex-col flex items-center">
          <div className="w-[90%] flex items-center flex-col">
            <h2 className="text-4xl max-sm:text-center md:text-6xl  text-[#002175] mt-8">
              {RiderTabsData[index].title}
            </h2>
            <div className="w-full  h-[500px] flex">
              <div className="w-1/2  hidden md:block h-full relative">
                <div className="hidden md:flex w-[200px] backdrop-blur-xl absolute h-[200px] bg-[#ffffff2b] text-[#002175] rounded-full  items-center justify-center text-center text-8xl font-semibold">
                  <h1 className="p-0 m-0">0{index + 1}</h1>
                </div>

                {/* Display animated blob */}
                <Blob image={true} src={RiderTabsData[index].image} />
              </div>
              <div className="w-full md:w-1/2 relative h-full flex text-lg gap-1 max-sm:items-center max-sm:text-center justify-center flex-col">
                <p>
                  <strong>Entry Age:</strong> {RiderTabsData[index].EntryAge}
                </p>
                <p>
                  <strong>Expiry Age:</strong> {RiderTabsData[index].ExpiryAge}
                </p>
                <p>
                  <strong>Incidents Covered:</strong>{" "}
                  {RiderTabsData[index].IncidentsCovered}
                </p>
                <p>
                  <strong>Benefit Term:</strong>{" "}
                  {RiderTabsData[index].BenefitTerm}
                </p>
                <p>
                  <strong>Conditions Applicable:</strong>
                </p>
                <ul className="pl-8">
                  {RiderTabsData[index].ConditionsApplicable.map(
                    (condition, i) => (
                      <li key={i}>{condition}</li>
                    )
                  )}
                </ul>
                <p>
                  <strong>Note:</strong> {RiderTabsData[index].Note}
                </p>

                {/* Navigation buttons */}
                <div className="w-[200px] absolute bottom-0 flex items-center justify-between mt-20 text-xl font-semibold">
                  <IconButton onClick={handlePrevClick}>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28 6.18605C28 2.76959 25.2304 0 21.814 0H6.18605C2.76959 0 0 2.76959 0 6.18605V21.814C0 25.2304 2.76959 28 6.18605 28H21.814C25.2304 28 28 25.2304 28 21.814V6.18605ZM21.814 1.95349C24.1515 1.95349 26.0465 3.84847 26.0465 6.18605V21.814C26.0465 24.1515 24.1515 26.0465 21.814 26.0465H6.18605C3.84847 26.0465 1.95349 24.1515 1.95349 21.814V6.18605C1.95349 3.84847 3.84847 1.95349 6.18605 1.95349H21.814Z"
                        fill="#28384B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3093 6.7977L6.79771 13.3093C6.41627 13.6908 6.41627 14.3092 6.79771 14.6907L13.3093 21.2023L14.6907 19.821L9.84644 14.9767H20.5116V13.0233H9.84644L14.6907 8.17903L13.3093 6.7977Z"
                        fill="#28384B"
                      />
                    </svg>
                  </IconButton>
                  <p>
                    {index + 1}/{RiderTabsData.length}
                  </p>
                  <IconButton onClick={handleNextClick}>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 6.18605C0 2.76959 2.76959 0 6.18605 0H21.814C25.2304 0 28 2.76959 28 6.18605V21.814C28 25.2304 25.2304 28 21.814 28H6.18605C2.76959 28 0 25.2304 0 21.814V6.18605ZM6.18605 1.95349C3.84847 1.95349 1.95349 3.84847 1.95349 6.18605V21.814C1.95349 24.1515 3.84847 26.0465 6.18605 26.0465H21.814C24.1515 26.0465 26.0465 24.1515 26.0465 21.814V6.18605C26.0465 3.84847 24.1515 1.95349 21.814 1.95349H6.18605Z"
                        fill="#28384B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.6907 6.7977L21.2023 13.3093C21.5837 13.6908 21.5837 14.3092 21.2023 14.6907L14.6907 21.2023L13.3093 19.821L18.1536 14.9767H7.48837V13.0233H18.1536L13.3093 8.17903L14.6907 6.7977Z"
                        fill="#28384B"
                      />
                    </svg>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full py-10">
          {/* Conventional Section */}
          <div className="flex w-full relative items-center justify-center">
            <div className="w-full absolute h-[2px] z-20 bg-[#002175]" />
            <p className="px-8 bg-white text-3xl text-[#002175] z-30">
              Conventional
            </p>
          </div>
          <Swiper
            spaceBetween={40}
            loop={true}
            className="w-full h-full !px-10 !py-12 !flex !items-center"
            breakpoints={{
              320: {
                slidesPerView: 1, // 1 product for mobile
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2, // 2 products for tablets
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4, // 4 products for desktops
                spaceBetween: 40,
              },
            }}
          >
            {ProductsDataConventional.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="px-6 py-14 h-[350px]  relative flex flex-col gap-4 rounded-3xl bg-[#002175]">
                  <h2 className="text-3xl font-semibold text-wrap text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm font-semibold text-white">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    download={item.title}
                    className="py-2 flex text-white right-4 absolute bottom-2 items-center justify-end gap-3"
                  >
                    <p>Download the Brochure</p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Takaful Section */}
          <div className="flex w-full relative items-center justify-center">
            <div className="w-full absolute h-[2px] z-20 bg-[#002175]" />
            <p className="px-8 bg-white text-3xl text-[#002175] z-30">
              Takaful
            </p>
          </div>
          <Swiper
            loop={true}
            spaceBetween={40}
            className="w-full h-full !px-10 !py-12 !flex !items-center"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {ProductsDataTakeFull.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <div className="px-6 py-14 h-[350px]  relative flex flex-col gap-4 rounded-3xl bg-[#01311C]">
                  <h2 className="text-3xl font-semibold text-wrap text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm font-semibold text-white">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    download={item.title}
                    className="py-2 flex text-white right-4 absolute bottom-2 items-center justify-end gap-3"
                  >
                    <p>Download the Brochure</p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default RiderORProduct;

function getRandomPath() {
  return blobshape({
    growth: 8,
    edges: 18,
  }).path;
}

function Blob(props: { image: boolean; src: string }) {
  const [flip, set] = useState(false);

  const { path } = useSpring({
    to: { path: getRandomPath() },
    from: { path: getRandomPath() },
    reverse: flip,
    config: {
      duration: props.image ? 800 : 800,
    },
    onRest: (x) => {
      x.value.path = getRandomPath();
      set(!flip);
    },
  });
  return (
    <svg viewBox="0 0 500 500" width="100%">
      {!props.image && <animated.path d={path} />}
      {props.image && (
        <>
          <defs>
            <clipPath id="a">
              <animated.path d={path} />
            </clipPath>
          </defs>
          <image
            width="80%"
            height="80%"
            clipPath="url(#a)"
            xlinkHref={props.src}
            preserveAspectRatio="xMidYMid slice"
          />
        </>
      )}
    </svg>
  );
}
