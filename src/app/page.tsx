import { Metadata } from "next";
import { Fragment } from "react";

import React from "react";
import Content from "./Content";
export const metadata: Metadata = {
  title: "Dealls | Products",
  description: "Products page of Dealls Dashboard",
};

const Home = () => {
  return (
    <Fragment>
      <Content />
    </Fragment>
  );
};

export default Home;
