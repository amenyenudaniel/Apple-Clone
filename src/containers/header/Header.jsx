import React from "react";
import "./header.css";
import { BsPlayFill } from "react-icons/bs";
import first from "../../assets/itv.png";
import second from "../../assets/name.png";
import third from "../../assets/season.png";

import Links from "../../components/links/Links";
const Header = () => {
  return (
    <div className="app__header">
      <nav className="app__header-heading">
        <h2>
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher.<span className="one">1</span>
          <span className="text">Shop iPhone</span>{" "}
          <span className="greater">{">"}</span>
        </h2>
      </nav>
      <div className="first__header header--img">
        <div className="first--img">
          <img src={first} alt="header" />
        </div>

        <div className="second--img">
          <img src={second} alt="header" />
        </div>

        <div className="third--img">
          <img src={third} alt="header" />
        </div>

        <button className="button--last">
          Stream now{" "}
          <div className="roundup">
            <BsPlayFill className="play--icon" />
          </div>
        </button>
      </div>
      <div className="app__header-content  header--img">
        <h1>iPhone 14</h1>
        <h5 className="second--header">
          Two great sizes. <br />
          Now with a splash of yellow.
        </h5>
        <Links paragraph1="Learn more" paragraph2="shop" />
      </div>

      <div className="app__header-content2  second__header">
        <h1>Air Pods Pro</h1>
        <h5 className="second--header">
          Up to 2x more Active Noice Cancellation
        </h5>
        <a className="a--first" href="#">
          Learn More {">"}
        </a>
        <a className="a--second" href="#">
          Shop {">"}
        </a>
      </div>
    </div>
  );
};

export default Header;
