import React from "react";
import { TitleDTO } from "../../../interface";

export default function TitleView(props: TitleDTO) {
  const { value, color, fontSize, background } = props;
  return (
    <div style={{ background }}>
      <span style={{ color, fontSize }}>{value}</span>
    </div>
  );
}
