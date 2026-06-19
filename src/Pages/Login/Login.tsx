import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { signinSchema, type SigninData } from "../../schemas/signinSchema";
import { signin } from "../../services/userService";
import {
  RegisterStyled,
  RegisterDivStyled,
  RegisterFormDivStyled,
} from "./LoginStyled";

import Input from "../../Components/Input/Input";

function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm<SigninData>({
    resolver: zodResolver(signinSchema),
  });

  async function inHandleSubmit(data: SigninData) {
    setServerError("");

    try {
      const response = await signin(data);
      Cookies.set("token", response.data.access_token, { expires: 1 });

      navigate("/home");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Erro ao fazer login.";
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
          <h2>Entrar</h2>

          <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
            <div>
              <p className="inputTitle">Email:</p>
              <Input
                type="text"
                placeholder="example@example.com"
                name="email"
                register={registerSignin}
              />
              {errorsSignin.email && (
                <span
                  style={{ color: "red", display: "block", fontSize: "12px" }}
                >
                  {errorsSignin.email.message}
                </span>
              )}
            </div>

            <div>
              <p className="inputTitle">Senha:</p>
              <Input
                type="text"
                placeholder="••••••••"
                name="email"
                register={registerSignin}
              />
              {errorsSignin.password && (
                <span
                  style={{ color: "red", display: "block", fontSize: "12px" }}
                >
                  {errorsSignin.password.message}
                </span>
              )}
            </div>

            <div>
              <p id="">
                Náo possuí uma conta? <a href="">Clique aqui</a> para criar.
              </p>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </RegisterFormDivStyled>
      </RegisterDivStyled>
    </RegisterStyled>
  );
}

export default Login;
