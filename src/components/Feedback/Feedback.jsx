import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ic from "../../Img/icone.png";
import img1 from "../../Img/m.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Feedback.css';

// Import required modules
import { Navigation } from 'swiper/modules';

// Define your custom SVG icons
const CustomPrevButton = () => (
  <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_4_19)">
      <rect x="12" y="6" width="82" height="82" rx="16" fill="#F9C06A" />
    </g>
    <path d="M53 48V55L45 47L53 39V46H61V48H53Z" fill="#603809" />
    <defs>
      <filter id="filter0_d_4_19" x="0" y="0" width="106" height="106" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.752941 0 0 0 0 0.415686 0 0 0 0.22 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_19" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_19" result="shape" />
      </filter>
    </defs>
  </svg>
);

const CustomNextButton = () => (
  <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_4_20)">
      <rect x="12" y="6" width="82" height="82" rx="16" fill="#F9C06A"/>
    </g>
    <path d="M53 48V55L61 47L53 39V46H45V48H53Z" fill="#603809"/>
    <defs>
      <filter id="filter0_d_4_20" x="0" y="0" width="106" height="106" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="6"/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.752941 0 0 0 0 0.415686 0 0 0 0.22 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_20"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_20" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const Feedback = () => {
  const swiperRef = useRef(null);

  const data = [
    {
      id: "1",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
      name: "Jonny Thomas",
      pos: "Project Manager",
      img: img1
    },
    {
      id: "2",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
      name: "Jonny Thomas",
      pos: "Project Manager",
      img: img1
    },
    {
      id: "2",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
      name: "Jonny Thomas",
      pos: "Project Manager",
      img: img1
    },
    {
        id: "3",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        name: "Jonny Thomas",
        pos: "Project Manager",
        img: img1
      },
      {
        id: "5",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        name: "Jonny Thomas",
        pos: "Project Manager",
        img: img1
      },
  ];

  return (
    <div className='bg_img_feed' >
      <div className='container px-lg-5 mb-4'>
        <div>
          <p className="feed-h-text">Our coffee perfection feedback</p>
        </div>
        <div>
          <p className="feed-text1">Our customers have amazing things to say about us</p>
        </div>

        <div className='position-relative mt-5 main_div_z' >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Set swiper instance
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className='siwper_fff'>
                <div>
                  <div className="card card-bg-feed p-lg-5 mx-lg-5 p-5  ">
                    
                   <div className="slid-c">
                   <div className='ms-lg-5 '  >
                      <img src={ic} alt="" />
                    </div>
                    <div className='card_sp'>
                      <p className='fed_card_des'>{item.des}</p>
                    </div>
                    <div>
                      <p className='feed_card_name mt-5'>{item.name}</p>
                    </div>
                    <div>
                      <p className='feed_card_pos'>{item.pos}</p>
                    </div>
                    <div className='d-flex justify-content-center img_po'>
                      <img className='img-fluid' src={item.img} alt="" />
                    </div>
                   </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
         
          <div className='d-flex justify-content-between slid_btn_css ' >
            <div className="custom-prev-button" onClick={() => swiperRef.current && swiperRef.current.slidePrev()}>
              <CustomPrevButton />
            </div>
            <div className="custom-next-button" onClick={() => swiperRef.current && swiperRef.current.slideNext()}>
              <CustomNextButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
