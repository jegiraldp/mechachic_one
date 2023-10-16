import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    values.perfil = parseInt(values.perfil, 10);
    Signup(values);
  });
  return (
    <section>
      {registerErrors.map((error, i) => (
        <div className="error" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit} className="form_register">
        <input
          type="text"
          {...register("nombreCompleto", { required: true })}
          placeholder="Nombre Completo"
        />
        {errors.nombreCompleto && <p>Se requiere el nombre completo</p>}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo"
        />
        {errors.email && <p>Se requiere un correo válido</p>}

        <input
          type="text"
          {...register("userName", { required: true })}
          placeholder="User Name"
        />
        {errors.userName && <p>Se requiere un User Name</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />
        {errors.password && <p>Se requiere una contraseña</p>}

        <input
          type="number"
          list="perfil"
          {...register("perfil", { required: true }, { maxLength: 1 })}
          placeholder="perfil"
        />
        {errors.perfil && <p>Se requiere un perfil</p>}
        <datalist type="number" id="perfil">
          <option type="number" value="1">
            1
          </option>
          <option type="number" value="2">
            2
          </option>
        </datalist>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
