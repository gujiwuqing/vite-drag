import { Grid } from "react-vant";
import { ImageTextNavDTO } from "../../../interface";
import Svg from "../../common/Svg";

export default function ImageTextNavView(props: ImageTextNavDTO) {
  const { navList } = props;
  return (
    <div>
      <Grid>
        {navList.map((item) => {
          return (
            <Grid.Item
              icon={<Svg name={item.icon} />}
              text={item.text}
              key={item.id}
            />
          );
        })}
      </Grid>
    </div>
  );
}
