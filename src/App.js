import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Slider from "@mui/material/Slider";
import ProTip from "./ProTip";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link className="text-red-700" color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography
          className="bg-green-600"
          variant="h4"
          component="h1"
          gutterBottom
        >
          Create React App + Tailwind CSS example
        </Typography>
        <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: "shadow-none" }}
          componentsProps={{ thumb: { className: "hover:shadow-none" } }}
        />
        <ProTip />
        <Copyright />
        <p className="text-red-800">God is good all the time</p>
      </div>
    </Container>
  );
}
