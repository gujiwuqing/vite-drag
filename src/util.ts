import { v4 as uuidv4 } from "uuid";
import { ViewListItem } from "./interface";
import Image1 from "./assets/2a65c4f638004161.jpg!q70.jpg.webp";
import Image2 from "./assets/622c954a56e2b970.jpg!q70.jpg.webp";
import Image3 from "./assets/9e7aca116e9bd23a.jpg!q70.jpg.webp";
import Image4 from "./assets/c19363bc7c393b34.jpg!q70.webp";
import Image5 from "./assets/e4d7b9dc18633b08.jpg!q70.jpg.webp";
import Image6 from "./assets/efb35507276509cd.jpg!q70.webp";

export const handleAddView = (type: string, name: string): ViewListItem => {
  console.log("handleAddView", type, name);
  if (type == "title") {
    return {
      id: uuidv4(),
      type,
      value: "标题文本",
      fontSize: 12,
      color: "#000",
      background: "#fff",
      name,
    };
  } else if (type == "carousel") {
    return {
      id: uuidv4(),
      type,
      loop: true,
      name,
      imgList: [
        {
          url: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
          id: uuidv4(),
        },
        {
          url: "https://t7.baidu.com/it/u=2397542458,3133539061&fm=193&f=GIF",
          id: uuidv4(),
        },
        {
          url: "https://t7.baidu.com/it/u=2397542458,3133539061&fm=193&f=GIF",
          id: uuidv4(),
        },
        {
          url: "https://t7.baidu.com/it/u=2397542458,3133539061&fm=193&f=GIF",
          id: uuidv4(),
        },
        {
          url: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
          id: uuidv4(),
        },
      ],
    };
  } else if (type == "rich_text") {
    return {
      id: uuidv4(),
      type,
      value: "这是一个富文本",
      placeholder: "请输入内容",
      name,
    };
  } else if (type == "notice") {
    return {
      id: uuidv4(),
      type,
      text: "这是一条默认公告",
      color: "#3f45ff",
      background: "#edeeff",
      scrollable: true,
      name,
    };
  } else if (type == "image_text_nav") {
    return {
      id: uuidv4(),
      type,
      name,
      tabType: "image_text",
      background: "#fff",
      color: "#000",
      navList: [
        {
          icon: "iconshouye1",
          text: "导航一",
          id: uuidv4(),
        },
        {
          icon: "iconshouye1",
          text: "导航二",
          id: uuidv4(),
        },
        {
          icon: "iconshouye1",
          text: "导航三",
          id: uuidv4(),
        },
        {
          icon: "iconshouye1",
          text: "导航四",
          id: uuidv4(),
        },
      ],
    };
  } else if (type == "elevator_navigation") {
    return {
      id: uuidv4(),
      type,
      name,
      tabType: "line",
      background: "#fff",
      color: "#3f45ff",
      navList: [
        {
          text: "标签1",
          id: uuidv4(),
        },
        {
          text: "标签2",
          id: uuidv4(),
        },
        {
          text: "标签3",
          id: uuidv4(),
        },
      ],
    };
  } else if (type == "search") {
    return {
      id: uuidv4(),
      type,
      name,
      placeholder: "请输入内容",
      shape: "square",
      background: "#fff",
      color: "#323232",
    };
  } else if (type == "goods") {
    return {
      id: uuidv4(),
      type,
      name,
      goodsList: [
        {
          id: uuidv4(),
          price: 2799,
          title:
            " OPPO 一加 Ace 2 12GB+256GB 冰河蓝 满血版骁龙®8+旗舰平台 1.5K灵犀触控屏 超帧超画引擎 5G游戏电竞手机",
          url: Image1,
        },
        {
          id: uuidv4(),
          price: 2100,
          linePrice: 1999,
          title:
            "Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池  6GB +128GB 神秘黑境 智能手机 小米 红米",
          url: Image2,
        },
        {
          id: uuidv4(),
          price: 2799,
          title:
            "华为智选 Hi nova 9z 5G全网通手机 6.67英寸120Hz原彩屏hinova 6400万像素超清摄影 66W快充8GB+128GB亮黑色",
          url: Image3,
        },
        {
          id: uuidv4(),
          price: 2799,
          title:
            "OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞屏 6400万三摄 拍照5G手机oppok9x",
          url: Image4,
        },
        {
          id: uuidv4(),
          price: 2799,
          title:
            " 荣耀X40 120Hz OLED硬核曲屏 5100mAh 快充大电池 7.9mm轻薄设计 5G手机 8GB+128GB 彩云追月",
          url: Image5,
        },
      ],
    };
  } else {
    return {
      id: uuidv4(),
      type,
      name,
      value: "",
    };
  }
};
