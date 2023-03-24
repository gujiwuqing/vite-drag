import React, { CSSProperties } from "react";
import { createFromIconfontCN } from "@react-vant/icons";

const IconFont = createFromIconfontCN(
  "//at.alicdn.com/t/c/font_2434100_4b8pmri2xeo.js"
);

interface SvgProps {
  name: string;
  fontSize?: number | string;
  color?: string;
}

const Svg = ({ name, fontSize = 16, color }: SvgProps) => (
  <IconFont name={name} fontSize={fontSize} color={color} />
);

export default Svg;
