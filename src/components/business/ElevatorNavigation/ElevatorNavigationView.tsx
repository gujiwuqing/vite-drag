import React from "react";
import { Tabs } from "react-vant";

const items = Array.from({ length: 3 }, (_, i) => i + 1);

const ElevatorNavigationView = () => {
  return (
    <div className="demo-tabs">
      <Tabs defaultActive={2}>
        {items.map((item) => (
          <Tabs.TabPane key={item} title={`标签${item}`}></Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default ElevatorNavigationView;
