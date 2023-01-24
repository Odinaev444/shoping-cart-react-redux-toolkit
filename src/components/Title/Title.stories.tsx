import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { Title } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const TitleComponent = ({ title }: Product) => <Title text={title} />;
TitleComponent.storyName = "Title";
