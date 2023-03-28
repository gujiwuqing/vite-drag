import { useAtom } from "jotai";
import BusinessNoticeEdit from "./components/business/BusinessNotice/BusinessNoticeEdit";
import BusinessRichEdit from "./components/business/BusinessRich/BusinessRichEdit";
import CarouselEdit from "./components/business/Carousel/CarouselEdit";
import ElevatorNavigationEdit from "./components/business/ElevatorNavigation/ElevatorNavigationEdit";
import ImageTextNavEdit from "./components/business/ImageTextNav/ImageTextNavEdit";
import SearchEdit from "./components/business/Search/SearchEdit";
import TitleEdit from "./components/business/Title/TitleEdit";
import GoodEdit from "./components/business/Good/GoodEdit";
import { activeItemIdAtom, listAtom } from "./model/global";
const Editor = () => {
  const [activeItemId] = useAtom(activeItemIdAtom);
  const [list] = useAtom(listAtom);
  const getRender = (item) => {
    if (!item) return null;
    const { type } = item;
    let jsx;
    switch (type) {
      case "title":
        jsx = <TitleEdit key={item.id} {...item} />;
        break;
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
        break;
      case "notice":
        jsx = <BusinessNoticeEdit key={item.id} {...item} />;
        break;
      case "elevator_navigation":
        jsx = <ElevatorNavigationEdit key={item.id} {...item} />;
        break;
         case "goods":
        jsx = <GoodEdit key={item.id} {...item} />;
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

export default Editor;
