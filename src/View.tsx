import { useAtom } from "jotai";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BusinessNoticeView from "./components/business/BusinessNotice/BusinessNoticeView";
import BusinessRichView from "./components/business/BusinessRich/BusinessRichView";
import CarouselView from "./components/business/Carousel/CarouselView";
import ElevatorNavigationView from "./components/business/ElevatorNavigation/ElevatorNavigationView";
import ImageTextNavView from "./components/business/ImageTextNav/ImageTextNavView";
import SearchView from "./components/business/Search/SearchView";
import DragableItemView from "./DragableItemView";
import { activeItemIdAtom, listAtom } from "./model/global";

const View = () => {
  const [list, setList] = useAtom(listAtom);
  const [activeItemId] = useAtom(activeItemIdAtom);
  const RenderItem = (item, index) => {
    const commonProps = {
      index,
      id: item.id,
      key: item.id,
      isActive: item.id === activeItemId,
    };
    const { type } = item;
    switch (type) {
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

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("handleDragOver", e);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    console.log("handleDrop", e);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="view">
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
  );
};

export default View;
