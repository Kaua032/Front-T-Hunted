import styled from "styled-components";

export const InputStyled = styled.input`
    width: 300px;
    height: 30px;

    border: #D9D9D9 1px solid;
    border-radius: 5px;
    padding-left: 10px;

    &::placeholder{
        font-family: Roboto;
        color: #D9D9D9;
        font-size: 12px;
        font-weight: 300;
    }
`;
