import { v4 as uuidv4 } from "uuid";
import { ViewListItem } from "./interface";

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
      loop:true,
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
  } else {
    return {
      id: uuidv4(),
      type,
      name,
      value: "",
    };
  }
};
