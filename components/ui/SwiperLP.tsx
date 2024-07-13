"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules'

import dynamic from 'next/dynamic'
const SwiperButtonNext = dynamic(() => import("@/components/icons/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/icons/SwiperButtonPrev"))



import image1_big from "@/public/lighthouse/1.webp"
import image1_normal from "@/public/lighthouse/1.webp"
import image1_small from "@/public/lighthouse/1.webp"

import image2_big from "@/public/lighthouse/2.webp"
import image2_normal from "@/public/lighthouse/2.webp"
import image2_small from "@/public/lighthouse/2.webp"

import image3_big from "@/public/lighthouse/3.webp"
import image3_normal from "@/public/lighthouse/3.webp"
import image3_small from "@/public/lighthouse/3.webp"

import image4_big from "@/public/lighthouse/4.webp"
import image4_normal from "@/public/lighthouse/4.webp"
import image4_small from "@/public/lighthouse/4.webp"

import image5_big from "@/public/lighthouse/6.webp"
import image5_normal from "@/public/lighthouse/6.webp"
import image5_small from "@/public/lighthouse/6.webp"


import daveCover from "@/public/lighthouse/7.webp"


  
  export default function SwiperLP() {

    

  // Define your images and content in an array for easier management and rendering
  const slides = [
    { big: image1_big, normal: image1_normal, small: image1_small, 
      title: "M.Tilborg, Zwijndrecht", 
      content: "Al met al kan ik zeggen dat mijn ervaring met Zongericht positief is. Van begin tot eind overtroffen ze mijn verwachtingen met hun toewijding aan kwaliteit, snelle service, expertise en vriendelijkheid.",
      statuswho: "Huiseigenaar" },

    { big: image2_big, normal: image2_normal, small: image2_small, 
      title: "S. Vergouwen, Oud Gastel", 
      content: "Mijn ervaring met Zongericht is niets minder dan uitstekend, en ik kan ze zonder aarzeling aanbevelen aan iedereen die overweegt om zonne-energie te omarmen en zijn of haar energierekening te verlagen. Laat ik de zon maar schijnen, met Zongericht bouw ik aan een groenere, duurzamere toekomst voor ons allemaal.",
      statuswho: "Huiseigenaar" },

    { big: image3_big, normal: image3_normal, small: image3_small, 
      title: "W. Sonderen, Nijmegen", 
      content: "Zongericht gaf me het vertrouwen dat ze niet alleen een product verkopen, maar ook streven naar educatie en gebruik bij hun klanten.",
      statuswho: "Huiseigenaar" },

    { big: image4_big, normal: image4_normal, small: image4_small, 
      title: "R. Panhuysen, Utrecht", 
      content: "Zongericht zond een kundige adviseur die bij mij thuis de analyse deed voor de inrichting en de geschiktheid van mijn elektriciteitskast. Aan de hand daarvan heb ik een vrijblijvende offerte gekregen.",
      statuswho: "Huiseigenaar" },

    { big: image5_big, normal: image5_normal, small: image5_small, 
      title: "Desmond, Alblasserwaard", 
      content: "Vanaf het eerste contact met Zongericht voelden we ons welkom en goed geïnformeerd. Het begon met een vriendelijk telefoongesprek waarin we onze wensen deelden. We zijn een gezin van vijf met een elektrische auto, wat extra elektriciteit vereist voor het opladen.",
      statuswho: "Huiseigenaar" },
    
      { big: image1_big, normal: image1_normal, small: image1_small, 
        title: "M.Tilborg, Zwijndrecht", 
        content: "Al met al kan ik zeggen dat mijn ervaring met Zongericht positief is. Van begin tot eind overtroffen ze mijn verwachtingen met hun toewijding aan kwaliteit, snelle service, expertise en vriendelijkheid.",
        statuswho: "Huiseigenaar" },
  
      { big: image2_big, normal: image2_normal, small: image2_small, 
        title: "S. Vergouwen, Oud Gastel", 
        content: "Mijn ervaring met Zongericht is niets minder dan uitstekend, en ik kan ze zonder aarzeling aanbevelen aan iedereen die overweegt om zonne-energie te omarmen en zijn of haar energierekening te verlagen. Laat ik de zon maar schijnen, met Zongericht bouw ik aan een groenere, duurzamere toekomst voor ons allemaal.",
        statuswho: "Huiseigenaar" },
  
      { big: image3_big, normal: image3_normal, small: image3_small, 
        title: "W. Sonderen, Nijmegen", 
        content: "Zongericht gaf me het vertrouwen dat ze niet alleen een product verkopen, maar ook streven naar educatie en gebruik bij hun klanten.",
        statuswho: "Huiseigenaar" },
  
      { big: image4_big, normal: image4_normal, small: image4_small, 
        title: "R. Panhuysen, Utrecht", 
        content: "Zongericht zond een kundige adviseur die bij mij thuis de analyse deed voor de inrichting en de geschiktheid van mijn elektriciteitskast. Aan de hand daarvan heb ik een vrijblijvende offerte gekregen.",
        statuswho: "Huiseigenaar" },
  
      { big: image5_big, normal: image5_normal, small: image5_small, 
        title: "Desmond, Alblasserwaard", 
        content: "Vanaf het eerste contact met Zongericht voelden we ons welkom en goed geïnformeerd. Het begon met een vriendelijk telefoongesprek waarin we onze wensen deelden. We zijn een gezin van vijf met een elektrische auto, wat extra elektriciteit vereist voor het opladen.",
        statuswho: "Huiseigenaar" },
];
  



    return (
      <div className='w-full h-auto flex flex-col gap-6 md:gap-12 pb-8 md:pb-16'>
        <style jsx global>{`
          .swiper-pagination-bullet-active {
            background: #883D07;
          }
        `}
        </style>
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,          
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          navigation= {{
            nextEl: ".swiper-button-next-big",
            prevEl: ".swiper-button-prev-big",
          }}
          loop={true}
          
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            601: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          
          modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard]}
          className="flex justify-center items-center text-center w-full max-w-[1440px] px-4 py-12 md:py-16 h-auto "
        >
          {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='w-full flex justify-center items-center relative mb-8 group transition duration-300 ease-in-out md:cursor-pointer'>
              <Image src={slide.big} alt={`${slide.title} big`} width={510} height={700} 
                className='hidden xl:flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-lg'/>
              <Image src={slide.normal} alt={`${slide.title} normal`} width={510} height={700} 
                className='hidden md:flex xl:hidden justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-lg'/>
              <Image src={slide.small} alt={`${slide.title} small`} width={510} height={700} 
                className='md:hidden flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-lg'/>

              {/* <div className="w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto flex justify-center items-center opacity-75 md:opacity-0 md:group-hover:opacity-100 absolute bg-black bg-opacity-50 object-cover rounded-lg transition duration-300 ease-in-out md:cursor-pointer">
                  <Image 
                        src={daveCover}
                        alt={`${slide.title} dave cover`}
                        width={510}
                        height={700}
                        className="w-full h-auto rounded-lg opacity-40"
                    />
                <div className="absolute flex flex-col gap-4 w-full h-fit justify-start items-center px-4 py-2">
                  <p className="text-white text-base">{slide.content}</p>
                  <p className="text-white text-xl font-semibold">{slide.title}</p>
                  <p className="text-white text-sm">{slide.statuswho}</p>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
          ))}          
        </Swiper>

        {/* <div className='w-full flex flex-row-reverse justify-center items-center gap-4'>
          <div className='swiper-button-next-big rounded-full shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonNext />
          </div>
          <div className='swiper-button-prev-big rounded-full shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonPrev />
          </div>
        </div> */}
      
      </div>
  );
};

