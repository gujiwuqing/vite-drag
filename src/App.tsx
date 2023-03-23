import { useState } from "react";
import Preview from "./Preview";
import Editor from "./Editor";
import Panel from "./Panel";
import "./App.less";

function App() {
  return (
    <div className="App">
      <Panel />
      <Preview />
      <Editor />
    </div>
  );
}

export default App;
