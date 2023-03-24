export type TitleDTO = {
  id: string;
  type: string;
  value: string;
  fontSize: number | string;
  color: string;
  background: string;
  name: string;
};

export type CarouselDTO = {
  id: string;
  type: string;
  value: string;
  name: string;
};

type navItemDTO = {
  id: string;
  icon?: string;
  text: string;
};

export type ImageTextNavDTO = {
  id: string;
  type: string;
  name: string;
  tabType: string;
  background: string;
  color: string;
  navList: navItemDTO[];
};

export type ElevatorNavigationDTO = {
  id: string;
  type: string;
  name: string;
  tabType: string;
  background: string;
  color: string;
  navList: navItemDTO[];
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
