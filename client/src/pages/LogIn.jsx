import React from "react";
import "../css/LogIn.css";
import { useForm } from "react-hook-form";
import {LoginSchema} from '../schemas/user.schemas.js'
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LogIn() {
  const { signIn, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/metricas");
    }
  }, [isAuthenticated]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    //event.preventDefault();
    //console.log(data)
    signIn(data);
    setValue("userName", "");
    setValue("password", "");
  });
 

  return (
    <section className="login">
      <form className="login__form" onSubmit={onSubmit}>
        <h2>Log In</h2>
        {signinErrors.map((e, i) => (
          <div className="errorLogin" key={i}>
            {e}
          </div>
        ))}
        <input placeholder="Username" {...register("userName")} className="inputLogin" id="username"/>
        {errors.userName?.message && 
          <p className="elError">{errors.userName.message}</p>
        }

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="inputLogin"
          id="password"
        />
        {errors.password?.message && (
          <p className="elError">{errors.password.message}</p>
        )}
        <button type="submit" className="btnLogin">Login</button>
      </form>
    </section>
  );
}

export default LogIn;
