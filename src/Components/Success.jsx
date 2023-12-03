import React from "react";
import { Button } from "@nextui-org/react";
import { Helmet } from "react-helmet";

export default function Success() {
  return (
    <section
      id="success"
      className="flex flex-col h-screen w-screen justify-start md:justify-center items-center gap-6"
    >
      <Helmet>
        <title>Form Submission Success | BrightEdge</title>
        <script>
          {`
            gtag("event", "conversion", {
              send_to: "AW-642203851/wf2fCOfyqegYEMuBnbIC",
            });
          `}
        </script>
      </Helmet>
      <img src="./Assets/Images/form/BEMlogo.png" className="w-32" />
      <p
        className="text-6xl md:text-4xl font-bold"
        style={{ color: "#7F46FF" }}
      >
        Thank You!
      </p>
      <p
        className="text-2xl md:text-xl font-bold text-center"
        style={{ color: "#0B1C39" }}
      >
        Your form submission has been confirmed. Check your email box and
        WhatsApp to see our communications
      </p>
      <img src="./Assets/Images/form/success.png" />
      <a href="http://www.brightkidmont.com">
        <Button
          radius="full"
          className="bg-gradient-to-tr text-white shadow-lg px-16 py-5 text-lg md:text-base font-bold md:w-2/5"
          style={{ backgroundColor: "#F72378" }}
        >
          Visit our site
        </Button>
      </a>
    </section>
  );
}
