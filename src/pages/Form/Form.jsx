import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import "./Form.scss";
import Select from "react-select";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TextField from "@mui/material/TextField";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    countrycode: "",
    phoneNumber: "",
    email: "",
    address: "",
    textarea: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const options = [
    { label: "(+91)India", value: "+91" },
    { label: "(+1)United States", value: "+1" },
    { label: "(+44)United Kingdom", value: "+44" },
  ];

  return (
    <div
      id="form"
      className="flex flex-col justify-center w-screen items-center"
    >
      <section
        id="form-inputs"
        className="flex justify-center w-screen items-center h-screen md:flex-col md:h-auto"
      >
        <div id="form-inputs-background-container"></div>
        <div
          className="w-1/2 flex justify-center flex-col gap-5 md:w-full"
          style={{ padding: "0 6vw" }}
        >
          <h1
            className="text-5xl font-extrabold"
            style={{ color: "#32355D" }}
          >
            Start your own &nbsp;
            <br className="lg:hidden md:hidden" />
            <span className="" style={{ color: "#7F46FF" }}>
              Preschool
            </span>
          </h1>
          <p
            style={{ color: "#0B1C39" }}
            className="text-2xl font-normal md:text-xl"
          >
            <span className="font-extrabold">
              Become the #1 in your area. Just fill out the form and we will get
              you started.
            </span>
            <br />
            <br />
            Partner with us for a preschool journey filled with guidance,
            academics, marketing, and premium materials, ensuring your success
            from start to finish.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-1/2 px-10 flex flex-col justify-around items-center gap-4 md:w-full md:mt-8"
          style={{ padding: "0 6vw" }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-start w-full">
            <Select
              defaultValue={formData.countrycode}
              onChange={handleChange}
              options={options}
              className="w-1/4 h-full z-10"
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              label="phone number"
              onChange={handleChange}
              className="flex-1"
            />
          </div>

          <TextField
            id="outlined-basic"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            label="email"
            onChange={handleChange}
            className="w-full"
          />

          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="address"
            value={formData.address}
            label="Postal/Area PIN code"
            onChange={handleChange}
            className="w-full"
          />

          <TextField
            id="filled-multiline-static"
            variant="outlined"
            name="textarea"
            multiline
            value={formData.textarea}
            label="Type your message here...."
            onChange={handleChange}
            className="w-full"
            rows={4}
          />
          <Button
            radius="full"
            className="bg-gradient-to-tr text-white shadow-lg px-12 py-6 text-lg font-bold"
            style={{ backgroundColor: "#F72378" }}
          >
            Enquire Now!
          </Button>
          <p className="font-normal text-base md:text-center">
            Your email address and mobile number will be safely managed
            according to our &nbsp;
            <a
              href="#"
              style={{ color: "#1682FB" }}
              className="font-bold unerline"
            >
              Privacy Policy
            </a>
          </p>
        </form>
      </section>

      <section
        id="form-numbers"
        className="w-full flex flex-col items-center justify-center gap-16 py-16 px-12 "
      >
        <h1
          className="text-5xl font-extrabold md:text-center"
          style={{ color: "#32355D", padding: "0 15vw" }}
        >
          Endurance & Success
        </h1>
        <div className="w-full flex justify-around md:flex-wrap">
          <div className="w-1/6 px-2 flex flex-col justify-around md:w-1/2 md:flex-col-reverse md:items-center">
            <p
              className="text-3xl md:text-xl font-bold md:text-center"
              style={{ color: "#0B1C39" }}
            >
              Years of Expertise
            </p>
            <p
              className="text-7xl lg:text-6xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              <span className="opacity-20">0</span>16+
            </p>
          </div>
          <div
            className="h-44 w-0.5 lg:hidden md:hidden"
            style={{ backgroundColor: "#0B1C39" }}
          ></div>
          <div className="w-1/6 px-2 flex flex-col justify-around md:w-1/2  md:flex-col-reverse md:items-center">
            <p
              className="text-3xl font-bold md:text-center md:text-xl"
              style={{ color: "#0B1C39" }}
            >
              School Set-ups
            </p>
            <p
              className="text-7xl lg:text-6xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              <span className="opacity-20 ">0</span>200+
            </p>
          </div>
          <div
            className="h-44 w-0.5 lg:hidden md:hidden"
            style={{ backgroundColor: "#0B1C39" }}
          ></div>

          <div className="w-1/6 px-2 flex flex-col justify-around md:w-1/2  md:flex-col-reverse md:items-center md:mt-12">
            <p
              className="text-3xl font-bold md:text-center md:text-xl"
              style={{ color: "#0B1C39" }}
            >
              Children Developed
            </p>
            <p
              className="text-7xl lg:text-6xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              35000+
            </p>
          </div>
          <div
            className="h-44 w-0.5 lg:hidden md:hidden"
            style={{ backgroundColor: "#0B1C39" }}
          ></div>

          <div className="w-1/6 px-2 flex flex-col justify-around md:w-1/2  md:flex-col-reverse md:items-center md:mt-12">
            <p
              className="text-3xl font-bold md:text-center md:text-xl"
              style={{ color: "#0B1C39" }}
            >
              Cities
            </p>
            <p
              className="text-7xl lg:text-6xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              <span className="opacity-20">0</span>30+
            </p>
          </div>
        </div>
        <p
          className="text-3xl font-bold md:text-xl"
          style={{ color: "#0B1C39" }}
        >
          and growing...
        </p>
      </section>

      <section
        id="form-highlights"
        className="flex w-11/12 justify-around items-center md:flex-col py-16 lg:flex-wrap md:gap-8"
      >
        <h1
          className="text-5xl font-extrabold w-1/5 md:text-center lg:w-2/5 md:w-full"
          style={{ color: "#32355D" }}
        >
          Our Pricing
          <br /> Highlights
        </h1>
        <div
          className="w-1/5 p-8 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full"
          style={{
            backgroundColor: "#D0E6FE",
            borderRadius: "24px",
            border: " 1px solid  #1682FB",
          }}
        >
          <p className="text-2xl font-normal">New Preschool Packages:</p>
          <p
            className="text-3xl font-normal 2xl:text-2xl"
            style={{ color: "#0B1C39" }}
          >
            Starts at
            <br />
            <span className="font-bold" style={{ color: "#32355D" }}>
              ₹3.50 Lakhs only
            </span>
          </p>
          <p
            className="flex font-bold text-xl underline items-center"
            style={{ color: "#F72378" }}
          >
            Let’s Discuss
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M3.6665 12H21.6665M21.6665 12L15.6665 6M21.6665 12L15.6665 18"
                stroke="#F72378"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>

        <div
          className="w-1/5 p-8 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full"
          style={{
            backgroundColor: "#FEFDDE ",
            borderRadius: "24px",
            border: "1px solid #FBF55A",
          }}
        >
          <p className="text-2xl font-normal">
            Existing Preschool Support Packages:
          </p>
          <p
            className="text-3xl font-normal 2xl:text-2xl"
            style={{ color: "#0B1C39" }}
          >
            Starts at
            <br />
            <span className="font-bold" style={{ color: "#32355D" }}>
              ₹20,000 p.a only
            </span>
          </p>
          <p
            className="flex font-bold text-xl underline items-center"
            style={{ color: "#F72378" }}
          >
            Let’s Discuss
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M3.6665 12H21.6665M21.6665 12L15.6665 6M21.6665 12L15.6665 18"
                stroke="#F72378"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>

        <div
          className="w-1/5 p-8 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full"
          style={{
            backgroundColor: "#E5DAFF",
            borderRadius: "24px",
            border: " 1px solid  #7F46FF",
          }}
        >
          <p className="text-2xl font-normal">
            Dedicated B2B Purchasing portal:
          </p>
          <p
            className="text-3xl font-bold 2xl:text-2xl"
            style={{ color: "#0B1C39" }}
          >
            Most Economical
            <br />
            <span className="font-normal" style={{ color: "#32355D" }}>
              for Resource
            </span>
          </p>
          <p
            className="flex font-bold text-xl underline items-center"
            style={{ color: "#F72378" }}
          >
            Let’s Discuss
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M3.6665 12H21.6665M21.6665 12L15.6665 6M21.6665 12L15.6665 18"
                stroke="#F72378"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
      </section>
    </div>
  );
}
