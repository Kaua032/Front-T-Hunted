import styled from "styled-components";

export const GridItemCarCollectionStyled = styled.div`
  width: 200px;
  height: 200px;

  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  border-radius: 10px;

  .imgCarCollection {
    width: 200px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px 10px 0px 0px;

    background: #e56750;
    background: linear-gradient(
      135deg,
      rgba(229, 103, 80, 1) 15%,
      rgba(231, 155, 80, 1) 85%
    );
  }
  .imgCarCollection img {
    max-width: 100px;
  }

  .layout_card{
    display: flex;

    padding: 17px 10px 10px 10px;
  }

  .name_quantity h3 {
    color: #5e5d5d;
    font-size: 12px;
    font-weight: 500;
  }
  .name_quantity p {
    margin-top: 5px;

    color: #a6a6a6;
    font-size: 12px;
    font-weight: 500;
  }


  .name_quantity input {
    width: 40px;
    font-size: 14px;
    font-weight: 500;

    border: none;

    text-align: center;

    color: #5e5d5d;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .name_quantity input::-webkit-outer-spin-button,
  .name_quantity input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .name_quantity div {
    display: flex;

    margin-top: auto;
  }

  .name_quantity div button {
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 0;

    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .prices{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .prices .purchase, .prices .average{
    color: #5e5d5d;
    font-size: 18px;
    font-weight: 600;
  }
`;
