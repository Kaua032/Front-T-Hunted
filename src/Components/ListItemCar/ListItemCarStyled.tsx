import styled from "styled-components";

export const ListItemCarStyled = styled.div`
  width: 500px;
  height: 100px;

  display: flex;

  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  border-radius: 10px;

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

  #name_quantity h3 {
    color: #5e5d5d;
    font-size: 12px;
    font-weight: 500;
  }
  #name_quantity p {
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 500;
  }

  #price_add p{
    
  }
`;
