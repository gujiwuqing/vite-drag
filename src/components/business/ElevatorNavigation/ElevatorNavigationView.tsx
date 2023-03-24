import React from "react";
import { Tabs } from "react-vant";

const ElevatorNavigationView = (props) => {
  const { tabType, background, color, navList } = props;
  return (
    <div className="demo-tabs">
      <Tabs
        defaultActive={0}
        type={tabType}
        background={background}
        color={color}
      >
        {navList.map((item) => (
          <Tabs.TabPane key={item.id} title={item.text}></Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default ElevatorNavigationView;
