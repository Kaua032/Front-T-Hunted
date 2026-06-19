import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Importamos também o SigninData que você exportou no passo anterior
import { signinSchema, type SigninData } from "../../schemas/signinSchema";
import { signin } from "../../services/userService";

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
            const errorMessage = error.response?.data?.message || "Erro ao fazer login.";
            setServerError(errorMessage);
            console.error(error);
        }
    }

    useEffect(() => {
        if(Cookies.get("token")){
            navigate("/home")
        }
    }, [navigate]);

    return (
        <div>
            <h2>Login T-Hunted</h2>
            
            {serverError && <p style={{ color: "red", fontWeight: "bold" }}>{serverError}</p>}

            <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                <div style={{ marginBottom: "10px" }}>
                    <input 
                        type="text" 
                        placeholder="E-mail" 
                        {...registerSignin("email")} 
                    />
                    {errorsSignin.email && <span style={{ color: "red", display: "block", fontSize: "12px" }}>{errorsSignin.email.message}</span>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        {...registerSignin("password")} 
                    />
                    {errorsSignin.password && <span style={{ color: "red", display: "block", fontSize: "12px" }}>{errorsSignin.password.message}</span>}
                </div>

                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login;