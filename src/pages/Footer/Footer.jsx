import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 w-full flex justify-around pl-12 md:pl-0 items-center md:flex-col md:gap-6 md:py-6">
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
          <a href="https://www.facebook.com/brightkidmont/">
            <img src="./Assets/Images/form/logo/facebook.svg" />
          </a>
          <a href="https://instagram.com/brightkid_mont">
            <img src="./Assets/Images/form/logo/instagram.svg" />
          </a>
          <a href="https://www.youtube.com/channel/UCci_ljnk0suwM96-2BEw6TQ">
            <img src="./Assets/Images/form/logo/youtube.svg" />
          </a>
          <a href="https://www.linkedin.com/company/bright-edge-edusystems-pvt-ltd/">
          <img src="./Assets/Images/form/logo/linkedin.svg" />
          </a>
        </div>
      </div>
      <ul style={{ color: "#0B1C39" }} className="w-1/5 md:w-4/5">
        <p className="text-lg font-bold pb-2" style={{ color: "#0B1C39" }}>
          Useful Links
        </p>
        <a href="https://www.brightkidmont.com/index.html">
          <li className="mb-1">Bright Edge</li>
        </a>

        <a href="https://www.brightkidmont.com/montessori-preschool-nursery.html">
          <li className="mb-1">Bright Kid Montessori</li>
        </a>

        <a href="https://www.brightkidmont.com/montessori-preschool-online.html">
          <li className="mb-1">Bright Kid At Home</li>
        </a>

        <a href="https://www.brightkidmont.com/montessori-preschool-franchise.html">
          <li className="mb-1">Bright Edu Mont</li>
        </a>
        <a href="https://www.brightkidmont.com/montessori-preschool-teachers-training.html">
          <li className="mb-1">Bright Montessori Teachers Training</li>
        </a>

        <a href="https://brilla.in/">
          <li className="mb-1">Brilla Toys & Kits</li>
        </a>
      </ul>
      <ul style={{ color: "#0B1C39" }} className="w-1/5 md:w-4/5">
        <p className="text-lg font-bold mb-2" style={{ color: "#0B1C39" }}>
          Information
        </p>
        <a href="https://www.brightkidmont.com/contact-address-karnataka.html">
          <li className="mb-1">Locate a Center</li>
        </a>
        <a href="https://brightcourse.thinkific.com/">
          <li className="mb-1">Course & Training</li>
        </a>
        <a href="https://www.vedicmathsup.net">
          <li className="mb-1">Vedic Maths</li>
        </a>
        <Link to="/form">
          <li className="mb-1">Contact Us</li>
        </Link>
        <a href="https://www.brightkidmont.com/tccompany.pdf">
          <li className="mb-1">Terms and Conditions</li>
        </a>
        <a href="https://www.brightkidmont.com/ppcompany.pdf">
          <li className="mb-1">Privacy Policy</li>
        </a>
      </ul>
      <ul style={{ color: "#0B1C39" }} className="w-1/5 md:w-4/5">
        <a href="https://www.brightkidmont.com/rpcompany.pdf">
          <li className="mb-1">Refund Policy</li>
        </a>
        <a href="https://www.brightkidmont.com/brightbeep.html">
          <li className="mb-1">Privacy Policy for Bright Beep</li>
        </a>
      </ul>
    </footer>
  );
}
