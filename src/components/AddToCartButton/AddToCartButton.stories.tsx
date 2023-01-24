import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { AddToCartButton } from "./AddToCartButton";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Button",
  component: AddToCartButton,
} as ComponentMeta<typeof AddToCartButton>;

export const Button = (args: Product) => {
  return <AddToCartButton existInCard={false} item={args} />;
};
