import React from "react";
import { useAtom } from "jotai";
import { listAtom, activeItemIdAtom } from "./model/global";
import { Input, Radio, Checkbox } from "antd";
import DragableItemView from "./DragableItemView";
import BusinessInputView from "./components/business/BusinessInput/BusinessInputView";
import BusinessRadioView from "./components/business/BusinessRadio/BusinessRadioView";
import CarouselView from "./components/business/Carousel/CarouselView";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
