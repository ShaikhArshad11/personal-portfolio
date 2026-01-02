// import React, { Fragment, useState } from "react";
// import Image from "next/image";
// import LightBox from "react-awesome-lightbox";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { portfolioSlider } from "../swiperSliderProps";

// import almawa from "./ui/images/al1.png"
// import nitin from "./ui/images/nitin1.png"
// import life from "./ui/images/life.png"
// import Link from "next/link";

// const IMAGES = [
//   {
//     src: almawa,
//     thumbnail: almawa,
//     title: "Al-Mawa International",
//     // sub: "Image",
//     url: "https://www.al-mawa.international",
//   },
//   {
//     src: nitin,
//     thumbnail: nitin,
//     title: "Nitin Hardware",
//     url: "https://www.nitinhardware.in",
//     // sub: "Image",
//   },

//   {
//     src: life,
//     thumbnail: life,
//     title: "Life Style Home Decor",
//     url: "https://www.nitinhardware.in",
//     // sub: "Image",
//   },
//   {
//     src: "/img/portfolio/4.jpg",
//     thumbnail: "/img/portfolio/4.jpg",
//     title: "Folio Grasia",
//     sub: "Image",
//   },
//   {
//     src: "/img/portfolio/5.jpg",
//     thumbnail: "/img/portfolio/5.jpg",
//     title: "Viva Mercury",
//     sub: "Image",
//   },
//   {
//     src: "/img/portfolio/6.jpg",
//     thumbnail: "/img/portfolio/6.jpg",
//     title: "Santa Onera",
//     sub: "Image",
//   },
// ];

// const Portfolio = () => {
//   const [showLight, setShowLight] = useState(null);

//   const getImageUrl = (src) => (typeof src === "string" ? src : src?.src);

//   const showLightBox = (index) => {
//     setShowLight({
//       startIndex: index,
//     });
//   };

//   const hideLightBox = () => {
//     setShowLight(null);
//   };
//   return (
//     <Fragment>
//       <div className="kura_tm_section bg-gray-100" id="portfolio">
//         <div className="kura_tm_portfolio">
//           <div className="container">
//             <div className="">
//               <span className="text-7xl text-black font-bold">Website Portfolio</span>
//               {/* <h3>Selected Works</h3> */}
//             </div>
//             <div
//               className="portfolio_list gallery_zoom wow fadeInUp"
//               data-wow-duration=".7s"
//             >
//               <div className="swiper-container">
//                 <div className="swiper-wrapper">
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import LightBox from "react-awesome-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

import almawa from "./ui/images/al1.png"
import nitin from "./ui/images/nitin1.png"
import life from "./ui/images/life.png"

const IMAGES = [
  {
    src: almawa,
    thumbnail: almawa,
    title: "Al-Mawa International",
    url: "https://www.al-mawa.international",
  },
  {
    src: nitin,
    thumbnail: nitin,
    title: "Nitin Hardware",
    url: "https://www.nitinhardware.in",
  },
  {
    src: life,
    thumbnail: life,
    title: "Life Style Home Decor",
    url: "https://www.lifestylehomedecor.in",
  },
];

const Portfolio = () => {
  const [showLight, setShowLight] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const getImageUrl = (src) => (typeof src === "string" ? src : src?.src);

  const hideLightBox = () => {
    setShowLight(null);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Fragment>
      <section className="py-20 bg-gray-100" id="portfolio">
        <div className="container py-20 mx-auto px-4">
          {/* Heading */}
          <div className="">
            <h2 className="text-5xl pb-10 md:text-7xl font-bold text-black">
              Website Portfolio
            </h2>
          </div>

          {/* Swiper Slider */}
          {isClient ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              el: '.swiper-pagination',
              clickable: true 
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="portfolio-swiper"
          >
            {IMAGES.map((image, index) => (
              <SwiperSlide key={index}>
                <a
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-1000 ease-in-out ">
                    {/* Image Container */}
                    <div className={`relative bg-gray-200 overflow-hidden hover:-translate-y-2
              hover:border-blue-400
              hover:shadow-[0_10px_30px_rgba(0,172,255,.25)]`}>
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Arrow Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <svg 
                          className="w-5 h-5 text-gray-800" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Details Overlay */}
                    <div className="absolute hidden group-hover:block bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent tranition-all duration-1000 ease-in-out">
                      <h3 className="bg-black/50 rounded-xl text-xl md:text-2xl font-bold p-3 text-white mb-1">
                        {image.title}
                      </h3>
                      {image.sub && (
                        <span className="text-lg text-gray-300">{image.sub}</span>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 border-2 border-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          ) : null}

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button className="swiper-button-prev w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 after:content-none">
              <svg 
                className="w-6 h-6 rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </button>
            
            <div className="swiper-pagination"></div>
            
            <button className="swiper-button-next w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 after:content-none">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {showLight && (
        <LightBox
          images={IMAGES.map((img) => ({
            url: getImageUrl(img.src),
            title: img.title,
          }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
        />
      )}

      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #000;
          opacity: 0.5;
        }
        
        .portfolio-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #06b6d4;
        }
      `}</style>
    </Fragment>
  );
};

export default Portfolio;