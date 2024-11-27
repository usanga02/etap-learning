import { useContext, createContext, useState } from "react";
import axios from "axios";

export type AuthContextType = {
  user: {
    email: string;
    name: string;
    role: "ADMIN" | "USER";
    access_token: string;
    id: number;
  } | null;
  login: (formData: any) => void;
  signup: (formData: any) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const loggedInUser = localStorage.getItem("site");
  const [user, setUser] = useState<{
    email: string;
    name: string;
    role: "ADMIN" | "USER";
    access_token: string;
    id: number;
  } | null>(loggedInUser ? JSON.parse(loggedInUser ?? "") : null);

  const [message, setMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);

  const login = async (formData: any) => {
    try {
      const res = await axios.post("http://localhost:4000/auth/login", {
        ...formData,
      });
      setUser(res.data);
      localStorage.setItem("site", JSON.stringify(res.data));
      setMessage({ variant: "success", message: "login successfully" });
    } catch (e) {
      setMessage({ variant: "error", message: "user detail invalid" });
    }
  };

  const signup = async (formData: any) => {
    try {
      const res = await axios.post("http://localhost:4000/auth/signup", {
        ...formData,
      });
      setUser(res.data);
      localStorage.setItem("site", JSON.stringify(res.data));
      setMessage({ variant: "success", message: "login successfully" });
    } catch (e) {
      setMessage({ variant: "error", message: "Something went wrong" });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("site");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext) as AuthContextType;
