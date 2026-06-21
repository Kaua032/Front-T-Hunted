import styled from "styled-components";

export const RegisterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #e56750;
  background: linear-gradient(
    135deg,
    rgba(229, 103, 80, 1) 15%,
    rgba(231, 155, 80, 1) 85%
  );

  height: 100%;
  min-width: 100vw;
`;
export const RegisterDivStyled = styled.div`
  display: flex;

  background: white;
  border-radius: 10px;

  max-height: 80vh;
  width: 1120px;

  img {
    width: 400px;
    border-radius: 10px 0px 0px 10px;
  }

  @media (max-width: 1250px) {
    width: 80%;
    img {
      width: 40%;
    }
  }
  @media (max-width: 730px){
    width: 80%;
   img{
    display: none;
   } 
  }
`;

export const RegisterFormDivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 720px;

  h2 {
    color: #5e5d5d;
    font-size: 32px;
    font-weight: 600;
  }

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    width: 300px;
  }

  form .inputTitle {
    color: #5e5d5d;
    font-size: 10px;
    font-weight: 600;
  }

  form div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  form div #navigate_register {
    margin-top: 10px;
    margin-bottom: 5px;

    color: #5e5d5d;
    font-weight: 600;
    font-size: 10px;
  }

  form div #navigate_register a {
    color: #2699ea;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 20px;
    }

  }

  @media (max-width: 730px){
    width: 100%;

    padding: 40px 0px 50px 0px;
    form{
      gap: 10px;
    }
  }


`;
