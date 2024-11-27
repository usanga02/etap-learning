import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/button";
import { registeredUsers } from "../data";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    signup(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit min-w-[420px] w-1/3 space-y-8 px-10 py-8 pb-14 border border-slate-500 rounded-lg">
        <h3 className="font-bold text-4xl text-slate-700 text-center">
          Sign Up
        </h3>
        <form onSubmit={handleSignup} className="space-y-6 w-full">
          <Input
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
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
          <Input
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            placeholder="********"
          />
          <Button
            disabled={
              formData.email == "" ||
              formData.password == "" ||
              formData.confirmPassword == ""
            }
            type="submit"
          >
            Submit
          </Button>
        </form>
        <p className="text-center text-slate-700 font-semibold">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-slate-500 hover:underline font-bold"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
