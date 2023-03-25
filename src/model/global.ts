import { atom } from "jotai";
import { ViewListItem } from "../interface";

export const listAtom = atom<ViewListItem[]>([]);
export const activeItemIdAtom = atom("");
export const dragTypeAtom = atom<{
  type: ViewListItem["type"];
  name: string;
}>({
  type: "",
  name: "",
});
