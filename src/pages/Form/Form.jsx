import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import "./Form.scss";
import Select from "@mui/material/Select";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TextField from "@mui/material/TextField";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import CustomLeftArrow from "../../Components/CustomLeftArrow";
import CustomRightArrow from "../../Components/CustomRightArrow";

const images = [
  {
    title: "Best Student Hamper: ",
    imgPath: "./Assets/Images/form/image1carousel.png",
    description:
      "Amaze parents and enrich kids. We offer a world-class Smart book series, complemented by an anytime-anywhere Teacher, a Craft Kit, and a Multiple Intelligence portal for kids.",
  },
  {
    title: "Best Student Hamper: ",
    imgPath: "./Assets/Images/form/image2carousel.png",
    description:
      "Amaze parents and enrich kids. We offer a world-class Smart book series, complemented by an anytime-anywhere Teacher, a Craft Kit, and a Multiple Intelligence portal for kids.",
  },
  {
    title: "Best Student Hamper: ",
    imgPath: "./Assets/Images/form/image3carousel.png",
    description:
      "Amaze parents and enrich kids. We offer a world-class Smart book series, complemented by an anytime-anywhere Teacher, a Craft Kit, and a Multiple Intelligence portal for kids.",
  },
  {
    title: "Best Student Hamper: ",
    imgPath: "./Assets/Images/form/image4carousel.png",
    description:
      "Amaze parents and enrich kids. We offer a world-class Smart book series, complemented by an anytime-anywhere Teacher, a Craft Kit, and a Multiple Intelligence portal for kids.",
  },
  {
    title: "Best Student Hamper: ",
    imgPath: "./Assets/Images/form/image5carousel.png",
    description:
      "Amaze parents and enrich kids. We offer a world-class Smart book series, complemented by an anytime-anywhere Teacher, a Craft Kit, and a Multiple Intelligence portal for kids.",
  },
];

const carouseldata = {
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1100, min: 564 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const testimonailsdata = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export default function Form() {
  const [formData, setFormData] = useState({
    FIRST_NAME: "",
    SMS__COUNTRY_CODE: "",
    SMS: "",
    EMAIL: "",
    LOCATION: "",
    YOUR_MESSAGE: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
            className="text-6xl font-extrabold lg:text-5xl md:text-4xl"
            style={{ color: "#32355D" }}
          >
            Make an impactful
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
          className="w-1/2 px-10 flex flex-col justify-around items-center gap-4 md:w-full md:mt-8"
          style={{ padding: "0 6vw" }}
          id="sib-form"
          method="POST"
          action="https://1763470a.sibforms.com/serve/MUIFADrGC7a8vWRbOQRe8IAdirv7k0lMfKThze9jkNsB3Z56ijxoMCxy4baO_I3txXqsicWnX6CZBbxxHHziLPd6NzfuYpubbNQ38mIuZHC4rGb0ExlwNDHFVu8DPpWMSlSuUSMBY_HqjkdDmX6gbyjWPIpookoJW5dPnuFAS-h9-d9i8r_wjPyrNqT7IEiPARQjLgKnb2yEZ7PS"
          data-type="subscription"
          // onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="FIRST_NAME"
            label="Name"
            value={formData.FIRST_NAME}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-start w-full gap-4">
            <select
              name="SMS__COUNTRY_CODE"
              value={formData.SMS__COUNTRY_CODE}
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
              name="SMS"
              value={formData.SMS}
              label="phone number"
              onChange={handleChange}
              className="flex-1"
            />
          </div>

          <TextField
            id="outlined-basic"
            variant="outlined"
            type="email"
            name="EMAIL"
            value={formData.EMAIL}
            label="email"
            onChange={handleChange}
            className="w-full"
          />

          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="LOCATION"
            value={formData.LOCATION}
            label="Postal/Area PIN code"
            onChange={handleChange}
            className="w-full"
          />
          <div className="border-1 border-solid border-gray-400 p-6 rounded-lg w-full">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Query</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="YOUR_MESSAGE"
              >
                <FormControlLabel
                  value="Open a new preschool"
                  control={<Radio />}
                  label="Open a new preschool"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="Elevate my preschool"
                  control={<Radio />}
                  label="Elevate my preschool"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="Need Preschool smartbooks"
                  control={<Radio />}
                  label="Need Preschool smartbooks"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="Need Preschol Materials"
                  control={<Radio />}
                  label="Need Preschol Materials"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  onChange={handleChange}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Button
            radius="full"
            className="bg-gradient-to-tr text-white shadow-lg px-12 py-6 text-lg font-bold"
            style={{ backgroundColor: "#F72378" }}
            type="submit"
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
          className="text-6xl font-extrabold md:text-center md:text-4xl"
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
          className="text-6xl font-extrabold w-1/5 md:text-center lg:w-2/5 md:w-full md:text-4xl"
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
          <p className="text-2xl font-normal">Opening new Preschool:</p>
          <p
            className="text-3xl font-normal 2xl:text-2xl"
            style={{ color: "#0B1C39" }}
          >
            Package starts at
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
            <img
              src="./Assets/Images/form/icon_8.png-removebg-preview.png"
              alt=""
              className="md:hidden"
            />
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
          <p className="text-2xl font-normal">Elevating Exsisting Preschool:</p>
          <p
            className="text-3xl font-normal 2xl:text-2xl"
            style={{ color: "#0B1C39" }}
          >
            Resources at <br />
            <span className="font-bold" style={{ color: "#32355D" }}>
              Unbeatable Prices
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
          className="text-6xl font-extrabold md:text-center md:text-4xl"
          style={{ color: "#32355D" }}
        >
          Our Affiliate&nbsp;
          <br className="hidden md:block" />
          <span className="form-affiliate-h1-style">Program</span>
        </h1>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/645805338?h=7d0abb1ae3"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div className="flex justify-around items-start md:flex-col form-affiliate-cloud-div">
          <div className="flex flex-col justify-start w-1/4 md:w-11/12">
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
        id="form-testimonials"
        className="py-16 gap-10 w-11/12 flex flex-col items-center"
      >
        <div className="form-testimonials-smallcloud-div">
          <p
            className="text-center text-3xl font-bold md:text-xl"
            style={{ color: "rgba(50, 53, 93, 0.5)", padding: "0 10vw" }}
          >
            Testimonials
          </p>
          <h1
            className="text-6xl font-extrabold md:text-center md:text-4xl"
            style={{ color: "#32355D" }}
          >
            Don’t take
            <span className="form-testimonials-h1-style"> our word</span>
          </h1>
        </div>
        <div className="w-full h-auto">
          <Carousel
            responsive={testimonailsdata}
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            customTransition="all 5"
            transitionDuration={500}
            dotListClass="custom-dot-list-style"
            focusOnSelect={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <div
              className="w-11/12 h-64 md:h-auto flex justify-between md:flex-col md:w-11/12 rounded mr-4"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <img
                src="./Assets/Images/form/tina.jpg"
                className="w-64 h-64 object-cover md:w-full"
                alt=""
              />
              <div
                className="flex-1 flex-col items-start gap-1.5 p-6"
                style={{ backgroundColor: "rgba(22, 130, 251, 0.20)" }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Wissen Mont Preschool, Madurai
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Tina Prasanth  
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base overflow-scroll"
                >
                  Bright Edu Mont provided the best teachers' training, enabling
                  practical learning for children. Grateful for their support in
                  building my centre. Education, a self-organizing work, is
                  enhanced by their academic support, contributing to the
                  success of my centre.
                </p>
              </div>
            </div>
            <div
              className="w-11/12 h-64 flex md:h-auto justify-between md:flex-col md:w-11/12 rounded mr-4"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <img
                src="./Assets/Images/form/sher.jpg"
                className="w-64 h-64 object-cover md:w-full"
                alt=""
              />
              <div
                className="flex-1 flex-col items-start gap-1.5 p-6"
                style={{ backgroundColor: "rgba(22, 130, 251, 0.20)" }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Sunrise Valley School, Haryana
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Sher Singh  
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base overflow-scroll"
                >
                  Thrilled with excellent academic support, online training, and
                  strong Montessori resources from Bright Kids Bangalore.
                  Parents love the curriculum and monthly activity guidelines.
                  Grateful for Bright Kids' strong and excellent support.
                </p>
              </div>
            </div>
            <div
              className="w-11/12 h-64 flex md:h-auto justify-between md:flex-col md:w-11/12 rounded mr-4"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <img
                src="./Assets/Images/form/anupama.jpg"
                className="w-64 h-64 object-cover md:w-full"
                alt=""
              />
              <div
                className="flex-1 flex-col items-start gap-1.5 p-6"
                style={{ backgroundColor: "rgba(22, 130, 251, 0.20)" }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Bright Kid Montessori, Jakkur, Bangalore
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Anupama Sengupta
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base overflow-scroll"
                >
                  Proud franchisee of Bright Kid Montessori House. Owning a
                  Bright kid School has been enriching. Very happy with the
                  support and quality of materials. Our commitment to excellence
                  in education is evident in our vibrant learning environment.
                  Grateful to Susmita Ma'am for the franchise opportunity.
                  Excited to contribute to the success of Bright Kid Montessori
                  House. Thank you!
                </p>
              </div>
            </div>
            <div
              className="w-11/12 h-64 flex md:h-auto justify-between md:flex-col md:w-11/12 rounded mr-4"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <img
                src="./Assets/Images/form/shweta.jpg"
                className="w-64 h-64 object-cover md:w-full"
                alt=""
              />
              <div
                className="flex-1 flex-col items-start gap-1.5 p-6 md:w-full  overflow-scroll"
                style={{ backgroundColor: "rgba(22, 130, 251, 0.20)" }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Bright Kid Montessori Horamavu, Bangalore{" "}
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Shweta 
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base"
                >
                  Leading the successful Hormavu Center since 2012. Our Bright
                  Kit Academy and extracurricular activities ensure holistic
                  child development. Bright start, right start - our motto for
                  creating a better world. We follow the child, preparing the
                  environment in Horamavu. Grateful to our team, partners Mr.
                  Prasanta Sanyal and Mrs. Susmita Sanyal for support. Thanks to
                  all for making my dream a success. Continuous support is
                  appreciated. Good luck!
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section
        id="form-hereisallyouneed"
        className="py-16 gap-12 w-11/12 flex flex-col items-center"
      >
        <p
          className="text-center text-3xl font-bold md:text-xl"
          style={{ color: "rgba(50, 53, 93, 0.5)", padding: "0 10vw" }}
        >
          Opening a New Preschool:
        </p>
        <h1
          className="text-6xl font-extrabold md:text-center md:text-4xl"
          style={{ color: "#32355D", padding: "0 6vw" }}
        >
          Here’s all&nbsp;
          <br className="hidden md:block" />
          <span className="form-hereisallyouneed-h1-style">you need!</span>
        </h1>

        <div className="flex justify-around w-full items-center lg:flex-wrap md:flex-col">
          <div className="form-hereisallyouneed-card1 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 md:h-48 lg:mt-6 md:mt-6">
            <p
              style={{ color: "#7F46FF" }}
              className="text-4xl font-bold md:text-2xl"
            >
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
            <p className="text-2xl font-normal md:text-xl">
              ₹4 Lakhs - ₹10
              <br md:hidden /> Lakhs
            </p>
          </div>

          <div className="form-hereisallyouneed-card2 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 lg:mt-6 md:h-48 md:mt-6">
            <p
              style={{ color: "#1682FB" }}
              className="text-4xl font-bold md:text-2xl"
            >
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
            <p className="text-2xl font-normal md:text-xl">
              About 1200
              <br md:hidden /> Sq.ft and above
            </p>
          </div>

          <div className="form-hereisallyouneed-card3 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 lg:mt-6 md:mt-6 md:h-48">
            <p
              style={{ color: "#F72378" }}
              className="text-4xl font-bold md:text-2xl"
            >
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
            <p className="text-2xl font-normal md:text-xl">
              For early childhood
              <br md:hidden /> education
            </p>
          </div>
          <div className="form-hereisallyouneed-card4 flex flex-col justify-around px-10 h-64 w-1/5 lg:w-2/5 md:w-11/12 lg:mt-6 md:h-48 md:mt-6">
            <p
              style={{ color: "#FF833F" }}
              className="text-4xl font-bold md:text-2xl"
            >
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
            <p className="text-2xl font-normal md:text-xl">
              For
              <br md:hidden /> entrepreneurship
            </p>
          </div>
        </div>
      </section>

      <section
        id="form-top5differentiator"
        className="flex flex-col items-center gap-12 w-full py-16 "
      >
        <div className="flex justify-around w-11/12  md:flex-col-reverse md:gap-4">
          <div className="flex flex-col justify-center w-1/2 px-8 md:w-full md:items-center">
            <h1
              className="text-6xl font-extrabold md:text-center md:text-4xl"
              style={{ color: "#1682FB" }}
            >
              Parent’s Choice:
            </h1>
            <p className="text-3xl font-bold md:text-center md:text-xl">
              Bright Start... Right Start!
            </p>
          </div>
          <div className="w-1/2 flex justify-end md:w-full md:justify-center">
            <img
              src="./Assets/Images/form/BrightKidsmont.png"
              alt=""
              className="md:w-1/2"
            />
          </div>
        </div>
        <div className="w-full flex justify-start">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/642923538?h=ceaf8d6f86"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-center text-4xl font-bold md:text-left md:text-2xl md:pl-4">
          Unbeatable Top 5 Bright Kid Differentiators!
        </p>
        <div className="w-11/12">
          <Carousel
            responsive={carouseldata}
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            customTransition="all 5"
            transitionDuration={500}
            dotListClass="custom-dot-list-style"
            focusOnSelect={false}
          >
            <div className="w-full flex justify-center gap-16 md:flex-col md:w-11/12">
              <img
                src="./Assets/Images/form/carousel2.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p style={{ color: "#1682FB" }} className="font-bold text-2xl">
                  1 . Best Student Hamper: 
                </p>
                <p style={{ color: "#0B1C39" }} className="font-normal text-xl">
                  Amaze parents and enrich kids. We offer a world-class Smart
                  book series, complemented by an anytime-anywhere Teacher, a
                  Craft Kit, and a Multiple Intelligence portal for kids.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:flex-col  md:w-11/12">
              <img
                src="./Assets/Images/form/carousel3.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p style={{ color: "#1682FB" }} className="font-bold text-2xl">
                  2 . Montessori Toy Library: 
                </p>
                <p style={{ color: "#0B1C39" }} className="font-normal text-xl">
                  Your school will have access to an extensive Montessori Toy
                  Library, fostering a stimulating and hands-on learning
                  experience for your students.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:flex-col md:w-11/12">
              <img
                src="./Assets/Images/form/carousel4.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p style={{ color: "#1682FB" }} className="font-bold text-2xl">
                  3 . Award-Winning Curriculum
                </p>
                <p style={{ color: "#0B1C39" }} className="font-normal text-xl">
                  Our curriculum and teacher engagement programs have received
                  accolades for their innovation and effectiveness, ensuring
                  your preschool stands out from the rest.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:flex-col md:w-11/12">
              <img
                src="./Assets/Images/form/carousel5.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p style={{ color: "#1682FB" }} className="font-bold text-2xl">
                  4 . Digital Concept Teacher Portal:
                </p>
                <p style={{ color: "#0B1C39" }} className="font-normal text-xl">
                  With our cutting-edge technology, every classroom is empowered
                  to deliver world-class lessons, enriching both teachers and
                  students alike.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:flex-col md:w-11/12">
              <img
                src="./Assets/Images/form/carousel1.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p style={{ color: "#1682FB" }} className="font-bold text-2xl">
                  5 . All-in Mobile App 
                </p>
                <p style={{ color: "#0B1C39" }} className="font-normal text-xl">
                  Our comprehensive mobile app streamlines attendance, parent
                  communication, skill mapping of children, toy library
                  management, and fee tracking - everything you need at your
                  fingertips.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section
        id="form-flexible"
        className="flex flex-col items-center py-16 gap-6"
      >
        <img
          src="./Assets/Images/form/BEMlogo.png"
          alt=""
          className="md:w-24"
        />
        <h1
          className="text-6xl font-extrabold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          New Preschool Franchise has never been Here’s all&nbsp;
          <span className="form-flexible-h1-style"> so flexible!</span>
        </h1>
        <p
          className="text-3xl md:text-2xl font-bold text-center w-3/4"
          style={{ color: "#7F46FF" }}
        >
          Your Preschool: Your Budget: Your Way
        </p>
        <div className="flex flex-wrap justify-center w-full gap-8 md:flex-col md:items-center">
          <div
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-lg md:w-11/12 md:h-auto md:pl-2 md:pr-4 md:gap-4"
            style={{ border: "1px solid #7F46FF" }}
          >
            <p
              className="text-2xl font-bold md:text-xl"
              style={{ color: "#7F46FF" }}
            >
              1. Services:
            </p>
            <p className="text-xl md:text-lg">
              Enjoy the benefits of our highly affordable and fixed nominal
              service fees -<b> No Royalty, No Franchise Fees.</b>
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-lg md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
            style={{ border: "1px solid #7F46FF" }}
          >
            <p
              className="text-2xl font-bold md:text-xl"
              style={{ color: "#7F46FF" }}
            >
              2. Best Materials Cost:
            </p>
            <p className="text-xl md:text-lg">
              As a leading manufacturer of high-quality Montessori items and
              <b> preschool furniture</b>, we provide all your preschool needs
              at the best cost.
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-lg md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
            style={{ border: "1px solid #7F46FF" }}
          >
            <p
              className="text-2xl font-bold md:text-xl"
              style={{ color: "#7F46FF" }}
            >
              3. Digital Assets:
            </p>
            <p className="text-xl md:text-lg">
              Our <b>award-winning digital assets</b> are truly best-in-class,
              offering unmatched support for your preschool's growth.
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-lg md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
            style={{ border: "1px solid #7F46FF" }}
          >
            <p
              className="text-2xl font-bold md:text-xl"
              style={{ color: "#7F46FF" }}
            >
              4. Additional Revenue:
            </p>
            <p className="text-xl md:text-lg">
              We share the earnings from <b>Montessori Teachers Training</b> and
              Vedic Maths courses conducted at your center, contributing to your
              financial success.
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start justify-around h-40 pl-8 pr-16 py-4 bg-white rounded-lg md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
            style={{ border: "1px solid #7F46FF" }}
          >
            <p
              className="text-2xl font-bold md:text-xl"
              style={{ color: "#7F46FF" }}
            >
              5. Expert Mentoring:
            </p>
            <p className="text-xl md:text-lg">
              Benefit from the guidance and expertise of our highly experienced
              <b> leadership team.</b>
            </p>
          </div>
        </div>
        {/* </section> */}

        {/* <section
        id="form-addmissiongurantee"
        className="flex flex-col items-center gap-2 w-full py-12"
      > */}
        <p
          className="text-center text-3xl font-bold md:text-xl mt-20"
          style={{ color: "rgba(50, 53, 93, 0.5)", padding: "0 10vw" }}
        >
          Check our
        </p>

        <h1
          className="text-6xl font-extrabold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          Comprehensive
          <br /> Admission Guar
          <span className="form-addmissiongurantee-h1-style">antee Plan</span>
        </h1>
        <div className="w-4/5 flex items-center justify-around py-12 md:w-full">
          <img
            src="./Assets/Images/form/Illu.png"
            alt=""
            className="md:hidden"
          />
          <p
            className="text-left md:text-center w-3/5 text-xl md:w-11/12"
            style={{ color: "#0B1C39" }}
          >
            We don't just stop at helping you build a top-notch preschool. We
            take it a step further with our Comprehensive Admission Guarantee
            Plan. Our commitment to your
            <span style={{ color: "#7F46FF" }}> success is unwavering</span>,
            and our <span style={{ color: "#7F46FF" }}>marketing efforts </span>
            under this plan are second to none.
          </p>
        </div>
      </section>

      <section
        id="form-awards"
        className="flex flex-col items-center gap-8 w-full py-12"
      >
        <h1
          className="text-6xl font-extrabold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          Our Awards &<span className="form-awards-h1-style"> Accolades</span>
        </h1>
        <p
          className="text-xl w-3/4 md:w-11/12 text-center"
          style={{ color: "#0B1C39" }}
        >
          Celebrating
          <span style={{ color: "#FF833F" }}> 16+ years of excellence</span> and
          innovation, we are thrilled to share our remarkable journey of success
          and customer validation! With numerous prestigious awards in
          recognition of our cutting-edge digital solutions, curriculum, and
          teachers' training, we take immense pride in empowering over
          <span style={{ color: "#FF833F" }}> 35,000 bright young minds </span>
          across the country. Join the growing community of satisfied preschools
          who have witnessed the transformative impact of our tailored
          <span style={{ color: "#FF833F" }}> curriculum</span> and
          <span style={{ color: "#FF833F" }}>
            &nbsp;preschool learning materials!
          </span>
        </p>
        <img
          src="./Assets/Images/form/Certificates.png"
          className="block md:hidden w-4/5"
          alt=""
        />
        <img
          src="./Assets/Images/form/Certificatesmobile.png"
          className="hidden md:block w-11/12"
          alt=""
        />
      </section>

      <section
        id="form-pathwaytosuccess"
        className="flex flex-col items-center gap-16 w-full py-12"
      >
        <h1
          className="text-6xl font-extrabold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          Pathway to
          <span className="form-pathwaytosuccess-h1-style"> Success</span>
        </h1>
        <img
          src="./Assets/Images/form/Roadmappc.png"
          alt=""
          className="w-3/4 md:hidden"
        />
        <img
          src="./Assets/Images/form/Roadmapphone.png"
          alt=""
          className="w-11/12 hidden md:block"
        />
        <Button
          radius="full"
          className="bg-gradient-to-tr text-white shadow-lg px-24 py-9 text-lg font-bold md:hidden"
          style={{ backgroundColor: "#F72378" }}
        >
          <div>
            Visit our full Website:
            <br />
            <a href="http://www.brightkidmont.com">www.brightkidmont.com</a>
          </div>
        </Button>
        <img
          src="./Assets/Images/form/Ellipselaptop.png"
          alt=""
          className="w-screen md:hidden bg-white"
        />
        <img
          src="./Assets/Images/form/Ellipsephone.png"
          alt=""
          className="w-screen hidden md:block"
        />
        <div className="footer-yellow-gradient" />
        <div className="flex flex-col items-center">
          <img src="./Assets/Images/logo.png" alt="" />
          <div className="flex gap-6 md:flex-col">
            <a
              href="mailto:info@brightkidmont.com"
              className="text-xl text-center"
              style={{ color: "#32355D" }}
            >
              info@brightkidmont.com
            </a>
            <a
              href="tel:+919342533377"
              className="text-xl text-center"
              style={{ color: "#32355D" }}
            >
              +91 93425 33377
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 w-full flex justify-around pl-12 md:pl-0 items-center md:flex-col md:gap-6">
        <div className="flex flex-col gap-4 w-1/5 md:w-4/5">
          <p
            className="text-base font-normal md:text-center"
            style={{ color: "#0B1C39" }}
          >
            # 807, 8th Floor, BRIGADE RUBIX, HMT Road, Yeshwanthpur, Bengaluru,
            Karnataka, India - 560022
          </p>
          <p className="text-lg font-bold md:text-center">Socials</p>
          <div className="flex gap-2 md:justify-center">
            <img src="./Assets/Images/form/logo/facebook.svg" />
            <img src="./Assets/Images/form/logo/instagram.svg" />
            <img src="./Assets/Images/form/logo/linkedin.svg" />
            <img src="./Assets/Images/form/logo/twitter.svg" />
            <img src="./Assets/Images/form/logo/youtube.svg" />
          </div>
        </div>
        <ul style={{ color: "#0B1C39" }} className="w-1/5 md:w-4/5">
          <p className="text-lg font-bold pb-2" style={{ color: "#0B1C39" }}>
            Useful Links
          </p>
          <li className="mb-1">Bright Edge</li>
          <li className="mb-1">Bright Kid Montessori</li>
          <li className="mb-1">Bright Kid At Home</li>
          <li className="mb-1">Bright Edu Mont</li>
          <li className="mb-1">Bright Montessori</li>
          <li className="mb-1">Brilla Toys & Kits</li>
        </ul>
        <ul style={{ color: "#0B1C39" }} className="w-1/5 md:w-4/5">
          <p className="text-lg font-bold mb-2" style={{ color: "#0B1C39" }}>
            Information
          </p>
          <li className="mb-1">Locate a Center</li>
          <li className="mb-1">Course & Training</li>
          <li className="mb-1">Vedic Maths</li>
          <li className="mb-1">Contact Us</li>
          <li className="mb-1">Terms and Conditions</li>
          <li className="mb-1">Privacy Policy</li>
        </ul>
        <ul style={{ color: "#0B1C39" }} className="w-1/5 md:w-4/5">
          <li className="mb-1">Refund Policy</li>
          <li className="mb-1">Privacy Policy for Bright Beep</li>
        </ul>
      </footer>
    </div>
  );
}
