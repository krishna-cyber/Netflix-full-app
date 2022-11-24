import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./listStyle.css";

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
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCvs4fjcIHfgNig8HXMe6yDTEqPTIlAc5JiIsTs5xlD73u9bqE3GnHCcGGCIsvQfUeE7tXFAfGwzXDBmEvNQcTZHpflCep_tXM.jpg?r=216'
              alt=''
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default List;
