import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import "./navbar.css";
import { BsApple } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <>
      <div className="app__navbar">
        <BsApple className="apple__logo" />
        <a className="big__screen-links" href="#">
          Store
        </a>
        <a className="big__screen-links" href="#">
          Mac
        </a>
        <a className="big__screen-links" href="#">
          ipad
        </a>
        <a className="big__screen-links" href="#">
          iphone
        </a>
        <a className="big__screen-links" href="#">
          Watch
        </a>
        <a className="big__screen-links" href="#">
          AirPods
        </a>
        <a className="big__screen-links" href="#">
          Tv & Home
        </a>
        <a className="big__screen-links" href="#">
          Entertainment
        </a>
        <a className="big__screen-links" href="#">
          Accessories
        </a>
        <a className="big__screen-links" href="#">
          Support
        </a>
        <div className="nav__icons">
          <AiOutlineSearch className="search__logo" />
          <BsBag className="bag__logo" />
          <HiMenuAlt4 className="menu2" onClick={() => setToggleMenu(true)} />
        </div>
      </div>

      <div className="app__navbar-smallscreen">
        {toggleMenu && (
          <div className="app__navbar-overlay slide-bottom">
            <RiCloseLine
              className="close__overlay"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__navbar-smallscreen__links">
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">ipad</a>
              </li>
              <li>
                <a href="#">iphone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">Tv & Home</a>
              </li>
              <li>
                <a href="#">Entertainment</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
