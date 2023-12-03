import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function PageNotFound() {
  return (
    <section className="flex flex-col w-screen h-screen justify-start items-center gap-3 md:justify-center">
      <Helmet>
        <title>404 Page not Found | BrightEdge</title>
      </Helmet>
      <img src="./Assets/Images/form/notfound.jpg" className="w-1/3 md:w-3/4" />
      <h1 className="text-5xl md:text-4xl font-bold">404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button
        radius="full"
        className="bg-gradient-to-tr text-white shadow-lg px-16 py-5 text-lg md:text-base font-bold md:w-2/5"
        style={{ backgroundColor: "#F72378" }}
      >
        Visit our site
      </Button>
    </section>
  );
}

export default PageNotFound;
