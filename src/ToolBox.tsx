import { useAtom } from "jotai";
import BusinessRichEdit from "./components/business/BusinessRich/BusinessRichEdit";
import SearchEdit from "./components/business/Search/SearchEdit";
import CarouselEdit from "./components/business/Carousel/CarouselEdit";
import { activeItemIdAtom, listAtom } from "./model/global";
import BusinessNoticeEdit from "./components/business/BusinessNotice/BusinessNoticeEdit";
import ImageTextNavEdit from "./components/business/ImageTextNav/ImageTextNavEdit";
import ElevatorNavigationEdit from "./components/business/ElevatorNavigation/ElevatorNavigationEdit";
const ToolBox = () => {
  const [activeItemId] = useAtom(activeItemIdAtom);
  const [list] = useAtom(listAtom);
  const getRender = (item) => {
    if (!item) return null;
    const { type } = item;
    let jsx;
    switch (type) {
      case "carousel":
        jsx = <CarouselEdit key={item.id} {...item} />;
        break;
      case "search":
        jsx = <SearchEdit key={item.id} {...item} />;
        break;
      case "rich_text":
        jsx = <BusinessRichEdit key={item.id} {...item} />;
        break;
      case "image_text_nav":
        jsx = <ImageTextNavEdit key={item.id} {...item} />;
      case "notice":
        jsx = <BusinessNoticeEdit key={item.id} {...item} />;
        break;
      case "elevator_navigation":
        jsx = <ElevatorNavigationEdit key={item.id} {...item} />;
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
