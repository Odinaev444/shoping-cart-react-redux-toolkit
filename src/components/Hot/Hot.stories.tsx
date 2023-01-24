import { ComponentMeta } from "@storybook/react";
import { Hot } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Hot",
  component: Hot,
} as ComponentMeta<typeof Hot>;

export const HotBadge = () => <Hot />;
HotBadge.storyName = "Hot";
