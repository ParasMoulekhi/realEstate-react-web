import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our values</a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <IoMenuSharp size={30} />
        </div>
      </div>
    </section>
  );
};
export default Header;
