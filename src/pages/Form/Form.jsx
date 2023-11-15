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
        className="flex justify-center w-screen items-center h-screen md:flex-col md:h-auto "
      >
        <div id="form-inputs-background-container"></div>
        <div
          className="w-1/2 flex justify-center flex-col gap-5 md:w-full"
          style={{ padding: "0 6vw" }}
        >
          <h1 className="text-6xl font-extrabold" style={{ color: "#32355D" }}>
            Start your own &nbsp;
            <br className="lg:hidden" />
            <span className="" style={{ color: "#7F46FF" }}>
              Preschool
            </span>
          </h1>
          <p style={{ color: "#0B1C39" }} className="text-2xl font-normal">
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
          <p className="font-normal text-base">
            Your email address and mobile number will be safely managed
            according to our &nbsp;
            <a href="#" style={{ color: "#1682FB" }} className="font-bold">
              Privacy Policy
            </a>
          </p>
        </form>
      </section>

      <section
        id="form-numbers"
        className="w-full flex flex-col items-center justify-center gap-16 py-16"
      >
        <h1
          className="text-6xl font-extrabold md:text-center"
          style={{ color: "#32355D" }}
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
              className="text-7xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              <span className="opacity-20">0</span>16+
            </p>
          </div>
          <div
            className="h-44 w-0.5 lg:hidden"
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
              className="text-7xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              <span className="opacity-20 ">0</span>200+
            </p>
          </div>
          <div
            className="h-44 w-0.5 lg:hidden"
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
              className="text-7xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              35000+
            </p>
          </div>
          <div
            className="h-44 w-0.5 lg:hidden"
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
              className="text-7xl font-extrabold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              <span className="opacity-20">0</span>30+
            </p>
          </div>
        </div>
        <p className="text-3xl font-bold md:text-xl" style={{ color: "#0B1C39" }}>
          and growing...
        </p>
      </section>
    </div>
  );
}
