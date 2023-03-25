import React from "react";
import { Swiper, Image } from "react-vant";
import { CarouselDTO } from "../../../interface";
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div onClick={() => {}}>{index + 1}</div>
  </Swiper.Item>
));
export default function CarouselView(props: CarouselDTO) {
  const { imgList, loop } = props;
  console.log("imgList", imgList);
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000} style={{ height: 190 }} loop={loop}>
        {imgList.map((item) => {
          return (
            <Swiper.Item key={item.id}>
              <Image src={item.url} alt="" />
            </Swiper.Item>
          );
        })}
      </Swiper>
    </div>
  );
}
