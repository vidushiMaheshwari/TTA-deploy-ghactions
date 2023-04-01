import React from "react";
import classes from "./Sponsors.module.css";
import { Image } from "react-bootstrap";
import balsamiq from "../../assets/balsamiq-logo.png";
import microsoft from "../../assets/Microsoft-logo.jpg";
import capital_one from "../../assets/CapitalOneLogo.png";
import Footer from "../Footer/Footer";

function Sponsors() {
  return (
    <div className={classes.mainContainer} id="sponsors">
      <div className={classes.title}>Sponsors</div>
      <div className={classes.sponsorBlock}>
        <div>
          <Image src={balsamiq} style={{ height: "10vh" }} />
        </div>
        <div>
          <Image src={microsoft} style={{ height: "10vh" }} />
        </div>
        <div>
          <Image src={capital_one} style={{ height: "10vh" }} />
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Sponsors;
