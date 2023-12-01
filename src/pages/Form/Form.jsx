import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from "../../Components/CustomLeftArrow";
import CustomRightArrow from "../../Components/CustomRightArrow";
import "./Form.scss";
import SubmitFormApi from "./api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import validator from "validator";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
};
const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute md:left-0 top-full mb-8 cursor-pointer"
    style={{ left: window.innerWidth > 867 ? "33%" : "15%" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M25 10L15 20L25 30"
        stroke="#1682FB"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute left-2/3 md:left-3/4 top-full mb-8 cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M15 30L25 20L15 10"
        stroke="#1682FB"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);
export default function Form() {
  const [formData, setFormData] = useState({
    FIRST_NAME: "",
    SMS__COUNTRY_CODE: "",
    SMS: "",
    EMAIL: "",
    LOCATION: "",
    YOUR_MESSAGE: 1,
  });
  const [alert, setAlert] = useState(null);

  const [vid1, setvid1] = useState(false);
  const vid1f = () => {
    setvid1(!vid1);
  };

  const [vid2, setvid2] = useState(false);
  const vid2f = () => {
    setvid2(!vid2);
  };

  const handleChange = (e, radioId) => {
    const { name, value } = e.target;
    if (name === "YOUR_MESSAGE") {
      setFormData({
        ...formData,
        YOUR_MESSAGE: radioId,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!validator.isEmail(formData.EMAIL)) {
      setAlert(
        <Alert
          style={{ position: "fixed", bottom: "3", left: "2", zIndex: "999" }}
          variant="filled"
          severity="warning"
        >
          Enter a valid email
        </Alert>
      );
      setTimeout(() => setAlert(null), 5000); // Close alert after 5 seconds
      return; // Exit the function if email is not valid
    }

    if (!validator.isMobilePhone(formData.SMS)) {
      setAlert(
        <Alert
          style={{ position: "fixed", bottom: "3%", left: "2%", zIndex: "999" }}
          variant="filled"
          severity="warning"
        >
          Enter a valid phone number
        </Alert>
      );
      setTimeout(() => setAlert(null), 5000); // Close alert after 5 seconds
      return; // Exit the function if phone number is not valid
    }

    try {
      const response = await SubmitFormApi(formData);
      console.log(response);
      if (response.iserror) {
        setAlert(
          <Alert
            style={{
              position: "fixed",
              bottom: "3%",
              left: "2%",
              zIndex: "999",
            }}
            variant="filled"
            severity="error"
          >
            {response.msg}
          </Alert>
        );
      } else {
        setAlert(
          <Alert
            style={{
              position: "fixed",
              bottom: "3%",
              left: "2%",
              zIndex: "999",
            }}
            variant="filled"
            severity="success"
          >
            {response.msg}
          </Alert>
        );
        setFormData({
          FIRST_NAME: "",
          SMS__COUNTRY_CODE: "",
          SMS: "",
          EMAIL: "",
          LOCATION: "",
          YOUR_MESSAGE: null,
        });
      }
      setTimeout(() => setAlert(null), 5000); // Close alert after 5 seconds
    } catch (error) {
      console.error(error, "error");
    }
  };
  const handlescrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: testimonailsdata.desktop.items,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: testimonailsdata.desktop.breakpoint.max,
        settings: {
          slidesToShow: testimonailsdata.desktop.items,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: testimonailsdata.tablet.breakpoint.max,
        settings: {
          slidesToShow: testimonailsdata.tablet.items,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: testimonailsdata.mobile.breakpoint.max,
        settings: {
          slidesToShow: testimonailsdata.mobile.items,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [iframevidheight, setIframevidheight] = useState(720);
  const tab = useMediaQuery("(max-width: 1200px) && (min-width: 451px)");
  const phone = useMediaQuery("(max-width:450px)");

  useEffect(() => {
    const setIframeHeightf = () => {
      if (tab) {
        setIframevidheight(450);
      } else if (phone) {
        setIframevidheight(260);
      }
    };

    setIframeHeightf();

    window.addEventListener("resize", setIframeHeightf);

    return () => {
      window.removeEventListener("resize", setIframeHeightf);
    };
  }, [phone]);

  return (
    <div
      id="form"
      className="flex flex-col justify-center w-screen items-center"
    >
      <Stack spacing={2}>{alert}</Stack>
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
            className="text-6xl font-bold lg:text-5xl md:text-4xl"
            style={{ color: "#32355D" }}
          >
            Make an Impactful
            <p className="" style={{ color: "#7F46FF" }}>
              Preschool
            </p>
          </h1>
          <p
            style={{ color: "#0B1C39" }}
            className="text-2xl font-normal md:text-xl"
          >
            <span className="font-bold">
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
          style={{ padding: "0 6vw" }}
          className="w-1/2 px-10 flex flex-col justify-around items-center gap-4 md:w-full md:mt-5 mt-20"
          id="sib-form"
          onSubmit={handleSubmit}
        >
          <img
            src="./Assets/Images/form/AFFORDABLEMaterials.png"
            className="object-contain"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="FIRST_NAME"
            required
            label="Name"
            value={formData.FIRST_NAME}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-start w-full gap-4">
            <select
              name="SMS__COUNTRY_CODE"
              defaultValue="+91"
              value={formData.SMS__COUNTRY_CODE}
              disabled={true}
              className="w-1/3 h-full z-10 py-4 px-4 flex justify-center rounded bg-white border-1 border-solid border-gray-400 cursor-pointer text-gray-500"
            >
              <option value="+91" selected>
                (+91) India
              </option>
            </select>

            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="SMS"
              value={formData.SMS}
              label="Phone number"
              onChange={handleChange}
              className="flex-1"
              required
            />
          </div>

          <TextField
            id="outlined-basic"
            variant="outlined"
            type="email"
            name="EMAIL"
            value={formData.EMAIL}
            label="Email"
            onChange={handleChange}
            className="w-full"
            required
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
            required
          />
          <div className="border-1 border-solid border-gray-400 p-6 rounded-lg w-full flex">
            <FormControl className="flex justify-between">
              <FormLabel id="demo-radio-buttons-group-label">Query</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="YOUR_MESSAGE"
                required
                row
              >
                <FormControlLabel
                  value="Open a new preschool"
                  control={<Radio />}
                  label="Open a new preschool"
                  onChange={(e) => handleChange(e, 1)}
                />
                <FormControlLabel
                  value="Elevate my preschool"
                  control={<Radio />}
                  label="Elevate my preschool"
                  onChange={(e) => handleChange(e, 2)}
                />
                <FormControlLabel
                  value="Need Preschool smartbooks"
                  control={<Radio />}
                  label="Need Preschool smartbooks"
                  onChange={(e) => handleChange(e, 3)}
                />
                <FormControlLabel
                  value="Need Preschol Materials"
                  control={<Radio />}
                  label="Need Preschol Materials"
                  onChange={(e) => handleChange(e, 4)}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  onChange={(e) => handleChange(e, 5)}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Button
            radius="full"
            form="sib-form"
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
              href="https://www.brightkidmont.com/ppcompany.pdf"
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
        className="w-full flex flex-col items-center justify-center gap-8 md:mt-8 py-16 px-12 md:py-6 mt-10"
      >
        <h1
          className="text-6xl font-bold md:text-center md:text-4xl"
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
              className="text-7xl lg:text-6xl font-bold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              {/* <span className="opacity-20">0</span> */}
              16+
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
              className="text-7xl lg:text-6xl font-bold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              {/* <span className="opacity-20 ">0</span> */}
              200+
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
              className="text-7xl lg:text-6xl font-bold sm:text-5xl"
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
              className="text-7xl lg:text-6xl font-bold sm:text-5xl"
              style={{ color: "#F72378" }}
            >
              {/* <span className="opacity-20">0</span> */}
              30+
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
        className="flex w-11/12 justify-around items-center md:flex-col py-16 lg:flex-wrap md:gap-8 md:py-6 "
      >
        <img
          src="./Assets/Images/form/icon_5.png"
          className="absolute  mb-96 left-2/3 lg:hidden md:hidden"
          alt=""
        />
        <img
          src="./Assets/Images/form/trapezium.png"
          className="absolute right-0 mb-96 lg:hidden md:hidden"
        />

        <h1
          className="text-6xl font-bold w-1/4 md:text-center lg:w-2/5 md:w-full md:text-4xl"
          style={{ color: "#32355D" }}
        >
          Our Pricing
          <br />
          <span className="form-highlights-h1-style"> Highlights</span>
        </h1>
        <div
          className="w-1/5 p-6 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full"
          style={{
            backgroundColor: "#D0E6FE",
            borderRadius: "24px",
            border: "1px solid #1682FB",
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
          className="w-1/5 p-6 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full lg:mt-6"
          style={{
            backgroundColor: "rgba(255, 131, 63, 0.16)",
            borderRadius: "24px",
            border: "1px solid #FF833F",
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>

        <div
          className="w-1/5 p-6 h-72 flex flex-col justify-center gap-4 lg:w-2/5 md:w-full lg:mt-6"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </section>

      <section
        id="form-affiliate"
        className="py-16 gap-12 w-full flex flex-col items-center md:py-6"
      >
        <p
          className="text-6xl font-bold md:text-center md:text-4xl"
          style={{ color: "#7F46FF" }}
        >
          Our Preschool
          <span className="form-affiliate-h1-style"> Partnership </span>Program
        </p>
        {vid1 ? (
          <>
            <div
              className="fixed w-screen h-screen top-0 left-0 z-30"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.608)", zIndex: "999" }}
              onClick={vid1f}
            />
            <div
              className="flex justify-center items-center fixed w-screen h-screen top-0 left-0"
              style={{ zIndex: "999" }}
              onClick={vid1f}
            >
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/645805338?h=7d0abb1ae3"
                width="1200"
                height={iframevidheight}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </>
        ) : (
          <>
            <img
              src="./Assets/Images/form/video1thumbnail.png"
              style={{ width: "90vw" }}
              className="self-end cursor-pointer md:hidden"
              onClick={vid1f}
            />
            <img
              src="./Assets/Images/form/video1thumbnailphone.png"
              style={{ width: "90vw" }}
              className="self-end cursor-pointer hidden md:block"
              onClick={vid1f}
            />
          </>
        )}

        <div
          className="flex justify-around items-start md:flex-col form-affiliate-cloud-div"
          style={{ paddingLeft: "10vw" }}
        >
          <div className="flex flex-col justify-start w-1/4 md:w-11/12">
            <p
              style={{ color: "#FF833F" }}
              className="text-4xl font-bold text-left md:text-3xl"
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
          <ul className="flex flex-col w-1/2 list-disc gap-4 md:w-11/12 md:mt-6">
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
        className="py-16 gap-10 w-11/12 flex flex-col items-center md:py-6"
      >
        <div className="form-testimonials-smallcloud-div">
          <p
            className="text-center text-3xl font-bold md:text-xl"
            style={{ color: "rgba(50, 53, 93, 0.5)", padding: "0 10vw" }}
          >
            Testimonials
          </p>
          <h1
            className="text-6xl font-bold md:text-center md:text-4xl lg:text-center"
            style={{ color: "#32355D" }}
          >
            Don’t take
            <span className="form-testimonials-h1-style"> our word</span>
          </h1>
        </div>
        {/* <Carousel
            responsive={testimonailsdata}
            swipeable={true}
            draggable={true}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            customTransition="all 5"
            transitionDuration={500}
            focusOnSelect={false}
            renderDotsOutside={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <div
              className="w-full md:m-auto h-80 flex ml-96 md:h-auto justify-between md:flex-col md:w-11/12 rounded-xl"
              style={{ border: "20px solid white" }}
            >
              <img
                src="./Assets/Images/form/tina.jpg"
                className="w-64 h-full md:h-96 object-cover object-center md:w-full"
                style={{ borderRadius: "8px 0 0 8px" }}
                alt=""
              />
              <div
                className="flex-1 flex flex-col items-start justify-center h-full px-6 overflow-scroll md:p-6 md:h-48"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius: "0 8px 8px 0",
                }}
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
              className="w-full md:m-auto h-80 flex ml-96 md:h-auto justify-between md:flex-col md:w-11/12 rounded"
              style={{ border: "20px solid white" }}
            >
              <img
                src="./Assets/Images/form/sher.jpg"
                className="w-64 h-full md:h-96 object-cover object-center m-auto md:w-full"
                style={{ borderRadius: "8px 0 0 8px" }}
                alt=""
              />
              <div
                className="flex-1 flex flex-col items-start justify-center h-full px-6 overflow-scroll  md:p-6"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius: "0 8px 8px 0",
                }}
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
              className="w-full md:m-auto h-80 flex ml-96 md:h-auto justify-between md:flex-col md:w-11/12 rounded"
              style={{ border: "20px solid white" }}
            >
              <img
                src="./Assets/Images/form/anupama.jpg"
                className="w-64 h-full md:h-96 object-cover md:w-full m-auto"
                style={{
                  borderRadius: "8px 0 0 8px",
                  objectPosition: "bottom center",
                }}
                alt=""
              />
              <div
                className="flex-1 flex flex-col items-start justify-center h-full px-6 overflow-scroll  md:p-6"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius: "0 8px 8px 0",
                }}
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
              className="w-full md:m-auto h-80 flex ml-96 md:h-auto justify-between md:flex-col md:w-11/12 rounded"
              style={{ border: "20px solid white" }}
            >
              <img
                src="./Assets/Images/form/swethaedited.png"
                className="w-64 h-full  object-cover md:w-full  m-auto"
                style={{
                  borderRadius: "8px 0 0 8px",
                  objectPosition: "top center",
                }}
                alt=""
              />
              <div
                className="flex-1 flex flex-col items-start justify-center h-full px-6 overflow-scroll  md:p-6"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius: "0 8px 8px 0",
                  maxHeight:"320px",
                  overflowY:"auto"
                }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Bright Kid Montessori Horamavu, Bangalore
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
          </Carousel> */}
        <div className="w-full">
          <Slider {...settings} className="flex items-center">
            <div className="flex md:h-auto h-80 justify-between md:m-auto ml-96 md:flex-col w-11/12 rounded-xl testimonials-slider-class-flex">
              <img
                src="./Assets/Images/form/tina.jpg"
                className="w-1/3 md:h-96 object-cover object-center md:w-full"
                style={{
                  borderRadius:
                    window.innerWidth > 867 ? "8px 0 0 8px" : "8px 8px 0 0",
                }}
                alt=""
              />
              <div
                className="flex flex-col flex-1 justify-center gap-2 items-start px-6 md:p-6 md:overflow-auto md:h-96"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius:
                    window.innerWidth > 867 ? "0 8px 8px 0" : "0 0 8px 8px",
                }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Wissen Mont Preschool, Madurai
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Tina Prasanth  
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base overflow-auto"
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
              className="flex md:h-auto h-80 justify-between md:m-auto ml-96 md:flex-col w-11/12 rounded-xl testimonials-slider-class-flex"
              style={{ border: "20px solid white" }}
            >
              <img
                src="./Assets/Images/form/sher.jpg"
                className="w-1/3 md:h-96 object-cover object-center md:w-full"
                style={{
                  borderRadius:
                    window.innerWidth > 867 ? "8px 0 0 8px" : "8px 8px 0 0",
                }}
                alt=""
              />
              <div
                className="flex flex-col flex-1 justify-center gap-4 items-start px-6 md:p-6 md:overflow-auto md:h-96"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius:
                    window.innerWidth > 867 ? "0 8px 8px 0" : "0 0 8px 8px",
                }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Sunrise Valley School, Haryana
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Sher Singh  
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base overflow-auto"
                >
                  Thrilled with excellent academic support, online training, and
                  strong Montessori resources from Bright Kids Bangalore.
                  Parents love the curriculum and monthly activity guidelines.
                  Grateful for Bright Kids' strong and excellent support.
                </p>
              </div>
            </div>
            <div
              className="flex md:h-auto h-80 justify-between md:m-auto ml-96 md:flex-col w-11/12 rounded-xl testimonials-slider-class-flex"
              style={{ border: "20px solid white" }}
            >
              <img
                src="./Assets/Images/form/anupama.jpg"
                className="w-1/3 md:h-96 object-cover object-center md:w-full"
                style={{
                  borderRadius:
                    window.innerWidth > 867 ? "8px 0 0 8px" : "8px 8px 0 0",
                  objectPosition: "bottom center",
                }}
                alt="img"
              />
              <div
                className="flex flex-col flex-1 justify-center gap-4 items-start px-6 md:p-6 overflow-auto md:h-96"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius:
                    window.innerWidth > 867 ? "0 8px 8px 0" : "0 0 8px 8px",
                }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Bright Kid Montessori, Jakkur, Bangalore
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Anupama Sengupta
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base overflow-auto"
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
              className="flex md:h-auto h-80 justify-between md:m-auto ml-96 md:flex-col w-11/12 rounded-xl testimonials-slider-class-flex"
              style={{ border: "20px solid red" }}
            >
              <img
                src="./Assets/Images/form/swethaedited.png"
                className="w-1/3 md:h-96 object-cover md:w-full"
                style={{
                  borderRadius:
                    window.innerWidth > 867 ? "8px 0 0 8px" : "8px 8px 0 0",
                  objectPosition: "top center",
                }}
                alt=""
              />
              <div
                className="flex flex-col flex-1 justify-center gap-4 items-start px-6 md:p-6 md:overflow-auto md:h-96"
                style={{
                  backgroundColor: "rgba(22, 130, 251, 0.20)",
                  borderRadius:
                    window.innerWidth > 867 ? "0 8px 8px 0" : "0 0 8px 8px",
                }}
              >
                <p style={{ color: "gray" }} className="font-normal text-base">
                  Bright Kid Montessori Horamavu, Bangalore
                </p>
                <p style={{ color: "#0B1C39" }} className="font-bold text-2xl">
                  Shweta 
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-base overflow-auto"
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
          </Slider>
        </div>
      </section>

      <section
        id="form-hereisallyouneed"
        className="py-16 gap-6 w-full md:mt-16 flex flex-col items-center md:py-6"
      >
        <p
          className="text-center text-3xl font-bold md:text-xl"
          style={{ color: "rgba(50, 53, 93, 0.5)", padding: "0 10vw" }}
        >
          Opening a New Preschool:
        </p>
        <h1
          className="text-6xl font-bold md:text-center md:text-4xl"
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
            <img
              src="./Assets/Images/form/rupeeicon.png"
              className="h-11 w-11"
            />

            <p className="text-2xl font-normal md:text-xl">
              ₹4 Lakhs - ₹10
              <br className="md:hidden" /> Lakhs
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
                d="M12 18L10 20V34C10 37.3137 12.6863 40 16 40H18C19.1046 40 20 39.1046 20 38V30C20 28.8954 20.8954 28 22 28H26C27.1046 28 28 28.8954 28 30V38C28 39.1046 28.8954 40 30 40H32C35.3137 40 38 37.3137 38 34V20L36 18"
                stroke="#1682FB"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 22L24 6L40 22"
                stroke="#1682FB"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-2xl font-normal md:text-xl">
              About 1200
              <br className="md:hidden" /> Sq.ft and above
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
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-2xl font-normal md:text-xl">
              For early childhood
              <br className="md:hidden" /> education
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
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24Z"
                fill="white"
                stroke="#FF833F"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24Z"
                fill="white"
                stroke="#FF833F"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-2xl font-normal md:text-xl">
              For
              <br className="md:hidden" /> entrepreneurship
            </p>
          </div>
        </div>
      </section>

      <section
        id="form-top5differentiator"
        className="flex flex-col items-center gap-12 w-full py-16 md:py-6 md:mt-8"
      >
        <div className="flex justify-around w-11/12  md:flex-col-reverse md:gap-4">
          <div className="flex flex-col justify-center w-1/2 px-8 md:w-full md:items-center">
            <h1
              className="text-6xl font-bold md:text-center md:text-4xl"
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
        {vid2 ? (
          <>
            <div
              className="fixed w-screen h-screen top-0 left-0 z-30"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.608)", zIndex: "999" }}
              onClick={vid2f}
            />
            <div
              className="flex justify-center items-center fixed w-screen h-screen top-0 left-0"
              style={{ zIndex: "999" }}
              onClick={vid2f}
            >
              <iframe
                id="vimeo-iframe"
                title="vimeo-player"
                src="https://player.vimeo.com/video/642923538?h=ceaf8d6f86"
                width="1280"
                height={iframevidheight}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </>
        ) : (
          <>
            <img
              src="./Assets/Images/form/video2thumbnail.png"
              style={{ width: "90vw" }}
              className="self-start cursor-pointer md:hidden"
              onClick={vid2f}
            />
            <img
              src="./Assets/Images/form/video2thumbnailphone.png"
              style={{ width: "90vw" }}
              className="self-start cursor-pointer hidden md:block"
              onClick={vid2f}
            />
          </>
        )}

        <p
          className="text-center text-5xl font-bold md:text-left md:text-3xl md:pl-4 md:mt-10 mt-20"
          style={{ color: "#FD9927" }}
        >
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
            transitionDuration={300}
            focusOnSelect={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <div className="w-full flex justify-center gap-16 md:flex-col md:m-auto md:gap-0 md:w-11/12 md:pb-20">
              <img
                src="./Assets/Images/form/carousel2.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p
                  style={{ color: "#1682FB" }}
                  className="font-bold text-4xl xl:text-2xl lg:text-2xl md:text-2xl"
                >
                  1 . Best Student Hamper: 
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-2xl xl:text-xl lg:text-xl md:text-xl"
                >
                  Amaze parents and enrich kids. We offer a world-class Smart
                  book series, complemented by an anytime-anywhere Teacher, a
                  Craft Kit, and a Multiple Intelligence portal for kids.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:m-auto md:gap-0 md:flex-col  md:w-11/12">
              <img
                src="./Assets/Images/form/carousel3.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p
                  style={{ color: "#1682FB" }}
                  className="font-bold text-4xl xl:text-2xl lg:text-2xl md:text-2xl"
                >
                  2 . Montessori Toy Library: 
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-2xl xl:text-xl lg:text-xl md:text-xl"
                >
                  Your school will have access to an extensive Montessori Toy
                  Library, fostering a stimulating and hands-on learning
                  experience for your students.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:gap-0 md:m-auto md:flex-col md:w-11/12">
              <img
                src="./Assets/Images/form/carousel4.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p
                  style={{ color: "#1682FB" }}
                  className="font-bold text-4xl xl:text-2xl lg:text-2xl md:text-2xl"
                >
                  3 . Award-Winning Curriculum
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-2xl xl:text-xl lg:text-xl md:text-xl"
                >
                  Our curriculum and teacher engagement programs have received
                  accolades for their innovation and effectiveness, ensuring
                  your preschool stands out from the rest.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:gap-0 md:m-auto md:flex-col md:w-11/12">
              <img
                src="./Assets/Images/form/carousel5.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-6 py-4 md:w-full">
                <p
                  style={{ color: "#1682FB" }}
                  className="font-bold text-4xl xl:text-2xl lg:text-2xl md:text-2xl"
                >
                  4 . Digital Concept Teacher Portal:
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-2xl xl:text-xl lg:text-xl md:text-xl"
                >
                  With our cutting-edge technology, every classroom is empowered
                  to deliver world-class lessons, enriching both teachers and
                  students alike.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-16 md:gap-0 md:m-auto md:flex-col md:w-11/12">
              <img
                src="./Assets/Images/form/carousel1.jpg"
                className="w-2/5 rounded-xl md:w-full"
                alt=""
              />
              <div className="w-2/5 flex flex-col items-start gap-2 py-1 md:w-full">
                <p
                  style={{ color: "#1682FB" }}
                  className="font-bold text-4xl xl:text-2xl lg:text-2xl md:text-2xl"
                >
                  5 . All-in Mobile App 
                </p>
                <p
                  style={{ color: "#0B1C39" }}
                  className="font-normal text-2xl xl:text-xl lg:text-xl md:text-xl"
                >
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
        className="flex flex-col items-center py-16 gap-5 md:py-6"
      >
        <img
          src="./Assets/Images/form/BEMlogo.png"
          alt=""
          className="w-60 md:w-36"
        />
        <h1
          className="text-6xl font-bold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          New Preschool Franchise has never been&nbsp;
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
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-3xl md:w-11/12 md:h-auto md:pl-2 md:pr-4 md:gap-4"
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
              service fees -
              <span className="font-bold"> No Royalty, No Franchise Fees.</span>
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-3xl md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
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
              <span className="font-bold"> preschool furniture</span>, we
              provide all your preschool needs at the best cost.
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-3xl md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
            style={{ border: "1px solid #7F46FF" }}
          >
            <p
              className="text-2xl font-bold md:text-xl"
              style={{ color: "#7F46FF" }}
            >
              3. Digital Assets:
            </p>
            <p className="text-xl md:text-lg">
              Our
              <span className="font-bold"> award-winning digital assets</span>
              are truly best-in-class, offering unmatched support for your
              preschool's growth.
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start bg-white justify-around h-40 pl-8 pr-16 py-4 rounded-3xl md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
            style={{ border: "1px solid #7F46FF" }}
          >
            <p
              className="text-2xl font-bold md:text-xl"
              style={{ color: "#7F46FF" }}
            >
              4. Additional Revenue:
            </p>
            <p className="text-xl md:text-lg">
              We share the earnings from
              <span className="font-bold"> Montessori Teachers Training</span>
              and Vedic Maths courses conducted at your center, contributing to
              your financial success.
            </p>
          </div>

          <div
            className="w-2/5 flex flex-col items-start justify-around h-40 pl-8 pr-16 py-4 bg-white rounded-3xl md:w-11/12 md:h-auto md:pl-3 md:pr-4 md:gap-4"
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
              <span className="font-bold"> leadership team.</span>
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
          className="text-6xl font-bold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          Comprehensive
          <br /> Admission Guar
          <span className="form-addmissiongurantee-h1-style">antee Plan</span>
        </h1>
        <div className="w-4/5 flex items-center justify-around py-12 md:w-full">
          <img
            src="./Assets/Images/form/admissionguranteeplan.png"
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
            <span style={{ color: "#7F46FF" }} className="font-bold">
              success is unwavering
            </span>
            , and our
            <span style={{ color: "#7F46FF" }} className="font-bold">
              marketing efforts
            </span>
            under this plan are second to none.
          </p>
        </div>
      </section>

      <section
        id="form-awards"
        className="flex flex-col items-center gap-8 w-full py-12 md:py-6"
      >
        <h1
          className="text-6xl font-bold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          Our Awards &<span className="form-awards-h1-style"> Accolades</span>
        </h1>
        <p
          className="text-xl w-3/4 md:w-11/12 text-center"
          style={{ color: "#0B1C39" }}
        >
          Celebrating
          <span style={{ color: "#FF833F" }} className="font-bold">
            16+ years of excellence
          </span>
          and innovation, we are thrilled to share our remarkable journey of
          success and customer validation! With numerous prestigious awards in
          recognition of our cutting-edge digital solutions, curriculum, and
          teachers' training, we take immense pride in empowering over
          <span style={{ color: "#FF833F" }} className="font-bold">
            35,000 bright young minds
          </span>
          across the country. Join the growing community of satisfied preschools
          who have witnessed the transformative impact of our tailored
          <span style={{ color: "#FF833F" }} className="font-bold">
            curriculum
          </span>
          and
          <span style={{ color: "#FF833F" }} className="font-bold">
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
        className="flex flex-col items-center gap-16 w-full py-12 md:py-6"
      >
        <h1
          className="text-6xl font-bold text-center md:text-4xl px-1/2"
          style={{ color: "#32355D" }}
        >
          Pathway to
          <span className="form-pathwaytosuccess-h1-style"> Success</span>
        </h1>
        <img
          src="./Assets/Images/form/Roadmappc1.png"
          alt=""
          className="w-3/4 md:hidden"
        />
        <img
          src="./Assets/Images/form/Roadmapphone1.png"
          alt=""
          className="w-11/12 hidden md:block"
        />
        <div className="flex gap-6 mt-12 md:hidden ">
          <Button
            radius="full"
            className="bg-gradient-to-tr text-white shadow-lg px-24 py-9 text-lg font-bold"
            style={{ backgroundColor: "#F72378" }}
          >
            <div>
              Visit our full Website:
              <br />
              <a href="http://www.brightkidmont.com">www.brightkidmont.com</a>
            </div>
          </Button>
          <Button
            radius="full"
            variant="bordered"
            className="bg-gradient-to-tr shadow-lg px-36 py-9 text-lg font-bold"
            style={{ color: "#F72378", border: "2px solid #F72378" }}
            onClick={handlescrolltotop}
          >
            <Link to="/form">Enquire now</Link>
          </Button>
        </div>
        {/* <img
          src="./Assets/Images/form/Ellipselaptop.png"
          alt=""
          className="w-screen md:hidden bg-white"
        />
        <img
          src="./Assets/Images/form/Ellipsephone.png"
          alt=""
          className="w-screen hidden md:block"
        /> */}
        {/* <div className="top" /> */}

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
    </div>
  );
}
