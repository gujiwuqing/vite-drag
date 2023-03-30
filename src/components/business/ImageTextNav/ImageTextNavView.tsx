import { Grid } from "react-vant";
import { ImageTextNavDTO } from "../../../interface";
import Svg from "../../common/Svg";

export default function ImageTextNavView(props: ImageTextNavDTO) {
  const { navList, tabType, color } = props;
  console.log("props", props);
  return (
    <div>
      <Grid>
        {navList.map((item) => {
          return (
            <Grid.Item
              icon={
                tabType == "image_text" ? <Svg name={item.icon} /> : undefined
              }
              style={{ "--rv-grid-item-text-color": color }}
              text={item.text}
              key={item.id}
            />
          );
        })}
      </Grid>
    </div>
  );
}
