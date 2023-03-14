import { useState } from "react";
import reactLogo from "./assets/react.svg";
import View from "./View";
import ToolBox from "./ToolBox";
import Panel from "./Panel";
import "./App.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Panel />
      <View />
      <ToolBox />
    </div>
  );
}

export default App;
