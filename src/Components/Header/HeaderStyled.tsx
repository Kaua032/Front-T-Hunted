import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 50px;

  background: #e56750;
  background: linear-gradient(
    135deg,
    rgba(229, 103, 80, 1) 15%,
    rgba(231, 155, 80, 1) 85%
  );

  #logo {
    width: 200px;
  }

  div {

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;

    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }
  div img {
    width: 40px;
    height: 40px;
  }

  div button {
    width: 25px;
    height: 25px;
    background-image: url("./logout.png");

    background-color: transparent;
    border: none;

    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SearchContainerStyled = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  input {
    height: 30px;
    width: 400px;
    padding: 10px 40px 10px 15px;
    border-radius: 100px;
    border: none;
    outline: none;
  }

  input::placeholder {
    font-family: Roboto, sans-serif;
    color: #d9d9d9;
    font-size: 14px;
    font-weight: 300;
  }

  button {
    position: absolute;
    right: 15px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    .search-icon {
      width: 16px;
      height: 16px;
      object-fit: contain;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover .search-icon {
      opacity: 0.6;
    }
  }
`;
