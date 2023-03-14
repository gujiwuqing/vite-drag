import React from "react";
import BusinessInputEdit from "./components/business/BusinessInput/BusinessInputEdit";
import BusinessRadioEdit from "./components/business/BusinessRadio/BusinessRadioEdit";
import CarouselEdit from "./components/business/Carousel/CarouselEdit";
import { useAtom } from "jotai";
import { activeItemIdAtom, listAtom } from "./model/global";
const ToolBox = () => {
  const [activeItemId] = useAtom(activeItemIdAtom);
  const [list] = useAtom(listAtom);
  const getRender = (item) => {
    if (!item) return null;
    const { type } = item;
    let jsx;
    switch (type) {
      case "input":
        jsx = <BusinessInputEdit key={item.id} {...item} />;
        break;
      case "radio":
        jsx = <BusinessRadioEdit key={item.id} {...item} />;
        break;
      case "carousel":
        jsx = <CarouselEdit key={item.id} {...item} />;
        break;
      default:
        jsx = null;
        break;
    }
    return jsx;
  };
  return (
    <div className="tool">
      {getRender(list.find((t) => t.id == activeItemId))}
    </div>
  );
};

export default ToolBox;
