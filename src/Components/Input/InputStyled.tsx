import styled from "styled-components";

export const InputStyled = styled.input`
  width: 300px;
  height: 30px;

  border: #d9d9d9 1px solid;
  border-radius: 5px;
  padding-left: 10px;

  &::placeholder {
    font-family: Roboto;
    color: #d9d9d9;
    font-size: 12px;
    font-weight: 300;
  }

  @media (max-width: 450px) {
    width: 95%;
  }
`;
