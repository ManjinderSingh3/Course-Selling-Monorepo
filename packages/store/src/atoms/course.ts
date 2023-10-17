import { atom } from "recoil";

export type Course = {
  _id?: string;
  title: string;
  description: string;
  imageLink: string;
  price: number;
  published: boolean;
};

export const courseState = atom<{ isLoading: boolean; course: null | Course }>({
  key: "courseState",
  default: {
    isLoading: true,
    course: null,
  },
});
