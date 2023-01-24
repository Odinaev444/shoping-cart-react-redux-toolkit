import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { FavoriteButton } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/FavoriteButton",
  component: FavoriteButton,
} as ComponentMeta<typeof FavoriteButton>;

export const Favorite = (args: Product) => (
  <FavoriteButton existInFavorite item={args} />
);
Favorite.storyName = "FavoriteButton";
