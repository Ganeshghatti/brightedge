import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import "./Form.scss";
import Select from "@mui/material/Select";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/base/MenuItem";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

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
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
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
            className="text-6xl font-extrabold lg:text-5xl md:text-5xl"
            style={{ color: "#32355D" }}
          >
            Start your own
            <p className="" style={{ color: "#7F46FF" }}>
              Preschool
            </p>
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
          <div className="flex justify-start w-full gap-4">
            <select
              name="countrycode"
              value={formData.countrycode}
              onChange={handleChange}
              className="w-1/3 h-full z-10 py-4 px-4 flex justify-center rounded bg-white border-1 border-solid border-gray-400 cursor-pointer text-gray-500"
            >
              <option value="">Select country code</option>
              <option value="+91">(+91) India</option>
              <option value="+1">(+1) United States</option>
              <option value="+44">(+44) United Kingdom</option>
            </select>
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
          <p className="font-normal text-base text-center">
            Your email address and mobile number will be safely managed
            according to our &nbsp;
            <br />
            <a
              href="#"
              style={{ color: "#1682FB" }}
              className="font-bold underline"
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
          className="text-6xl font-extrabold md:text-center md:text-5xl"
          style={{ color: "#32355D", padding: "0 15vw" }}
        >
          Endurance<span className="form-numbers-h1-style"> & Success</span>
        </h1>
        <div className="w-full flex justify-around md:gap-6 md:flex-wrap">
          <div className="w-1/6 px-2 flex flex-col justify-around md:w-2/5 md:flex-col-reverse md:items-center">
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
          <div className="w-1/6 px-2 flex flex-col justify-around md:w-2/5  md:flex-col-reverse md:items-center">
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

          <div className="w-1/6 px-2 flex flex-col justify-around md:w-2/5  md:flex-col-reverse md:items-center md:mt-12">
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

          <div className="w-1/6 px-2 flex flex-col justify-around md:w-2/5  md:flex-col-reverse md:justify-end md:items-center md:mt-12">
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
        <img
          src="./Assets/Images/form/icon_5.png"
          className="absolute  mb-96 left-2/3 lg:hidden md:hidden"
          alt=""
        />
        <h1
          className="text-6xl font-extrabold w-1/5 md:text-center lg:w-2/5 md:w-full md:text-5xl"
          style={{ color: "#32355D" }}
        >
          Our Pricing
          <br />
          <span className="form-highlights-h1-style"> Highlights</span>
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
          className="w-1/5 p-8 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full lg:mt-6"
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
          className="w-1/5 p-8 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full lg:mt-6"
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

      <section
        id="form-affiliate"
        className="py-16 gap-12 w-full flex flex-col items-center"
      >
        <h1
          className="text-6xl font-extrabold md:text-center md:text-5xl"
          style={{ color: "#32355D" }}
        >
          Our Affiliate&nbsp;
          <br className="hidden md:block" />
          <span className="form-affiliate-h1-style">Program</span>
        </h1>
        <img
          src="./Assets/Images/form/Video.png"
          className="w-11/12 self-end"
          alt=""
        />
        <div className="flex justify-around items-center md:flex-col">
          <div className="flex flex-col justify-center w-1/4 md:w-11/12">
            <div>
              <p
                style={{ color: "#FF833F" }}
                className="text-4xl font-extrabold text-left md:text-3xl"
              >
                Not an average franchise program.
              </p>
              <p
                style={{ color: "#0B1C39" }}
                className="text-xl font-normal md:text-lg"
              >
                Watch the video for on overview.
              </p>
            </div>
            {/* <img
              src="./Assets/Images/form/affiliateimg.png"
              className="object-contain"
              alt=""
            /> */}
          </div>
          <ul className="flex flex-col w-1/2 list-disc gap-4 md:w-3/4 md:mt-6">
            <li className="text-xl md:text-lg">
              <span className="font-bold" style={{ color: "#FF833F" }}>
                Revolutionary Model:&nbsp;
              </span>
              Redefining the franchise program with a groundbreaking flexible
              approach.
            </li>
            <li className="text-xl md:text-lg">
              <span className="font-bold" style={{ color: "#FF833F" }}>
                Zero Royalties:&nbsp;
              </span>
              Keep all your hard-earned profits without paying any royalties.
            </li>
            <li className="text-xl md:text-lg">
              <span className="font-bold" style={{ color: "#FF833F" }}>
                Franchise Freedom:&nbsp;
              </span>
              Say goodbye to franchise fees and exit fees, putting you in
              control.
            </li>
            <li className="text-xl md:text-lg">
              <span className="font-bold" style={{ color: "#FF833F" }}>
                Simplicity Matters:&nbsp;
              </span>
              A straightforward agreement that makes business. ownership easier.
            </li>
            <li className="text-xl md:text-lg">
              <span className="font-bold" style={{ color: "#FF833F" }}>
                Welcome to the Affiliate Program:&nbsp;
              </span>
              A new era in franchising awaits.
            </li>
          </ul>
        </div>
      </section>

      <section
        id="form-hereisallyouneed"
        className="py-16 gap-12 w-full flex flex-col items-center"
      >
        <h1
          className="text-6xl font-extrabold md:text-center md:text-5xl"
          style={{ color: "#32355D", padding: "0 6vw" }}
        >
          Here’s all&nbsp;<br className="hidden md:block"/>
          <span className="form-hereisallyouneed-h1-style">you need!</span>
        </h1>

        <div className="flex justify-around w-full items-center lg:flex-wrap md:flex-col">
          <div className="form-hereisallyouneed-card1 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 lg:mt-6 md:mt-6">
            <p style={{ color: "#7F46FF" }} className="text-4xl font-bold">
              Investment:
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect width="48" height="48" fill="white" />
              <path
                d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z"
                fill="white"
                stroke="#7F46FF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z"
                fill="white"
                stroke="#7F46FF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
                fill="white"
                stroke="#7F46FF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 16H22C19.7909 16 18 17.7909 18 20C18 22.2091 19.7909 24 22 24H26C28.2091 24 30 25.7909 30 28C30 30.2091 28.2091 32 26 32L19.9998 31.9999"
                stroke="#7F46FF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 16V14M24 32V34"
                stroke="#7F46FF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-2xl font-normal">
              ₹4 Lakhs - ₹10
              <br /> Lakhs
            </p>
          </div>

          <div className="form-hereisallyouneed-card2 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 lg:mt-6 md:mt-6">
            <p style={{ color: "#1682FB" }} className="text-4xl font-bold">
              Space:
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M8 24H24M24 24H40M24 24V40M24 24L24 8"
                stroke="#1682FB"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="0.2 8"
              />
              <path
                d="M38 8H10C8.89543 8 8 8.89543 8 10V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V10C40 8.89543 39.1046 8 38 8Z"
                fill="white"
                stroke="#1682FB"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-2xl font-normal">
              About 1200
              <br /> Sq.ft and above
            </p>
          </div>

          <div className="form-hereisallyouneed-card3 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 lg:mt-6 md:mt-6">
            <p style={{ color: "#F72378" }} className="text-4xl font-bold">
              Passion:
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M7.50984 26.6019C6.55212 24.9446 6 22.9952 6 20.9091C6 14.8842 10.6051 10 16.2857 10C19.3578 10 22.1153 11.4284 24 13.6932C25.8847 11.4284 28.6422 10 31.7143 10C37.3949 10 42 14.8842 42 20.9091C42 22.9952 41.4479 24.9446 40.4902 26.6019C36.2171 34.5497 24 40 24 40C24 40 11.7829 34.5497 7.50984 26.6019Z"
                stroke="#F72378"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-2xl font-normal">
              For early childhood
              <br /> education
            </p>
          </div>
          <div className="form-hereisallyouneed-card4 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 lg:mt-6 md:mt-6">
            <p style={{ color: "#7F46FF" }} className="text-4xl font-bold">
              Focus:
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect width="48" height="48" fill="white" />
              <path
                d="M38 24H42M24 38V42M10 24H6M24 10V6"
                stroke="#FF833F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24Z"
                fill="white"
                stroke="#FF833F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24Z"
                fill="white"
                stroke="#FF833F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-2xl font-normal">
              For
              <br /> entrepreneurship
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
