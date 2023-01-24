import { ComponentMeta } from "@storybook/react";
import { Product } from "../../models/Product";
import { Photo } from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cart/Photo",
  component: Photo,
} as ComponentMeta<typeof Photo>;

export const Image = ({ image }: Product) => <Photo isHit imageUrl={image} />;
Image.storyName = "Photo";
