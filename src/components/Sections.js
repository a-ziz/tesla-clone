import React from "react";
import "./sections_styles.css";

import sectionImg1 from "../assets/model-3.jpg";
import sectionImg2 from "../assets/model-y.jpg";
import sectionImg3 from "../assets/model-s.jpg";
import sectionImg4 from "../assets/model-x.jpg";
import sectionImg5 from "../assets/solarpanels.jpg";
import sectionImg6 from "../assets/roof.jpg";
import sectionImg7 from "../assets/accessories.jpg";

const backgroundImage = {
  section1: `url(${sectionImg1})`,
  section2: `url(${sectionImg2})`,
  section3: `url(${sectionImg3})`,
  section4: `url(${sectionImg4})`,
  section5: `url(${sectionImg5})`,
  section6: `url(${sectionImg6})`,
  section7: `url(${sectionImg7})`,
};

const Hero = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: backgroundImage.section1,
        }}
      >
        <div className="content">
          <h1>Model 3</h1>
          <p>Leasing starting at $349/mo</p>
          <div className="buttons">
            <a href="/#" className="btn button-dark">
              Custom Order
            </a>
            <a href="/#" className="btn button-light">
              Demo Drive
            </a>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: backgroundImage.section2,
        }}
      >
        <div className="content">
          <h1>Model Y</h1>
          <p></p>
          <div className="buttons">
            <a href="/#" className="btn button-dark">
              Custom Order
            </a>
            <a href="/#" className="btn button-light">
              Demo Drive
            </a>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: backgroundImage.section3,
        }}
      >
        <div className="content">
          <h1>Model S</h1>
          <p>Schedule a Demo Drive</p>
          <div className="buttons">
            <a href="/#" className="btn button-dark">
              Custom Order
            </a>
            <a href="/#" className="btn button-light">
              View Inventory
            </a>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: backgroundImage.section4,
        }}
      >
        <div className="content">
          <h1>Model X</h1>
          <p>Schedule a Demo Drive</p>
          <div className="buttons">
            <a href="/#" className="btn button-dark">
              Custom Order
            </a>
            <a href="/#" className="btn button-light">
              View Inventory
            </a>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: backgroundImage.section5,
        }}
      >
        <div className="content">
          <h1>Solar Panels</h1>
          <p>Lowest Cost Solar Panels in America </p>
          <div className="buttons">
            <a href="/#" className="btn button-dark">
              Order Now
            </a>
            <a href="/#" className="btn button-light">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: backgroundImage.section6,
        }}
      >
        <div className="content">
          <h1>Solar Roof </h1>
          <p>Produce Clean Energy From Your Roof </p>
          <div className="buttons">
            <a href="/#" className="btn button-dark">
              Order Now
            </a>
            <a href="/#" className="btn button-light">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: backgroundImage.section7,
        }}
      >
        <div className="content">
          <h1>Accessories </h1>
          <p>
            {" "}
            <br /> <br />
          </p>
          <div className="buttons">
            <br />
            <br />
            <a href="/#" className="btn button-dark">
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
