import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      home
      <Link to="/form">
        <Button color="primary">Form Page</Button>
      </Link>
    </div>
  );
}
