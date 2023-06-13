import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'
import banner5 from '../../../assets/banner/banner5.jpg'
import banner6 from '../../../assets/banner/banner6.jpg'

const Banner = () => {
    return (
        <div className="mb-20">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;