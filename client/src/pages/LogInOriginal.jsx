import { useForm } from "react-hook-form";
import "../css/LogIn.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/metricas");
    }
  }, [isAuthenticated]);
  return (
    <section className="login">
      <form onSubmit={onSubmit} className="login__form">
        <h2>Log In</h2>
        {signinErrors.map((error, i) => (
          <div className="error" key={i}>
            {error}
          </div>
        ))}
        <input
          type="text"
          {...register("userName", { required: true })}
          placeholder="Username"
        />
        {errors.userName && <p className="error">Required*</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />
        {errors.password && <p className="error">Required*</p>}

        <button type="submit">Enter</button>
      </form>
    </section>
  );
}

export default LogIn;
