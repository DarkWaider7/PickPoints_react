import React, { useState } from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  position: fixed;
  z-index: 20;
  left: 14px;
  top: 10px;
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);

  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0 !important;
  }
  .menu__btn {
    position: fixed;
    top: 28px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #616161;
    transition-duration: 0.25s;
  }
  .menu__btn > span::before {
    content: "";
    top: -8px;
  }
  .menu__btn > span::after {
    content: "";
    top: 8px;
  }
`;

const Burger = ({ setActive }) => {
  return (
    <StyledBurger>
      <input
        id="menu__toggle"
        type="checkbox"
        onChange={(e) => setActive(e.target.checked)}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
    </StyledBurger>
  );
};

export default Burger;
