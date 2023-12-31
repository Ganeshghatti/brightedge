import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "./logo1.png";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const menuf = () => {
    setmenu(!menu);
  };
  return (
    <header>
      {menu ? (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 z-30 navbar-mobile-menu-overlay"
            onClick={menuf}
          ></div>
          <ul className="flex flex-col fixed top-0 right-0 z-50 w-3/4 h-screen bg-white justify-center items-center gap-6">
            <li style={{ color: "#0B1C39" }} onClick={menuf}>
              <a href="https://brightkidmont.com/montessori-preschool-franchise">
                Partnership
              </a>
            </li>
            <li>
              <Dropdown onClick={menuf}>
                <DropdownTrigger>
                  <div
                    className="flex cursor-pointer"
                    style={{ color: "#0B1C39" }}
                  >
                    <a href="https://brightkidmont.com/montessori-preschool-nursery">
                      Montessori
                    </a>
                  </div>
                </DropdownTrigger>
              </Dropdown>
            </li>

            <li onClick={menuf}>
              <Dropdown>
                <DropdownTrigger>
                  <div
                    className="flex cursor-pointer"
                    style={{ color: "#0B1C39" }}
                  >
                    <a href="https://brilla.in/">Resources</a>
                  </div>
                </DropdownTrigger>
              </Dropdown>
            </li>

            <li onClick={menuf}>
              <Dropdown>
                <DropdownTrigger>
                  <div
                    className="flex cursor-pointer"
                    style={{ color: "#0B1C39" }}
                  >
                    <a href="http://www.brightkidmont.com">More</a>
                  </div>
                </DropdownTrigger>
              </Dropdown>
            </li>
            <Link to="/form" onClick={menuf}>
              <li >Contact</li>
            </Link>
            <Button
              radius="full"
              className="bg-gradient-to-tr text-white shadow-lg px-4 py-2 text-md font-bold"
              style={{ backgroundColor: "#F72378" }}
            >
              Enquire Today!
            </Button>
          </ul>
        </>
      ) : (
        ""
      )}

      <nav
        className="flex w-full justify-between items-center py-6 px-16 md:px-10"
        style={{ borderBottom: "1px solid gray" }}
      >
        <Link to="/">
          <img src={logo} alt="" className="w-44 md:w-36" />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="hidden md:block cursor-pointer"
          onClick={menuf}
        >
          <path
            d="M4 12H20"
            stroke="#4A4B57"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 5H20"
            stroke="#4A4B57"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19H20"
            stroke="#4A4B57"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <ul className="flex w-2/3 justify-around  items-center md:hidden">
          <li style={{ color: "#0B1C39" }}>
            <a href="https://brightkidmont.com/montessori-preschool-franchise">
              Partnership
            </a>
          </li>
          <li>
            <Dropdown>
              <DropdownTrigger>
                <div
                  className="flex cursor-pointer"
                  style={{ color: "#0B1C39" }}
                >
                  <a href="https://brightkidmont.com/montessori-preschool-nursery">
                    Montessori
                  </a>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 11L12 15L17 11"
                      stroke="#0B1C39"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </div>
              </DropdownTrigger>
              {/* <DropdownMenu aria-label="Static Actions">
                <DropdownItem color="danger">New file</DropdownItem>
                <DropdownItem color="danger">Copy link</DropdownItem>
                <DropdownItem color="danger">Edit file</DropdownItem>
                <DropdownItem color="danger">Delete file</DropdownItem>
              </DropdownMenu> */}
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <DropdownTrigger>
                <div
                  className="flex cursor-pointer"
                  style={{ color: "#0B1C39" }}
                >
                  <a href="https://brilla.in/">Resources</a>

                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 11L12 15L17 11"
                      stroke="#0B1C39"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </div>
              </DropdownTrigger>
              {/* <DropdownMenu aria-label="Static Actions">
                <DropdownItem color="danger">New file</DropdownItem>
                <DropdownItem color="danger">Copy link</DropdownItem>
                <DropdownItem color="danger">Edit file</DropdownItem>
                <DropdownItem color="danger">Delete file</DropdownItem>
              </DropdownMenu> */}
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <DropdownTrigger>
                <div
                  className="flex cursor-pointer"
                  style={{ color: "#0B1C39" }}
                >
                  <a href="http://www.brightkidmont.com">More</a>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 11L12 15L17 11"
                      stroke="#0B1C39"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </div>
              </DropdownTrigger>
              {/* <DropdownMenu aria-label="Static Actions">
                <DropdownItem color="danger">New file</DropdownItem>
                <DropdownItem color="danger">Copy link</DropdownItem>
                <DropdownItem color="danger">Edit file</DropdownItem>
                <DropdownItem color="danger">Delete file</DropdownItem>
              </DropdownMenu> */}
            </Dropdown>
          </li>
          <Link to="/form">
            <li>Contact</li>
          </Link>
          <Button
            radius="full"
            className="bg-gradient-to-tr text-white shadow-lg px-4 py-2 text-md font-bold"
            style={{ backgroundColor: "#F72378" }}
          >
            Enquire Today!
          </Button>
        </ul>
      </nav>
    </header>
  );
}
