import React, { ReactElement } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

interface Props {
  children: any;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
