import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { Review } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Review",
  component: Review,
} as ComponentMeta<typeof Review>;

export const ReviewComponent = ({ rating }: Product) => (
  <Review count={rating.count} />
);
ReviewComponent.storyName = "Review";
