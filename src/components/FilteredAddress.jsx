import React from "react";
import styled from "styled-components";
import { data } from "../data/data.js";

const StyledAddress = styled.div`
  position: relative;
  z-index: 20;
  top: 150px;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: rgb(58, 69, 71);
  height: auto;

  .address__budgets {
    width: auto;
    padding: 10px;
    margin: 5px;
    background-color: rgb(34, 40, 42);
    color: #fff;
  }
  .address__address {
    margin-top: 5px;
    padding: 10px 0;
    color: #fff;
    font-size: 17px;
  }

  .address__budgets {
    display: flex;
    font-size: 13px;
    color: #fff;
    font-weight: bold;
  }

  .address__budget {
    margin-right: 10px;
    padding: 5px;
    background-color: rgb(58, 69, 71);
  }
`;
const FilteredAddress = ({
  filterAdreess,
  isPressed,
  setIsPressed,
  setCordinates,
}) => {
  return (
    <>
      {filterAdreess?.map((address, index) => {
        return (
          <StyledAddress
            className="address"
            key={index}
            onClick={() => {
              setIsPressed(!isPressed);
              setCordinates({
                latitude: address.latitude,
                longitude: address.longitude,
              });
            }}
            style={{ display: "block" }}>
            <div className="address__address">{address.address}</div>
            <div className="address__budgets">
              {address.budgets.map((budget, index) => {
                return (
                  <div className="address__budget" key={index}>
                    {budget}
                  </div>
                );
              })}
            </div>
          </StyledAddress>
        );
      })}
    </>
  );
};

export default FilteredAddress;
