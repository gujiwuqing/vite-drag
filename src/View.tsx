import { Checkbox } from "antd";
import { useAtom } from "jotai";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BusinessInputView from "./components/business/BusinessInput/BusinessInputView";
import BusinessRadioView from "./components/business/BusinessRadio/BusinessRadioView";
import BusinessRichView from "./components/business/BusinessRich/BusinessRichView";
import BusinessSearchView from "./components/business/BusinessSearch/BusinessSearchView";
import CarouselView from "./components/business/Carousel/CarouselView";
import DragableItemView from "./DragableItemView";
import { activeItemIdAtom, listAtom } from "./model/global";

const View = () => {
  const [list, setList] = useAtom(listAtom);
  const [activeItemId] = useAtom(activeItemIdAtom);
  const RenderItem = (item, index) => {
    console.log("item", item);
    const commonProps = {
      index,
      id: item.id,
      key: item.id,
      isActive: item.id === activeItemId,
    };
    const { type } = item;
    switch (type) {
      case "input":
        return (
          <DragableItemView {...commonProps}>
            <BusinessInputView {...item} />
          </DragableItemView>
        );
      case "radio":
        return (
          <DragableItemView {...commonProps}>
            <BusinessRadioView {...item} />
          </DragableItemView>
        );
      case "carousel":
        return (
          <DragableItemView {...commonProps}>
            <CarouselView {...item} />
          </DragableItemView>
        );
      case "search":
        return (
          <DragableItemView {...commonProps}>
            <BusinessSearchView {...item} />
          </DragableItemView>
        );
      case "rich":
        return (
          <DragableItemView {...commonProps}>
            <BusinessRichView {...item} />
          </DragableItemView>
        );
      case "checkbox":
        return <Checkbox />;
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
  const handleDrop = () => {
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
