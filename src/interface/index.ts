export type TitleDTO = {
  id: string;
  type: string;
  value: string;
  fontSize: number | string;
  color: string;
  background: string;
  name: string;
};

type imgItem = {
  id: string;
  url: string;
};

export type CarouselDTO = {
  id: string;
  type: string;
  loop: boolean;
  name: string;
  imgList: imgItem[];
  autoplay?: number | boolean;
};

interface NavItemDTO {
  id: string;
  text: string;
}

interface ImageTextNavItemDTO extends NavItemDTO {
  icon: string;
}

export type ImageTextNavDTO = {
  id: string;
  type: string;
  name: string;
  tabType: string;
  background: string;
  color: string;
  navList: ImageTextNavItemDTO[];
};

export type ElevatorNavigationDTO = {
  id: string;
  type: string;
  name: string;
  tabType: string;
  background: string;
  color: string;
  navList: NavItemDTO[];
};

export type SearchDTO = {
  id: string;
  type: string;
  name: string;
  color: string;
  background: string;
  shape: string;
  placeholder: string;
};
export type RichDTO = {
  id: string;
  type: string;
  name: string;
  value: string;
};

export type NoticeDTO = {
  id: string;
  type: string;
  name: string;
  text: string;
  color: string;
  background: string;
  scrollable: boolean;
};

export type ViewListItem =
  | TitleDTO
  | CarouselDTO
  | ImageTextNavDTO
  | ElevatorNavigationDTO
  | SearchDTO
  | NoticeDTO
  | RichDTO;
