import { useAtom } from "jotai";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BusinessNoticeView from "@/components/business/BusinessNotice/BusinessNoticeView";
import BusinessRichView from "@/components/business/BusinessRich/BusinessRichView";
import CarouselView from "@/components/business/Carousel/CarouselView";
import TitleView from "@/components/business/Title/TitleView";
import ElevatorNavigationView from "@/components/business/ElevatorNavigation/ElevatorNavigationView";
import ImageTextNavView from "@/components/business/ImageTextNav/ImageTextNavView";
import SearchView from "@/components/business/Search/SearchView";
import DragableItemView from "./DragableItemView";
import { activeItemIdAtom, listAtom, dragTypeAtom } from "./model/global";
import { handleAddView } from "./util";
import GoodView from "@/components/business/Good/GoodView";
import headerIcon from "@/assets/phone-head.d6916777.png";

const Preview = () => {
  const [list, setList] = useAtom(listAtom);
  const [activeItemId] = useAtom(activeItemIdAtom);
  const [dragType] = useAtom(dragTypeAtom);
  const RenderItem = (item, index) => {
    const commonProps = {
      index,
      id: item.id,
      key: item.id,
      isActive: item.id === activeItemId,
      name: item.name,
      type: item.type,
    };
    const { type } = item;
    switch (type) {
      case "title":
        return (
          <DragableItemView {...commonProps}>
            <TitleView {...item} />
          </DragableItemView>
        );
      case "carousel":
        return (
          <DragableItemView {...commonProps}>
            <CarouselView {...item} />
          </DragableItemView>
        );
      case "rich_text":
        return (
          <DragableItemView {...commonProps}>
            <BusinessRichView {...item} />
          </DragableItemView>
        );
      case "notice":
        return (
          <DragableItemView {...commonProps}>
            <BusinessNoticeView {...item} />
          </DragableItemView>
        );
      case "elevator_navigation":
        return (
          <DragableItemView {...commonProps}>
            <ElevatorNavigationView {...item} />
          </DragableItemView>
        );
      case "image_text_nav":
        return (
          <DragableItemView {...commonProps}>
            <ImageTextNavView {...item} />
          </DragableItemView>
        );
      case "search":
        return (
          <DragableItemView {...commonProps}>
            <SearchView {...item} />
          </DragableItemView>
        );
      case "goods":
        return (
          <DragableItemView {...commonProps}>
            <GoodView {...item} />
          </DragableItemView>
        );
      default:
        return "";
    }
  };
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    console.log("onDragEnd", result);
    if (!result.destination) {
      return;
    }
    const items = reorder(list, result.source.index, result.destination.index);
    console.log("items", items);
    setList(items);
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("e.target", e);
  };
  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    console.log("dragType", dragType);
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    if (target !== e.currentTarget) {
      return;
    }
    if (!dragType.type) return;
    console.log("dragType", dragType);
    const type = dragType.type;
    const name = dragType.name;
    const newItem = handleAddView(type, name);
    setList([...list, newItem]);
  };
  return (
    <div className="view">
      <div
        style={{
          backgroundImage: `url(${headerIcon})`,
          backgroundSize: "cover",
          height: 64,
          width: 400,
        }}
      ></div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="view-content"
              >
                {list.map((item, index) => {
                  return <>{RenderItem(item, index)}</>;
                })}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Preview;
