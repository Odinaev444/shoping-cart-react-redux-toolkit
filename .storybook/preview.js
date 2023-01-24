import React from "react";
import * as nextImage from "next/image";
import { addDecorator } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../src/store";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

addDecorator(withProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// The default value of the cart item to all stories
export const args = {
  id: 1,
  title: "Item 1",
  price: 155,
  category: "Teck",
  image: "https://picsum.photos/id/237/220/220",
  rating: {
    rate: 5,
    count: 332,
  },
};
