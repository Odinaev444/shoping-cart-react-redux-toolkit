import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { Category } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Category",
  component: Category,
} as ComponentMeta<typeof Category>;

export const CategoryText = ({ category }: Product) => (
  <Category name={category} />
);
CategoryText.storyName = "Category";
