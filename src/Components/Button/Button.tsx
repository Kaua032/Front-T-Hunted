import { ButtonStyled } from "./ButtonStyled";

function Button({type, name, ...props}){
    return <ButtonStyled type={type} {...props}>{name}</ButtonStyled>
}

export default Button;