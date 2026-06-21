import styled from "styled-components";

export const ListItemCarStyled = styled.div`
  width: 500px;
  height: 100px;

  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  border-radius: 10px;

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #imgCar {
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px 0px 0px 10px;

    background: #e56750;
    background: linear-gradient(
      135deg,
      rgba(229, 103, 80, 1) 15%,
      rgba(231, 155, 80, 1) 85%
    );
  }

  #imgCar img {
    max-width: 100px;
    border-radius: 10px 0px 0px 10px;
  }

  #name_quantity{
    display: flex;
    flex-direction: column;

    padding: 17px 0px 10px 10px;
  }

  #name_quantity h3 {
    color: #5e5d5d;
    font-size: 12px;
    font-weight: 500;
  }
  #name_quantity p {
    margin-top: 5px;

    color: #a6a6a6;
    font-size: 12px;
    font-weight: 500;
  }

  #name_quantity input {
    width: 40px;
    font-size: 14px;
    font-weight: 500;

    border: none;

    text-align: center;

    color: #5e5d5d;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  #name_quantity input::-webkit-outer-spin-button,
  #name_quantity input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  #name_quantity div {
    display: flex;

    margin-top: auto;
  }

  #name_quantity div button {
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 0;

    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  #price_add {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    padding: 10px 10px 10px 0px;
  }

  #price_add div {
    display: flex;
  }
  #price_add div input {
    border: none;

    -moz-appearance: textfield;
    appearance: textfield;

    transition: width 0.15s ease-in-out;
  }

  #price_add div input::-webkit-outer-spin-button,
  #price_add div input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  #price_add div input,
  #price_add div p {
    color: #5e5d5d;
    font-size: 24px;
    font-weight: 600;
  }
`;
