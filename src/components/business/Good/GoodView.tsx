import { GoodDTO } from "@/interface";
import React from "react";

export default function GoodView(props: GoodDTO) {
  const { goodsList } = props;
  return (
    <div className="com-good">
      {goodsList.map((item) => {
        return (
          <div key={item.id} className="flex p-2">
            <div className="com-good-img">
              <img src={item.url} alt="" />
            </div>
            <div className="flex-1 border-b-2 border-solid border-gray">
              <div className="com-good-title">{item.title}</div>
              <div>
                <em style={{ color: "#E4393C", marginRight: 5 }}>
                  ￥<span className="com-good-price">{item.price}</span>
                </em>
                {item.linePrice && (
                  <em style={{ color: "#d2a448" }}>
                    ￥<span className="com-good-linePrice">{item.price}</span>
                  </em>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
