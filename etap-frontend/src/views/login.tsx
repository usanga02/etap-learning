import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/button";
import { AuthContextType, useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const { login, message } = useAuth() as AuthContextType;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    login(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit min-w-[420px] w-1/3 space-y-8 px-10 py-8 pb-14 border border-slate-500 rounded-lg">
        <h3 className="font-bold text-4xl text-slate-700 text-center">Login</h3>
        <form onSubmit={handleLogin} className="space-y-6 w-full">
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
          <Input
            label="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="********"
          />
          <Button
            disabled={formData.email == "" || formData.password == ""}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <p className="text-center text-slate-700 font-semibold">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-slate-500 hover:underline font-bold"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
