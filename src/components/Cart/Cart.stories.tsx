import { ComponentMeta } from "@storybook/react";
import { Cart } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Backet",
  component: Cart,
} as ComponentMeta<typeof Cart>;

export const CartBacket = () => <Cart />;
CartBacket.storyName = "Backet";
