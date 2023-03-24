import React from "react";
import { Grid } from "react-vant";
import { ShopO } from "@react-vant/icons";

export default function ImageTextNavView(props) {
  const { navList } = props;
  return (
    <div>
      <Grid>
        {navList.map((item) => {
          return <Grid.Item icon={<ShopO />} text={item.text} key={item.id} />;
        })}
      </Grid>
    </div>
  );
}
