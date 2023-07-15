import React from "react";
import cardLogo from "../../assets/apple--card--logo.png";
import fitLogo from "../../assets/fitness--logo.png";
import Links from "../../components/links/Links";
import "./main.css";
import watchLogo from "../../assets/apple--watch--header.png";

const Main = () => {
  return (
    <div className="app__main">
      <div className="app__header-content2 header2--img">
        <h1>iPhone 14 Pro </h1>
        <h5>Pro. Beyond.</h5>
        <Links paragraph1="Learn more" paragraph2="Buy" />
      </div>

      <div className="app__header-content2  header3--img">
        <img src={watchLogo} alt="watch" />
        <h5>A healthy leap ahead.</h5>
        <Links paragraph1="Learn more" paragraph2="Buy" />
      </div>
      <div className="app__main-card main--img">
        <h1>ipad</h1>
        <h5>Lovable. Drawable. Magical.</h5>
        <Links paragraph1="Learn more" paragraph2="Buy" />
      </div>

      <div className="app__main2-card main2--img">
        <h1>MacBook Pro</h1>
        <h5>Supercharged by M2 Pro and M2 Max.</h5>
        <Links paragraph1="Learn more" paragraph2="Buy" />
      </div>
      <div className="app__main4-card main4--img">
        <img src={fitLogo} alt="fitness" />
        <h5>
          Welcome to the year of you. <br />
          Now all you need is iPhone.
        </h5>
        <Links paragraph1="Learn more" paragraph2="Try it free2" />
      </div>
      <div className="app__main6-card main6--img">
        <img src={cardLogo} alt="card" />
        <h5>
          Get up 3% Daily Cash back
          <br />
          with every purchase.
        </h5>
        <Links paragraph1="Learn more" paragraph2="Apply now" />
      </div>
    </div>
  );
};

export default Main;
