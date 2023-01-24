import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import Card from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardBox = (args: Product) => <Card item={args} />;
CardBox.storyName = "Card";
