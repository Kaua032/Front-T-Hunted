import styled from "styled-components";

export const RegisterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #E56750;
    background: linear-gradient(135deg, rgba(229, 103, 80, 1) 15%, rgba(231, 155, 80, 1) 85%);

    height: 100%;
    min-width: 100vw;
`
export const RegisterDivStyled = styled.div`
    display: flex;

    background: white;
    border-radius: 10px;

    width: 1120px;

    img{
        width: 400px;
        border-radius: 10px 0px 0px 10px
    }
`

export const RegisterFormDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 720px;

    form{
        width: 300px;
    }
`