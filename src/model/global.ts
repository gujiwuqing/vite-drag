import { atom } from "jotai";
import { ViewListItem } from "../interface";

export const listAtom = atom<ViewListItem[]>([]);
export const activeItemIdAtom = atom("");
