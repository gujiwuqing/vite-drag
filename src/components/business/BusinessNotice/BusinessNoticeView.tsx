import React from "react";
import { VolumeO } from "@react-vant/icons";
import { NoticeBar } from "react-vant";
export default function BusinessNoticeView(props) {
  const { text, color, background } = props;
  return (
    <NoticeBar
      leftIcon={<VolumeO />}
      text={text}
      background={background}
      color={color}
    />
  );
}
