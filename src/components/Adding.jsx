import React, { useState } from "react";
import { data } from "../data/data.js";
import AddressBox from "./AddressBox.jsx";
import Burger from "../UI/Burger.jsx";
import styled from "styled-components";

const StyledAdding = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  .burger-menu {
    display: ${({ activeBurger }) => (activeBurger ? "block" : "none")};
    position: absolute;
    width: 300px;
    height: 100vh;
    background-color: #eff7f7;

    &__box {
      display: flex;
      padding: 0 20px;
      margin-top: 100px;
      flex-direction: column;
    }
  }

  .menu-box__budget-box {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }
`;

const Adding = ({
  filteredBudgets,
  filterAdreess,
  setValueBudget,
  isPressed,
  setIsPressed,
  setCordinates,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeBurger, setActiveBurger] = useState(false);

  const addressesAll = data[0].pickPoints.map((address) => {
    return address;
  });

  return (
    <StyledAdding activeBurger={activeBurger}>
      <Burger setActive={setActiveBurger} />
      <div className="burger-menu burger">
        <div className="burger-menu__box menu">
          {filteredBudgets.map((budget, index) => {
            return (
              <div key={index} className="menu__box">
                <div className="menu-box__budget-box">
                  <div className="menu-box__budget">{budget}</div>
                  <input
                    className="menu-box__budget-input"
                    type="radio"
                    name="contact"
                    value={budget}
                    onChange={(e) => {
                      setValueBudget(e.target.value);
                      setIsChecked(e.target.checked);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <AddressBox
          addressesAll={addressesAll}
          filterAdreess={filterAdreess}
          inputChecked={isChecked}
          isPressed={isPressed}
          setIsPressed={setIsPressed}
          setCordinates={setCordinates}
        />
      </div>
    </StyledAdding>
  );
};

export default Adding;
