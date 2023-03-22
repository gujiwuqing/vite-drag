import React from "react";
import { Swiper } from "react-vant";
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div onClick={() => {}}>{index + 1}</div>
  </Swiper.Item>
));
export default () => {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000}>{items}</Swiper>
    </div>
  );
};
