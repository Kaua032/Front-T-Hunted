import { ButtonStyled } from "./ButtonStyled";

function Button({type, name}){
    return <ButtonStyled type={type}>{name}</ButtonStyled>
}

export default Button;