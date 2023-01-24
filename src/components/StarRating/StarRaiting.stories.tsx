import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { StarRating } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/StarRating",
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

export const Rating = ({ rating }: Product) => (
  <StarRating count={rating.rate} />
);
Rating.storyName = "StarRating";
