import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { signupSchema, type SignupData } from "../../schemas/signupSchema";
import { signup } from "../../services/userService";
import {
  RegisterStyled,
  RegisterDivStyled,
  RegisterFormDivStyled,
} from "../Login/LoginStyled";

import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

function Register() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: {errors: errorsSignup},
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  async function inHandleSubmit(data: SignupData) {
    setServerError("");
    console.log(data);

    try {
        const response = await signup(data);

        console.log(response);

        if (response.status === 201){
            navigate("/");
        }

    }catch(error: any){
        const errorMessage =
        error.response?.data?.message || "Erro ao fazer o cadastro.";
      setServerError(errorMessage);
      console.error(error);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <RegisterStyled>
      <RegisterDivStyled>
        <img src="car_register.jpg" />

        <RegisterFormDivStyled>
          <h2>Cadastrar</h2>

          <form onSubmit={handleSubmitSignup(inHandleSubmit)}>
            <div>
              <p className="inputTitle">Nome:</p>
              <Input
                type="text"
                placeholder="Nome"
                name="name"
                register={registerSignup}
              />
            </div>

            <div>
              <p className="inputTitle">Email:</p>
              <Input
                type="text"
                placeholder="example@example.com"
                name="email"
                register={registerSignup}
              />
            </div>

            <div>
              <p className="inputTitle">Senha:</p>
              <Input
                type="password"
                placeholder="••••••••"
                name="password"
                register={registerSignup}
              />
            </div>

            <div>
              <p id="navigate_register">
                Já possui uma conta? <a href="/">Clique aqui</a> para entrar .
              </p>
              <Button type="submit" name="Cadastrar" />
            </div>
          </form>
        </RegisterFormDivStyled>
      </RegisterDivStyled>
    </RegisterStyled>
  );
}

export default Register;
