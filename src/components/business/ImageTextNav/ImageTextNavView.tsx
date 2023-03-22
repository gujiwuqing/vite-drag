import React from "react";
import { Grid } from "react-vant";
import { ShopO } from "@react-vant/icons";

export default function ImageTextNavView() {
  return (
    <div>
      <Grid>
        <Grid.Item icon={<ShopO />} text="文字" />
        <Grid.Item icon={<ShopO />} text="文字" />
        <Grid.Item icon={<ShopO />} text="文字" />
        <Grid.Item icon={<ShopO />} text="文字" />
      </Grid>
    </div>
  );
}
