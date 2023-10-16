import { useForm } from "react-hook-form";
import "../css/registro.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import React from "react";

function registrarRepuesto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  return <div>registrarRepuesto</div>;
}

export default registrarRepuesto;
