import React, { useState } from "react";
import { Button, message } from "antd";
import ComImageSelect from "../../common/ComImageSelect";
import Svg from "../../common/Svg";
import { CarouselDTO } from "../../../interface";
import { listAtom } from "../../../model/global";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import ComSwitch from "../../common/ComSwitch";

export default function CarouselEdit(props: CarouselDTO) {
  const { imgList, id, loop } = props;
  const [list, setList] = useAtom(listAtom);
  const [visible, setVisible] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const handleChange = (params: any) => {
    const newArr: any[] = list.map((item: any) => {
      if (item.id == id) {
        return { ...item, ...params };
      } else {
        return item;
      }
    });
    setList(newArr);
  };

  /**
   * 新增导航项
   * @returns
   */

  const handleAddItem = () => {
    if (imgList.length == 8) return message.error("最多可添加8条导航");
    const newArr: any[] = list.map((item: any) => {
      if (item.id == id) {
        return {
          ...item,
          imgList: [
            ...imgList,
            {
              url: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
              id: uuidv4(),
            },
          ],
        };
      } else {
        return item;
      }
    });
    setList(newArr);
  };

  /**
   * 修改导航项
   * @param id
   * @param type
   * @param value
   */
  const handleChangeItem = (id: string, value: string) => {
    const item = imgList.find((t: { id: string }) => t.id == id);
    item.url = value;
    handleChange({ imgList });
  };

  /**
   * 删除导航项
   * @param id
   */
  const handleDeleteItem = (id: string) => {
    const newArr = imgList.filter((t) => t.id !== id);
    handleChange({ imgList: newArr });
  };
  return (
    <div>
      <div className="com-title">图文广告</div>
      <ComSwitch
        label="是否循环播放"
        defaultChecked={loop}
        onChange={(loop: boolean) => {
          handleChange({ loop });
        }}
      />
      <div className="deco-control-group--bg-colored deco-control-group">
        {imgList.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center border-solid bg-white mt-3 mb-3 p-3 mr-4 relative"
            >
              <img src={item.url} alt="" style={{ width: "70%" }} />
              <Button
                onClick={() => {
                  setVisible(true);
                  setCurrentId(item.id);
                }}
                type="primary"
              >
                选择图片
              </Button>
              <div
                className="absolute right-0 top-0 cursor-pointer"
                onClick={() => {
                  handleDeleteItem(item.id);
                }}
              >
                <Svg name="iconclose" />
              </div>
            </div>
          );
        })}
        <Button
          onClick={handleAddItem}
          type="primary"
          className="mt-2 h-10"
          block
        >
          添加图文广告
        </Button>
      </div>
      <div>
        <ComImageSelect
          visible={visible}
          defaultValue={imgList.find((t) => t.id == currentId)?.url}
          handleOk={(value: string) => {
            setVisible(false);
            handleChangeItem(currentId, value);
            setCurrentId("");
          }}
          handleCancel={() => {
            setVisible(false);
            setCurrentId("");
          }}
        />
      </div>
    </div>
  );
}
