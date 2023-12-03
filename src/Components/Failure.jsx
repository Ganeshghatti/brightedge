import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Failure() {
  const handlescrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section
      id="failure"
      className="flex flex-col h-screen w-screen justify-start md:justify-center items-center gap-6"
    >
      <Helmet>
        <title>Form Submission Failed | BrightEdge</title>
      </Helmet>
      <img src="./Assets/Images/form/BEMlogo.png" className="w-32" />
      <p className="text-6xl md:text-4xl font-bold" style={{ color: "#F44" }}>
        Oops!
      </p>
      <p
        className="text-2xl md:text-xl font-bold text-center"
        style={{ color: "#0B1C39" }}
      >
        Sorry, there was some error in submitting the form. Please fill the form
        and submit again.
      </p>
      <img src="./Assets/Images/form/failure.png" />
      <Button
        radius="full"
        className="bg-gradient-to-tr text-white shadow-lg px-16 py-5 text-lg  md:text-base font-bold md:w-2/5"
        style={{ backgroundColor: "#F72378" }}
        onClick={handlescrolltotop}
      >
        <Link to="/"> Fill form again</Link>
      </Button>
    </section>
  );
}
