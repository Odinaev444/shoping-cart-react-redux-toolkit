import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { Price } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Price",
  component: Price,
} as ComponentMeta<typeof Price>;

export const PriceComponent = ({ price }: Product) => <Price value={price} />;
PriceComponent.storyName = "Price";
