import { useState } from "react";
import Preview from "./Preview";
import Editor from "./Editor";
import Panel from "./Panel";
import { useAtom } from "jotai";
import { dragTypeAtom } from "./model/global";
import "./App.less";

function App() {
  const [dragType, setDragType] = useAtom(dragTypeAtom);
  const handleDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    setDragType({
      type: target.dataset.type || "",
      name: target.dataset.name || "",
    });
  };

  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (e) => {
    setDragType({
      type: "",
      name: "",
    });
  };
  return (
    <div
      className="App"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Panel />
      <Preview />
      <Editor />
    </div>
  );
}

export default App;
