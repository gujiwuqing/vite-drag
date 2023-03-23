import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useAtom } from "jotai";
import { activeItemIdAtom } from "./model/global";
import "./App.less";
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // change background colour if dragging
  //   background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});
export default function DragableItemView({ id, index, children, isActive }) {
  const [activeItemId, setActiveItemId] = useAtom(activeItemIdAtom);
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveItemId(id);
  };
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={isActive ? "drag-item-active" : "drag-item"}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          onClick={handleClick}
        >
          <div style={{ pointerEvents: "none" }}>{children}</div>
        </div>
      )}
    </Draggable>
  );
}
