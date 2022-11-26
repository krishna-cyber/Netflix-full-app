import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./listStyle.css";
import ListCard from "./ListCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Mousewheel, Keyboard } from "swiper";
// import Images from "./Images";

const List = () => {
  return (
    <>
      <section className='swiper'>
        <h2>Continue to watch</h2>
        <Swiper
          cssMode={true}
          navigation={true}
          keyboard={true}
          slidesPerView={5}
          spaceBetween={30}
          modules={[Navigation, Mousewheel, Keyboard]}
          className='mySwiper'>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
          <SwiperSlide>
            <ListCard />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default List;
